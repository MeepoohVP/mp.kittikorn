import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import covid from "../image/covid.png";
import weather from "../image/weather.png";
import gamer from "../image/garena.jpg";
import dev from "../image/dev.jpg";
import dts from "../image/python.jpg";
import ml from "../image/ml.png";
function Work(props) {
  return (
    <div className="md:flex-1 w-1/2 rounded-2xl overflow-hidden md:w-1/4 relative mx-auto md:mx-4  my-4 shadow-xl border-[1px] border-solid border-stone-300">
      <img
        className="w-full h-auto mx-auto"
        src={props.work}
        alt={props.name}
      />
      <div className="bg-white text-center">
        <div className="text-[#7971EA] font-medium text-lg my-2">
          {props.name}
        </div>
      </div>
      <div className="text-center text-[#7971EA]/[.6] font-semibold hover:text-[#7971EA] duration-500 cursor-pointer underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
        <a href={props.page} target="_blank">
        <i className="bi bi-box-arrow-up-right"></i> View page
        </a>
      </div>
      <div className="text-center text-[#7971EA]/[.6] font-semibold hover:text-[#7971EA] duration-500 cursor-pointer underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
        <a href={props.sourcecode} target="_blank">
        <i className="bi bi-code-slash"></i> Source code
        </a>
      </div>
    </div>
  );
}
function Project() {
  return (
    <div
      className="About 2xl:bg-stone-50 w-full h-auto mx-auto pt-16 md:px-24 2xl:w-3/4"
      id="project"
    >
      <div
        className="greet text-center text-4xl text-[#7971EA] font-bold"
        data-aos="fade-up"
      >
        Project & Certificates
      </div>
      <div
        className="text-[#7971EA]/[.75] text-center text-2xl font-semibold mt-8"
        data-aos="fade-up"
      >
        Project
      </div>
      <div
        className="md:flex justify-center md:px-8 lg:px-48"
        data-aos="fade-up"
      >
        <Work
          work={covid}
          name="Covid Updated"
          page="https://meepoohvp.github.io/coviddaily.github.io/covid_daily.html"
          sourcecode="https://github.com/MeepoohVP/coviddaily.github.io"
        />
        <Work
          work={weather}
          name="Weather Report Realtime"
          page="https://meepoohvp.github.io/weather-project/"
          sourcecode="https://github.com/MeepoohVP/weather-project"
        />
      </div>

      <div
        className="text-[#7971EA]/[.75] text-center text-2xl font-semibold mt-8"
        data-aos="fade-up"
      >
        Certificates
        <ul className="text-left list-disc w-1/2 text-sm mx-auto mt-4 md:w-2/5 lg:w-1/6 font-normal">
         <li className="underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
            <a href="https://www.freecodecamp.org/certification/fccd186cc0f-7016-4c9c-8e51-4d2fe9da575c/responsive-web-design?fbclid=IwAR2kLdenpr72HvVJeRI6FsXpbDwcuvbTbPHme1mMKf5IgzpxbcxkGT41-J8">
              Responsive Web Design
            </a>
          </li>
          <li className="mt-4 md:mt-6 underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
            <a href={gamer}>Gamer to Coder</a>
          </li>
          <li className="mt-4 md:mt-6 underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
            <a href="https://www.borntodev.com/certificate_online/b8aee05fc1e0053dd4a19c18af99f69c">
              Introduction to Javascript
            </a>
          </li>
          <li className="mt-4 md:mt-6 underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
            <a href={dev}>Basic Web Application Development</a>
          </li>
          <li className="mt-4 md:mt-6 underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
            <a href={dts}>Basic Python Programming for Health Data Science</a>
          </li>
          <li className="mt-4 md:mt-6 underline decoration-transparent decoration-soild duration-500 hover:decoration-current">
            <a href={ml}>Intro to Machine Learning</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Project;
