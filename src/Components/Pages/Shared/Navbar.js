import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images//idolace.png";

const Navbar = () => {
  return (
    <div>
      <header aria-label="Site Header" class="bg-white  w-full ">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a href="http://localhost:3000/">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div class="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" class="hidden md:block">
                <ul class="flex items-center text-sm">
                  <li>
                    <Link
                      class="text-gray-500 transition p-8 hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition p-8 hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition p-8 hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                      href="/"
                    >
                      History
                    </a>
                  </li>

                  {/* <li>
                    <a
                      class="text-gray-500 transition p-8 hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                      href="/"
                    >
                      <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className=" m-1 cursor-pointer">
                          Dropdown
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100  w-52"
                        >
                          <li>
                            <a>Item 1</a>
                          </li>
                          <li>
                            <a>Item 2</a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li> */}

                  <li>
                    <a
                      class="text-gray-500 transition p-8 hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                      href="/"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition p-8 hover:bg-accent rounded-lg hover:text-white ease-in duration-200"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
