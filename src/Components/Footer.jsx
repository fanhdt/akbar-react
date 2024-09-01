import React from "react";
import linkedinIcon from "../assets/linkedin.svg";
import youtubeIcon from "../assets/yutub.svg";
import behanceIcon from "../assets/behance.svg";
import instagramIcon from "../assets/insta.svg";

const Footer = () => {
  return (
    <footer className="text-white bg-[#232323] py-2 px-8 lg:px-32 max-w-full  font-Inter ">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="md:mb-32 lg:mt-0">
          <h1 className="text-3xl font-normal ">Akbarrbni Creative</h1>
        </div>
        <ul className="md:ml-48 md:my-16 flex text-xl flex-col space-y-6 lg:space-y-4 mb-8">
          <li>
            <a href="#work" className="hover:text-gray-600">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-gray-600">
              Service
            </a>
          </li>
          <li>
            <a href="#get-started" className="hover:text-gray-600">
              Get Started
            </a>
          </li>
        </ul>
        <div className="flex space-x-3 mt-8 md:mb-36 lg:ml-auto">
          <a href="http://www.linkedin.com/in/akbarrbni-creative-80a819209" className="hover:text-gray-600">
            <img src={linkedinIcon} alt="LinkedIn" className="w-14" />
          </a>
          <a href="https://www.youtube.com/@akbarrbni" className="hover:text-gray-600">
            <img src={youtubeIcon} alt="YouTube" className=" w-14" />
          </a>
          <a href="https://www.behance.net/muhammarobbani" className="hover:text-gray-600">
            <img src={behanceIcon} alt="Behance" className="w-14" />
          </a>
          <a href="https://www.instagram.com/akbarrbni/" className="hover:text-gray-600">
            <img src={instagramIcon} alt="Instagram" className="w-14" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
