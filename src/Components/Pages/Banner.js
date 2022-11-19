import React from "react";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div>
      {/* <video autoPlay muted className="w-full " src={video}>

      <div className="">
        <h1 className="text-5xl">Hello</h1>
      </div>
      </video> */}
      <section class="relative bg-[url(https://i.ibb.co/ggrzxy1/1486807894.jpg)] bg-cover bg-center bg-no-repeat bg-fixed top-0">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/0 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl lg:text-accent text-black">
            <Typical
                steps={[
                  "",
                  1000,
                  "Welcome to Idol Ace",
                  500,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>
             <h1 className="text-3xl font-extrabold sm:text-5xl lg:text-white text-black"> Let us find your</h1>
              <strong class="text-3xl font-extrabold sm:text-5xl lg:text-neutral text-black">
                Forever Home.
              </strong>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed lg:text-white text-black">
            Idol Ace Ltd is a International Trading House. Idol Ace Ltd provide all kinds of Equipment. As like as, Cleaning Equipment, Bathroom Equipment, Kitchen Equipment etc. 
            </p>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
