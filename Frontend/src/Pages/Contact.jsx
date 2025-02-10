import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
        <Header/>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-gray-600">We'd love to hear from you! Send us a message.</p>
          </div>
  
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Email Address</label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Subject</label>
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Google Map Section */}
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099214!2d144.95373631531676!3d-37.81627974202113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1640854685643!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </>
    );
  }
  