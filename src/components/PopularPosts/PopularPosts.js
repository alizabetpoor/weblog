import { Link } from "react-router-dom";
import profilepic from "../../assets/images/profile.webp";
const PopularPosts = () => {
  return (
    <div className="flex flex-col mt-6 items-start space-y-7">
      <h2 className="font-sahelbold">محبوب ترین های ویرگول</h2>
      <div className="flex items-center space-x-reverse space-x-2">
        <Link to="/profile/alizabetpoor">
          <img className="rounded-full h-12 w-12" src={profilepic} alt="" />
        </Link>
        <div className="flex flex-col items-start">
          <Link to="/post/2">
            <h5 className="font-sahelbold text-xs">
              چرا تو اینستاگرام گیر میکنیم؟
            </h5>
          </Link>
          <Link to="/profile/alizabetpoor">
            <span className="text-gray-500 text-xs">علی ضابط پور</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-reverse space-x-2">
        <Link to="/profile/alizabetpoor">
          <img className="rounded-full h-12 w-12" src={profilepic} alt="" />
        </Link>
        <div className="flex flex-col items-start">
          <Link to="/post/2">
            <h5 className="font-sahelbold text-xs">
              چرا تو اینستاگرام گیر میکنیم؟
            </h5>
          </Link>
          <Link to="/profile/alizabetpoor">
            <span className="text-gray-500 text-xs">علی ضابط پور</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-reverse space-x-2">
        <Link to="/profile/alizabetpoor">
          <img className="rounded-full h-12 w-12" src={profilepic} alt="" />
        </Link>
        <div className="flex flex-col items-start">
          <Link to="/post/2">
            <h5 className="font-sahelbold text-xs">
              چرا تو اینستاگرام گیر میکنیم؟
            </h5>
          </Link>
          <Link to="/profile/alizabetpoor">
            <span className="text-gray-500 text-xs">علی ضابط پور</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-reverse space-x-2">
        <Link to="/profile/alizabetpoor">
          <img className="rounded-full h-12 w-12" src={profilepic} alt="" />
        </Link>
        <div className="flex flex-col items-start">
          <Link to="/post/2">
            <h5 className="font-sahelbold text-xs">
              چرا تو اینستاگرام گیر میکنیم؟
            </h5>
          </Link>
          <Link to="/profile/alizabetpoor">
            <span className="text-gray-500 text-xs">علی ضابط پور</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-reverse space-x-2">
        <Link to="/profile/alizabetpoor">
          <img className="rounded-full h-12 w-12" src={profilepic} alt="" />
        </Link>
        <div className="flex flex-col items-start">
          <Link to="/post/2">
            <h5 className="font-sahelbold text-xs">
              چرا تو اینستاگرام گیر میکنیم؟
            </h5>
          </Link>
          <Link to="/profile/alizabetpoor">
            <span className="text-gray-500 text-xs">علی ضابط پور</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
