import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import html from "../image/html.png";
import css from '../image/css.png';
import javascript from '../image/js.png';
import ract from '../image/react.png';
import tailwind from '../image/tw.png';
import python from '../image/python.png';
function AboutInfo(props){
    return (
        <div className="text-base text-left ml-4 text-stone-500 mb-2">
          <i className= {props.icon}></i> {props.topic} <div class="text-[#7971EA] font-light ml-5">{props.info}</div>
        </div>
    );
}
function Education(props) {
  return (
    <div className="flex items-center w-full my-12 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className={"w-3.5 h-3.5 rounded-full " + props.bg}></div>
                            </div>
                            <div className="w-11/12 text-left ml-6">
                                <p className="text-sm">{props.level}</p>
                                <p className="text-xs text-stone-400 font-medium">{props.school}</p>
                            </div>
                        </div>
  );
}
function Skill(props) {
  return (
      <img src = {props.skill} alt={props.name} className="w-10 h-auto m-3 md:w-14" data-aos = 'fade-up'/>
  );
}
function About() {
    return (
        <div className="About 2xl:bg-stone-50 w-full h-auto mx-auto mt-16 md:px-8 2xl:px-48 2xl:w-3/4" id="about">
      <div className="greet text-center text-4xl text-[#7971EA] font-bold" data-aos="fade-up">About me</div>
      <div className="md:flex">
      <div
        className="w-11/12 h-auto text-center mx-auto text-2xl font-semibold mt-8 md:w-1/4"
        data-aos="fade-up">
        <div className="text-[#7971EA]/[.75] mb-6 md:text-left">Information</div>
        <AboutInfo icon = "bi bi-person-circle" topic = "Name:" info = "Kittikorn Voraprateep"/>
        <AboutInfo icon = "bi bi-cake2-fill" topic = "Age:" info = "18 years old"/>
        <AboutInfo icon = "bi bi-mortarboard-fill" topic = "Graduate:" info = "Senior High school"/>
        <AboutInfo icon = "bi bi-geo-alt-fill" topic = "Address:" info = "Chomthong, Chomthong Bangkok."/>
        <AboutInfo icon = "bi bi-crosshair2" topic = "Goal:" info = "Become a Full-stack Developer."/>
      </div>

      <div
        className="profile w-10/12 h-auto text-center mx-auto text-2xl font-semibold mt-12 md:w-1/3 self-start"
      >
        <div className="text-[#7971EA]/[.75] mt-8 md:text-left md:mt-0" data-aos="fade-up">Education</div>
        
                    <div class="relative px-4" data-aos="fade-up">
                        <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                       <Education bg = 'bg-pink-300' level = 'Junior High School' school = 'Bangpakok Witthayakom School'/>
                       <Education bg = 'bg-lime-300' level = 'Senior High School' school = 'Bangpakok Witthayakom School'/>
                       <Education bg = 'bg-orange-500 animate-pulse' level = 'Bachelor’s Degree (current)' school = "King Mongkut's University of Technology Thonburi"/>
                    </div>
                </div>
        
                
        </div>
        <div
        className="profile w-3/4 h-auto text-center mx-auto text-2xl font-semibold mt-12 md:w-1/3 self-start"
      >
        <div className="text-[#7971EA]/[.75] mt-8 md:mt-0" data-aos="fade-up">Skills</div>
        <div className="flex justify-center">
          <Skill skill = {html} name = "html"/>
          <Skill skill = {css} name = "css"/>
          <Skill skill = {javascript} name = "javascript"/></div>
          <div className="flex justify-center mb-16"> <Skill skill = {ract} name = "react"/>
          <Skill skill = {tailwind} name = "tailwind"/>
          <Skill skill = {python} name = "python"/></div>
      </div></div>
    
    );
}
export default About;