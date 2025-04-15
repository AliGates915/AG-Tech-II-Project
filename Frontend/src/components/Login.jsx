import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

export default function AuthPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  // Because images are loaded more quickly
  useEffect(() => {
    const img = new Image();
    img.src = "./Images/Auth/login2.jpg"; // Adjust path if needed
    img.onload = () => setImageLoaded(true);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // for React Loader
  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <ClimbingBoxLoader color="#2563EB" loading={true} size={15} />
      </div>
    );
  }

  return (
    <>
      <div
        className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
        style={{
          backgroundImage: imageLoaded
            ? "url(./Images/Auth/login2.jpg)"
            : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="max-w-md w-full mx-auto">
          <form
            className="bg-white/70 backdrop-blur-md rounded-2xl p-6 
  shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="mb-4">
              <h3 className="text-gray-800 text-3xl font-extrabold">Login</h3>
              <p className="text-sm text-gray-800 mt-3">
                You have no Account?{" "}
                <a
                  href=""
                  onClick={() => navigate("/signup")}
                  className="text-blue-600 font-medium"
                >
                  Create an account
                </a>
              </p>
            </div>

            {/* Username Field */}
            <div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-9 1.657-9 5v1h18v-1c0-3.343-5.686-5-9-5z" />
                </svg>
              </div>
            </div>

            {/* Password Field */}
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
                  placeholder="Password"
                  id="password"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                  onClick={togglePasswordVisibility} // Toggle password visibility on click
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                </svg>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-10 mb-4">
              <Link to="/home">
                <button
                  type="button"
                  // disabled={loading}
                  // onClick={handleClick}
                  className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider cursor-pointer
                  rounded-full text-white bg-[#0071c2] hover:bg-[#3a90f3] focus:outline-none"
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="flex justify-center text-gray-500 text-sm hover:text-[#0071c2]">
              <a href="https://aligates-portfolio.netlify.app/" target="blank">
                Designed by AG-Tech-II
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
