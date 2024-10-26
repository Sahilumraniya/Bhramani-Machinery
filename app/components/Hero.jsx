'use client';

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
      <div>
        <section className="relative bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
          <div className="absolute inset-0">
            <Image
              src={bg}
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
          </div>
          <div className="container mx-auto flex flex-col items-center justify-center h-screen px-5 relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-center">
              Welcome to Our Website
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl text-center">
              Discover amazing content, connect with our community, and explore what we have to offer.
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="#about"
                className="bg-white text-teal-600 hover:bg-gray-200 transition duration-300 ease-in-out py-3 px-6 rounded-lg font-semibold shadow-lg"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="bg-teal-700 hover:bg-teal-800 transition duration-300 ease-in-out text-white py-3 px-6 rounded-lg font-semibold shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-800 body-font bg-gray-100 py-12">
        <div className="container mx-auto px-5">
          <div className="flex flex-col mb-10 text-center">
            <h1 className="text-4xl font-semibold title-font text-gray-900 mb-4">
              Our Machine Gallery
            </h1>
            <div className="h-1 w-24 bg-orange-600 rounded mx-auto mb-6"></div>
          </div>
          <div className="flex flex-wrap -m-1">
            {[
              trun_table,
              four_head_capping,
              four_head_servo_filling,
              washing,
              single_head_capping,
              sticker_labeling,
            ].map((imageSrc, index) => (
              <div
                key={index}
                className="p-2 w-full md:w-1/2 lg:w-1/3 transition-transform duration-300 transform hover:scale-105"
              >
                <Image
                  src={imageSrc}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;
