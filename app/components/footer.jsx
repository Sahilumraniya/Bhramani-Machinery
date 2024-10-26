import Image from "next/image";
import React from "react";
import { logo } from "../../images";

const Footer = () => {
  const d = new Date();

  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        <a className="flex items-center mb-4 md:mb-0">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="ml-3 text-xl font-bold">Bhramani Machinery</span>
        </a>
        <p className="text-sm text-gray-600">
          © {d.getFullYear()} Bhramani Machinery — 
          <a
            // href="https://twitter.com/knyttneve"
            className="text-blue-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @bhramanimachinery
          </a>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a className="text-gray-600 hover:text-blue-600">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="text-gray-600 hover:text-blue-600">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="text-gray-600 hover:text-blue-600">
            <svg
              fill="none"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="text-gray-600 hover:text-blue-600">
            <svg
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
