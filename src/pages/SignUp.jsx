import  { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-124px)] bg-gray-100 p-5">
      <div className="card rounded-lg w-96 bg-lightPink shadow-xl p-6 bg-cover bg-center bg-no-repeat">
        <h1 className="text-2xl font-bold text-center mb-3">Sign Up</h1>

        <form>
          {/* Name Input */}
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email Input */}
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL Input */}
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
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
              className="absolute top-[52px] right-4 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Sign Up Button */}
          <button className="btn btn-primary w-full mb-4">Sign Up</button>

          {/* Sign Up with Google */}
          <button className="btn btn-outline border-main hover:bg-main w-full flex items-center justify-center gap-2 mb-4">
            <FaGoogle /> Sign Up with Google
          </button>

          {/* Login Link */}
          <p className="text-center">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;