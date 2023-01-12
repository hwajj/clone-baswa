import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="logo"></div>
      <div className="message"></div>
      <div className="contact"></div>
      <div className="sns">
        <FaFacebookF />
        <AiOutlineInstagram />
        <FaLinkedinIn />
      </div>
      <div className="sampleBtn"></div>
    </footer>
  );
};

export default Footer;
