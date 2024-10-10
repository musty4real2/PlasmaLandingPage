/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from "../../assets/";
const Uses = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="flex flex-col justify-center xl:pr-14"></div>
          <div>
            <img src={Img1} alt="" />
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
