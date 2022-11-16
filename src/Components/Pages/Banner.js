import React from "react";

const Banner = () => {
  return (
    <div>
      <section class="relative bg-[url(https://i.ibb.co/1Jm53dq/1486807993.jpg)] bg-cover bg-center bg-no-repeat bg-fixed top-0">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/50 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-accent">
                Forever Home.
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Idol Ace Ltd is a International Trading House. Idol Ace Ltd provide all kinds of Equipment. As like as, Cleaning Equipment, Bathroom Equipment, Kitchen Equipment etc. 
            </p>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
