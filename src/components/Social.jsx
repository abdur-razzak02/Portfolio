import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="px-5 lg:px-0 lg:w-3/4 mx-auto mb-10 lg:mb-16">
      <div className="flex justify-center">
        <nav className="flex items-center gap-3 md:place-self-center ">
          <Link to={"https://github.com/abdur-razzak02"} target="_blank">
            <img
              src={"https://i.ibb.co.com/vhvQwFr/github-icon.png"}
              alt="github"
              className="w-[26px]"
            />
          </Link>
          <div className="divider divider-horizontal m-0"></div>
          <Link
            to="https://www.facebook.com/abdur.razzak.yeamin/"
            target="_blank"
          >
            <img
              src={"https://i.ibb.co.com/PCHJWcJ/facebook-box.png"}
              alt="facebook icon"
              className="w-6"
            />
          </Link>
          <div className="divider divider-horizontal m-0"></div>
          <Link
            to={"https://www.instagram.com/abdur_razzak_yeamin/"}
            target="_blank"
          >
            <img
              src={"https://i.ibb.co.com/P6PVT9S/instagram.png"}
              alt="instagram icon"
              className="w-6"
            />
          </Link>
          <div className="divider divider-horizontal  m-0"></div>
          <Link
            to={"https://www.linkedin.com/in/abdur-razzak2002/"}
            target="_blank"
          >
            <img
              src={"https://i.ibb.co.com/GMf3sY8/linkedin.png"}
              alt="linkedin icon"
              className="w-6"
            />
          </Link>
        </nav>
      </div>

      <div>
        <h1 className="text-main font-medium text-center py-3 text-xl">abdurrazzakyeamin@gmail.com</h1>
      </div>
    </div>
  );
};

export default Social;
