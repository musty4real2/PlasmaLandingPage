/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="container py-5 flex items-center justify-between">
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="w-40" />
        </div>
        {/* navigation  links section */}
        <ul className="hidden md:flex items-center gap-5">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Custome Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        {/* buttons section */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
