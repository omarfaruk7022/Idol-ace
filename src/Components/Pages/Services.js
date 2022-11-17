import React from "react";
import image1 from "../Images//1487063885.jpg";
import image2 from "../Images//1487063915.jpg";
import Typical from "react-typical";

const Services = () => {
  return (
    <div className="lg:px-52 px-5">
      <div className=" px-5 mt-5">
        <h1 className="text-3xl">Our services</h1>
        <h1 className=" border-b-4 border-accent w-[162px] mb-4 mt-2"></h1>
      </div>
      <div>
        <h1 className="text-center text-xl text-accent ">
          All Kinds of Cleaning Equipment
        </h1>
        <div className="mb-12">
          <p className="border-b-2 border-accent w-[290px] m-auto mt-1"></p>
          <p className="border-b-2 border-accent w-[170px] m-auto my-1"></p>
          <p className="border-b-2 border-accent w-[100px] m-auto my-1"></p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <img className="w-[500px] ml-48" src={image1} alt="" />
          </div>
          <div>
            <h1 className="mt-12 font-bold">
              <Typical
                steps={[
                  "",
                  1000,
                  " Idol Ace Ltd is a International Trading House. Idol Ace Ltd provide all kinds of Equipment. As like as, Cleaning Equipment,Bathroom Equipment, Kitchen Equipment etc.",
                  800,
                ]}
                loop={1}
                wrapper="p"
              />
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <h1 className="text-center text-xl text-accent ">
          Bathroom, Guest Room, Laundry Acessorie Service
        </h1>
        <div className="mb-12">
          <p className="border-b-2 border-accent w-[290px] m-auto mt-1"></p>
          <p className="border-b-2 border-accent w-[170px] m-auto my-1"></p>
          <p className="border-b-2 border-accent w-[100px] m-auto my-1"></p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <img className="w-[420px] ml-48" src={image2} alt="" />
          </div>
          <div>
            <h1 className="mt-12 font-bold">
              <Typical
                steps={[
                  "",
                  11000,
                  " We Provides All Kinds of Bathroom accessories, Laundry Matchinery,And Guest Room Decoration.",
                  800,
                ]}
                loop={1}
                wrapper="p"
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
