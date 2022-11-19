import React from "react";
import radison from "../Images///radison.png"
import pan from "..//Images///logo-pphg-uol-space.svg"
import squre from "../Images///1486893715.jpg"
import united from "../Images///1486893407.png"
import appolo from "../Images//1486893333.jpg"
import pizza from "../Images//1486893061.png"
import lab from "../Images///1486894471.jpg"
import top from "../Images//1486894134.png"
import lake from "..//Images//825120217083910.png"
import sarina from "..///Images///1486889029.png"

const HomeClients = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Trusted by the industry leaders
          </h2>
        </div>
        <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <img  src={radison} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src={pan} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src={squre} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src={appolo} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src={pizza} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src={lab} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src={top} alt="" />
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <img src={lake} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeClients;
