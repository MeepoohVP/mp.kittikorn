import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Cont(props) {
  return (
    <div className="text-center text-xl font-medium mt-4 border-[1px] solid border-black/[.15] shadow-md p-4 text-stone-500">
      <i className={props.icon}></i> <div>{props.name}</div>
      <div className="text-sm">
        <a href={props.address}>{props.info}</a>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div
      className="2xl:bg-stone-50 w-full h-auto mx-auto pt-16 md:px-24 2xl:w-3/4"
      id="contact"
    >
      <div
        className="text-center text-4xl text-[#7971EA] font-bold"
      >
        <div className="greet" data-aos="fade-up">Contact</div>
        <div className="md:flex md:px-8 lg:px-32">
          <div className="block md:flex-1">
            <div className="flex justify-center" data-aos="zoom-in">
              <Cont
                icon="bi bi-telephone-fill text-[#7971EA] text-2xl"
                name="Phone"
                address="tel:+66615509414"
                info="061-550-9414"
              />
            </div>
            <div className="flex justify-center" data-aos="zoom-in">
              <Cont
                icon="bi bi-envelope-fill text-[#7971EA] text-2xl"
                name="Email"
                address="mailto:poohvp1147@gmail.com"
                info="poohvp1147@gmail.com"
              />
            </div>
          </div>
          <div className="block md:flex-1 text-[#7971EA] text-xl font-semibold mt-8 w-auto md:w-1/3 mx-auto text-center pb-8" data-aos="zoom-in">
            Send your message
            <form action="" className="font-light">
              <input
                type="text"
                placeholder="Name"
                className="outline-none placeholder:text-[#7971EA] md:text-xl pl-2 my-2 border-b-[1px] solid duration-150 border-black/[.15] hover:border-[#7971EA]"
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                className="outline-none placeholder:text-[#7971EA] md:text-xl pl-2 my-2 border-b-[1px] solid duration-150 border-black/[.15] hover:border-[#7971EA]"
              />
              <br />
              <textarea
                rows="3"
                placeholder="Message"
                className="text-lg rounded-md resize-none outline-[#7971EA] placeholder:text-[#7971EA] pl-2 my-2 border-b-[1px] solid border-black/[.15] hover:border-[1px] hover:border-[#7971EA]"
              ></textarea>
              <br />
              <button
                type="submit"
                className="group text-right border-[1px] solid border-[#7971EA] py-1 px-2 rounded-3xl hover:bg-[#7971EA] duration-500"
              >
                <i className="bi bi-send-fill text-lg group-hover:text-white"></i>{" "}
                <span className="text-lg group-hover:text-white">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
