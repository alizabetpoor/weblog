import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000";

let token = localStorage.getItem("authTokens");

let authtoken = token ? JSON.parse(token) : null;

const AxiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authtoken?.access}` },
});

AxiosInstance.interceptors.request.use(async (req) => {
  if (!authtoken) {
    let token = localStorage.getItem("authTokens");

    let authtoken = token ? JSON.parse(token) : null;
    req.headers.Authorization = `Bearer ${authtoken?.access}`;
  }
  const user = jwt_decode(authtoken.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  if (!isExpired) {
    return req;
  }
  const response = await axios.post(`${baseURL}/api/token/refresh/`, {
    refresh: authtoken.refresh,
  });
  localStorage.setItem("authTokens", JSON.stringify(response.data));
  req.headers.Authorization = `Bearer ${response.data.access}`;
  return req;
});

export default AxiosInstance;
