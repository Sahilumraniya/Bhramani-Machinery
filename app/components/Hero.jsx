import React from "react";
import Image from "next/image";
import { bg } from "../../images";
import {
  trun_table,
  four_head_capping,
  washing,
  four_head_servo_filling,
  single_head_capping,
  sticker_labeling,
} from "../../images/assets";

const Hero = () => {
  return (
    <>
      <div className="w-full flex sm:h-[500px] h-[25%] overflow-hidden relative flex-col justify-center items-center">
        <Image
          src={bg}
          alt="bg"
          className="object-cover w-full h-full overflow-hidden"
        ></Image>
        <div className="absolute h-full top-10">
          <h2 className="sm:text-4xl text-2xl font-semibold z-10 text-white text-center sm:mx-12">
            Transforming Pharmaceutical Manufacturing: Innovative Solutions for
            Enhanced Efficiency
          </h2>
          <p className="sm:text-5xl text-3xl bg-white rounded py-3 my-[7%] font-extrabold uppercase text-center">
            <samp className="text-blue-800 font-bold">Bhramani</samp>
            <samp className="text-red-600 font-bold"> Machinery</samp>
          </p>
        </div>
        {/* <div className="w-full h-[100px]">
        <Carousel >
          <div>
            <Image src={Auger_Filling} />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <Image src={Auger_Filling} />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <Image src={Auger_Filling} />
            <p className="legend">Image 1</p>
          </div>
        </Carousel>
      </div> */}
      </div>
      <section class="text-gray-600 body-font px-[5%] bg-slate-500">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap text-white">
            <h1 class="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4">
              Our Machine Gallery
              <div class="h-1 w-20 bg-orange-600 rounded mt-1"></div>
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                {/* <img alt="gallery" class="w-full object-cover h-full object-center block" src={Auger_Filling} /> */}
                <Image
                  src={trun_table}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  src={four_head_capping}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <Image
                  src={four_head_servo_filling}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <Image
                  src={washing}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  src={single_head_capping}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  src={sticker_labeling}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
