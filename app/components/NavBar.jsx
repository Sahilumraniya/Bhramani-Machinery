import { useState } from "react";
import { logo, close, menu } from "../../images";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <div className="sm:sticky top-0 z-20" >
      <nav className="navbar navbar-expand-lg navbar-light py-5 flex justify-around bg-slate-50">
        <div className="flex space-x-4 items-center">
          <Link className="navbar-brand items-center" href="/">
            <Image
              className="items-center"
              alt="logo"
              src={logo}
              width={40}
              height={50}
            />
          </Link>
          <p className="sm:text-2xl uppercase">
            <samp className="text-blue-800 font-bold">Bhramani</samp>
            <samp className="text-red-600 font-bold"> Machinery</samp>
          </p>
        </div>
        <div className="links hidden sm:flex">
          <ul className="flex space-x-5 items-center">
            <li
              className={`${
                active === "" ? "text-blue-600" : "text-black"
              } cursor-pointer `}
              onClick={() => {
                setActive("");
              }}
            >
              <Link href="/"> Home </Link>
            </li>
            <li
              className={`${
                active === "about" ? "text-blue-600" : "text-black"
              } cursor-pointer`}
              onClick={() => {
                setActive("about");
              }}
            >
              <a href="#"> About Us </a>
            </li>
            <li
              className={`${
                active === "products" ? "text-blue-600" : "text-black"
              } cursor-pointer`}
              onClick={() => {
                setActive("products");
              }}
            >
              <a href="#product">Products</a>
            </li>
            <li className="text-white bg-blue-600 px-2 rounded-md py-1 cursor-pointer">
              <a href="#contect"> Contact Us </a>
            </li>
          </ul>
        </div>
        {/* Mobile */}
        <div className="links flex sm:hidden">
          <Image
            src={toggle ? close : menu}
            width={50}
            height={50}
            alt="menu"
            className="object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle
                ? "hidden"
                : "inline-block absolute top-[10%] w-full left-0 z-10 p-3"
            } bg-white`}
          >
            <ul className="bg-white space-y-10 items-center">
              <li
                className={`${
                  active === "" ? "text-blue-600" : "text-black"
                } cursor-pointer text-blue-600`}
                onClick={() => {
                  setActive("");
                }}
              >
                <a href="#"> Home </a>
              </li>
              <li
                className={`${
                  active === "about" ? "text-blue-600" : "text-black"
                } cursor-pointer`}
                onClick={() => {
                  setActive("about");
                }}
              >
                <a href="#"> About Us </a>
              </li>
              <li
                className={`${
                  active === "products" ? "text-blue-600" : "text-black"
                } cursor-pointer`}
                onClick={() => {
                  setActive("products");
                }}
              >
                <a href="#"> Products </a>
              </li>
              <li className="text-white bg-blue-600 px-2 rounded-md py-1 cursor-pointer">
                <a href="#"> Contact Us </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default NavBar;
