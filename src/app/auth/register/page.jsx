"use client";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ ...formData, agreeToTerms });
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

      {/* Right side with registration form */}
      <div className="w-full md:w-7/12 flex items-center justify-center p-4 md:p-8">
        <div className="md:hidden flex items-center gap-2 absolute top-6 left-6">
          <img src="/SideBar/logo-purp.png" className="w-6" alt="Logo" />
          <span className="text-2xl italic text-Violet-500 -tracking-4">
            Tracker
          </span>
        </div>

        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-2">Create account</h1>
          <p className="text-gray-600 mb-6">
            Already have account?{" "}
            <Link
              href="/auth/login"
              className="text-Violet-500 hover:underline"
            >
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Violet-500"
                placeholder="Enter your full name"
                required
              />

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Violet-500"
                placeholder="Choose a username"
                required
              />
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Violet-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Violet-500"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <img
                    src={
                      showPassword ? "/auth/close-eye.png" : "/auth/show.png"
                    }
                    alt={showPassword ? "Hide password" : "Show password"}
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-Violet-500"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <img
                    src={
                      showConfirmPassword
                        ? "/auth/close-eye.png"
                        : "/auth/show.png"
                    }
                    alt={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="h-4 w-4 text-Violet-500 focus:ring-Violet-500 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I've read and agree with{" "}
                <Link href="/terms" className="text-Violet-500 hover:underline">
                  Terms of Service
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-Violet-500 text-white py-3 rounded-lg hover:bg-Violet-600 transition-colors font-semibold"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
