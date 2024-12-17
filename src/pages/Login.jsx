import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-124px)] bg-gray-100 p-5">
      <div className="rounded-lg bg-lightPink bg-center bg-cover bg-no-repeat shadow-xl p-5 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <form>
          {/* Email Input */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control w-full mb-4 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <button
              type="button"
              className="absolute top-[50px] right-4 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary text-white w-full mb-4">Login</button>

          {/* Login with Google */}
          <button className="btn btn-outline border-main hover:bg-main w-full flex items-center justify-center gap-2 mb-4">
            <FaGoogle /> Login with Google
          </button>

          {/* Signup Link */}
          <p className="text-center">
            New to here?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
