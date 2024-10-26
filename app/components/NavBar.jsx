"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo, menu, close } from "../../images"; // Ensure correct paths

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    // Lock body scroll when the menu is open (mobile view)
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <>
      <header className="bg-white shadow-md backdrop-blur-md bg-opacity-70 sticky top-0 z-20">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-blue-800">
              Bhramani <span className="text-red-600">Machinery</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-lg ${activeLink === link.name ? "text-blue-600" : "text-black"} hover:text-blue-600`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="flex sm:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Image
              src={isMenuOpen ? close : menu}
              alt="menu icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg backdrop-blur-md z-50">
            <ul className="flex flex-col items-center space-y-6 py-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-lg ${activeLink === link.name ? "text-blue-600" : "text-black"} hover:text-blue-600`}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
