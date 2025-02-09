import React from "react";
import { useEffect, useState, useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Tooltip } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthContext";
import { useNavigate } from "react-router-dom";

function Header({ toggleDarkMode }) {
  const [lighticon, setlighticon] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const handleIconMode = () => {
    if (lighticon) {
      setlighticon(false);
    } else setlighticon(true);
  };

  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:5000/api/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      logout();
      navigate("/login");
    });
  };

  return (
    <>
      <header
        className={` dark:text-white text-black sticky top-0 shadow-md transition-all z-10 dark:shadow-slate-800 backdrop-blur-sm sm:h-16 md:h-full`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 md:px-6 px-2">
          {/* Branding */}
          <NavLink
            to="/"
            className="md:text-2xl font-bold hover:text-gray-200 text-lg"
          >
            Tax Invoice Generator
          </NavLink>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-3 mr-3">
            <div
              onClick={toggleDarkMode}
              className="cursor-pointer transition-all "
            >
              <span onClick={handleIconMode} className="transition-all">
                {lighticon ? (
                  <Tooltip title="Enable Light Mode">
                    <LightModeIcon />
                  </Tooltip>
                ) : (
                  <Tooltip title="Enable Dark Mode">
                    <DarkModeIcon />
                  </Tooltip>
                )}
              </span>
            </div>

            <button
              className="block md:hidden text-black dark:text-white focus:outline-none "
              id="menu-button"
              onClick={() => toggleDrawer(true)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            id="menu"
            className="hidden md:flex space-x-6 items-center font-medium"
          >
            <li>
              <NavLink
                to="/"
                className="hover:text-gray-300 transition duration-200"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                      }
                    : {}
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="hover:text-gray-300 transition duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-gray-300 transition duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-300 transition duration-200"
              >
                Contact
              </a>
            </li>
            <li
              onClick={toggleDarkMode}
              className="cursor-pointer transition-all"
            >
              <span onClick={handleIconMode} className="transition-all">
                {lighticon ? (
                  <Tooltip title="Enable Light Mode">
                    <LightModeIcon />
                  </Tooltip>
                ) : (
                  <Tooltip title="Enable Dark Mode">
                    <DarkModeIcon />
                  </Tooltip>
                )}
              </span>
            </li>
            <li>
                    {user ? (
                      
                        <button onClick={handleLogout}>Logout</button>
                    
                    ) : (
                      <a
                        href="/login"
                        className=" dark:bg-zinc-700 dark:text-white  bg-gray-200 text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200"
                      >
                        Login
                      </a>
                    )}
                  </li>
            <Drawer
              open={open}
              onClose={() => toggleDrawer(false)}
              anchor="right"
            >
              <div
                style={{ width: 235, padding: "16px", height: "100%" }}
                className="dark:bg-zinc-950"
              >
                <ul className="space-y-4 ">
                  <li className="text-black dark:text-white text-lg ">Home</li>
                  <li className="text-black dark:text-white text-lg ">
                    Features
                  </li>
                  <li className="text-black dark:text-white text-lg ">
                    Pricing
                  </li>
                  <li className="text-black dark:text-white text-lg">
                    Contact
                  </li>
                  <li>
                    {user ? (
                      
                        <button onClick={handleLogout}>Logout</button>
                    
                    ) : (
                      <a
                        href="/login"
                        className=" dark:bg-zinc-700 dark:text-white  bg-gray-200 text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200"
                      >
                        Login
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            </Drawer>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
