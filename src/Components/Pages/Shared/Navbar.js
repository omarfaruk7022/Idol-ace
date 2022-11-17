import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images//idolace.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-16 mx-auto max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  class="text-gray-500 transition px-8 h-14  hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  class="text-gray-500 transition px-8 h-14  hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                  to="/about"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  class="text-gray-500 transition px-8 h-14  hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                  to="/services"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <a className=" normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                class="text-gray-500  transition px-6 h-12 m-auto hover:bg-accent rounded hover:text-white ease-in duration-200"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                class="text-gray-500 transition px-6 h-12 m-auto hover:bg-accent rounded hover:text-white ease-in duration-200"
                to="/about"
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                class="text-gray-500 transition px-6 h-12 m-auto hover:bg-accent rounded hover:text-white ease-in duration-200"
                to="/services"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
