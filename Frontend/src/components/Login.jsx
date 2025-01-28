import React from 'react'
import { useState } from 'react';
import heroimg from '../assets/heroimg.png'
import bgimage from '../assets/bgimage.jpg'

function Login() {
 
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-image">
    <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-transparent shadow-lg rounded-2xl overflow-hidden">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 p-8 bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        <p className="mt-2 text-sm text-gray-600">
          Don’t have an account yet?{" "}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter 6 characters or more"
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <a
              href="#"
              className="text-sm text-purple-600 hover:underline mt-2 block"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600 text-sm">or login with</p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <img
              src="https://img.icons8.com/color/24/null/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Google
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
            <img
              src="https://img.icons8.com/color/24/null/facebook-new.png"
              alt="Facebook"
              className="mr-2"
            />
            Facebook
          </button>
        </div>
      </div>
      {/* Right Illustration Section */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-gray-50 items-center justify-center">
        <img
          src={heroimg}
          alt="Illustration"
          className="w-3/4"
        />
      </div>
    </div>
  </div>
  </>
);
  
}

export default Login