import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "scss/components/Footer/Footer.scss";
import logoSvg from "assets/logo.svg";
import {
  GallerySideTextDesc,
  GallerySideTextSpan,
} from "../StyledComponent/GallerySideText";
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logoSvg} />
      </div>
      <div className="message">
        Seamless surfaces for pleasant ambient sound and sophisticated
        architectural concepts.
      </div>
      <GallerySideTextSpan className="contact">Contact us</GallerySideTextSpan>

      <div className="sns">
        <a href="facebook.com">
          <FaFacebookF />
        </a>
        <a href="instagram.com">
          <AiOutlineInstagram />
        </a>
        <a href="">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="sampleBtn">Order Sample</div>
      <div className="bottom">
        <span>Imprint</span>
        <span>Privacy Policy</span>
        <span>GCC</span>
        <span>Blog</span>
        <span>Career</span>
      </div>
    </footer>
  );
};

export default Footer;
