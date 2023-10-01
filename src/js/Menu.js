import React from "react";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import me from "../image/me.jpg";
import me2 from '../image/me2.jpg'
function Menu() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const [isActive, setIsActive] = useState(false);

  const classMenu = isActive
    ? "w-full h-full fixed text-right bg-[#7971EA]/[.8] top-[-1px] z-[4] duration-500 shadow-lg opacity-1 lg:opacity-1 lg:h-auto lg:bg-white/[.8] shadow lg:flex lg:pt:2"
    : "w-full h-full fixed text-right bg-[#7971EA]/[.8] top-[-1px] z-[-1] duration-500 shadow-lg opacity-0 lg:opacity-[1] lg:z-[4] lg:h-auto lg:bg-white/[.8] shadow lg:flex lg:pt-2";
  const classIcon = isActive
    ? "bi bi-x text-white/[.7]"
    : "bi bi-list text-black/[.7]";
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <div className="w-full fixed text-right z-[5] lg:hidden">
        <button className="mr-2 text-4xl" onClick={handleClick}>
          <i className={classIcon}></i>
        </button>
      </div>
      <div className={classMenu}>
        <div className="logo font-normal text-left text-4xl text-black hidden lg:block mt-1 ml-4 lg:grow pb-3">
          <img
            src={me}
            className="w-2/5 rounded-full h-auto shadow-md md:w-1/4 lg:w-12"
            alt="Kittikorn"
          />
        </div>
        <ul className="text-4xl font-medium block text-white/[.7] top-1/2 translate-y-[-50%] relative lg:translate-y-0 top-0 lg:inline-flex lg:text-2xl lg:text-[#7971EA] lg:text-right">
          <li className="text-center lg:mt-6 lg:mr-8 2xl:mt-12 hover:animate-pulse">
            <a href="#home" onClick={handleClick}>
              Home
            </a>
          </li>
          <li
            className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:animate-pulse"
            onClick={handleClick}
          >
            <a href="#about">About</a>
          </li>
          <li className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:animate-pulse">
            <a href="#project" onClick={handleClick}>
              Project
            </a>
          </li>
          <li className="text-center mt-12 lg:mt-6 lg:mr-8 2xl:mt-12 hover:animate-pulse">
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        className="Home relative text-center w-full h-auto bg-gradient-to-b z-[1] duration-500 from-[#F9DEC9] to-gray-50"
        id="home" data-aos = "fade-up"
      >
        <div className="text-center pt-32 text-4xl pb-10 md:text-5xl md:pt-20 lg:pt-24 lg:text-3xl lg:pb-8 2xl:text-6xl 2xl:pt-32 text-[#7971EA]">
          <span className="font-normal text-stone-400">Hi, I,m</span>
          &nbsp;<span className="greet font-semibold">Kittikorn</span>
        </div>
        <img
          src={me2}
          className="w-3/5 rounded-full h-auto mx-auto shadow-md md:w-1/4 lg:w-1/6"
          alt="Kittikorn"
        />
        <div className="descript text-center text-4xl font-light text-[#7971EA]/[.75] px-20 pt-10 pb-20 md:text-6xl lg:px-96 lg:text-5xl lg:pt-8 2xl:text-7xl">
          Never wish life were easier, wish you were better.
          <div className="mt-2 text-2xl pb-40 md:text-3xl lg:text-2xl 2xl:text-4xl">
            <a href="https://www.facebook.com/meepooh.vp" className="mx-1.5">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/pooh_vp/" className="mx-1.5">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://github.com/MeepoohVP" className="mx-1.5">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
