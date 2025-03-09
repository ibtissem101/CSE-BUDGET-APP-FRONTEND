"use client";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left side with illustration */}
      <div className="hidden md:flex md:w-5/12 bg-Violet-900 items-center justify-center p-8 relative">
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <img src="/SideBar/logo.png" className="w-6" alt="Logo" />
          <span className="text-2xl italic text-white -tracking-4">
            Tracker
          </span>
        </div>
        <img
          src="/auth/Group.png"
          alt="Person working on laptop"
          className="max-w-xs"
        />
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-7/12 flex items-center justify-center p-4 md:p-8">
        <div className="md:hidden flex items-center gap-2 absolute top-6 left-6">
          <img src="/SideBar/logo-purp.png" className="w-6" alt="Logo" />
          <span className="text-2xl italic text-Violet-500 -tracking-4">
            Tracker
          </span>
        </div>

        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-2">Sign in</h1>
          <p className="text-gray-600 mb-6">
            Don't have account?{" "}
            <Link
              href="/auth/register"
              className="text-Violet-500 hover:underline"
            >
              Create Account
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Violet-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-Violet-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Violet-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <img
                    src={
                      showPassword
                        ? "/myCard/eyeclosed.png"
                        : "/myCard/view.png"
                    }
                    alt={showPassword ? "Hide password" : "Show password"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-Violet-500 focus:ring-Violet-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
