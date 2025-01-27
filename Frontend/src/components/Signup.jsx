import React, { useState } from "react";
import heroimg from "../assets/heroimg.png";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Password Validation
    if (name === "password") {
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character
      const capitalLetterRegex = /[A-Z]/; // At least one capital letter
      const invalidCharRegex = /[_-]/; // Invalid characters

      let error = "";

      if (!specialCharRegex.test(value)) {
        error = "Password must contain at least one special character.";
      } else if (!capitalLetterRegex.test(value)) {
        error = "Password must contain at least one capital letter.";
      } else if (invalidCharRegex.test(value)) {
        error = "Password contains invalid characters (_ or -).";
      }

      setErrors({ ...errors, password: error });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();


    if (errors.password) {
      alert("Please fix the password errors before submitting.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    console.log("Submitting:", dataToSend);

    // Add backend API call here

    try {
      
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      else {
        alert('User registered successfully!');
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
      
    } catch (error) {
      
    }
   
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* Right Form Section */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
            <form className="mt-6" onSubmit={handleSubmit} >
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter 6 characters or more"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "focus:ring-blue-400"
                  }`}
                  required
                />
              
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
          
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              >
                SIGN UP
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600 text-sm">
              or sign up with
            </p>
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

          {/* Left Image Section */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-gray-50 items-center justify-center">
            <img src={heroimg} alt="Illustration" className="w-3/4" />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Signup;
