/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="container py-3">
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="w-36" />
        </div>
        {/* navigation  links section */}
        <ul>
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
          <button>Get in touch</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
