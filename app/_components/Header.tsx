import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-black text-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-18 px-4 sm:px-6 lg:px-8">
          {/* Logo with hover animation */}
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo-er.png"
              alt="Nexa Logo"
              width={65}
              height={32}
              priority
              className="translate-x-1 translate-y-1"
            />
            <span className="text-xl font-bold tracking-wide">Nexa</span>
          </div>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            {/* Navigation Links */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {[
                  "About",
                  "Careers",
                  "History",
                  "Services",
                  "Projects",
                  "Blog",
                ].map((item) => (
                  <li key={item}>
                    <a
                      className="relative text-gray-300 transition-colors duration-300 hover:text-teal-400 
                                 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 
                                 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 
                                 hover:after:w-full"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <LoginLink
                  postLoginRedirectURL="/dashboard"
                  className="block rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-500 hover:scale-105"
                >
                  Login
                </LoginLink>

                <RegisterLink className="hidden rounded-md bg-gray-800 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-500 hover:scale-105 sm:block">
                  Register
                </RegisterLink>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="block rounded-sm bg-gray-800 p-2.5 text-gray-300 
                           transition-colors duration-300 hover:text-white md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
