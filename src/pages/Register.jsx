import React from "react";

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter password"
              />
            </div>

            <button
              type="button"
              className="w-full bg-black text-white py-3 rounded-xl mt-2 hover:opacity-90 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <span className="text-black font-medium cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
