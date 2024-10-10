/* eslint-disable no-unused-vars */
import React from "react";
import Icon1 from "../../assets/icon/1.png";
import Icon2 from "../../assets/icon/2.png";
import Icon3 from "../../assets/icon/3.png";
import CardComp from "./CardComp";

const HowItHelps = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CardComp
                icon={Icon1}
                heading="Symptoms"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores dignissimos suscipit expedita."
              />
              <CardComp
                icon={Icon2}
                heading="Recommendations"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores dignissimos suscipit expedita."
              />
              <CardComp
                icon={Icon3}
                heading="Local Information"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores dignissimos suscipit expedita."
              />
            </div>
          </div>
          <div className="flex items-center justify-center xl:pr-14">
            <h1 className="text-3xl font-bold">How It Helps People</h1>
            <p className="text text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores
              dignissimos suscipit expedita.
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maiores
              dignissimos suscipit expedita.{" "}
              <a href="#" className="text-primary">
                Learn More
              </a>
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
