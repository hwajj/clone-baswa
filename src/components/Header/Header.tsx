import React, { useEffect, useRef } from "react";
import logoSvg from "@/assets/logo.svg";
import "@/scss/components/Header/Header.scss";
import { NavLink } from "react-router-dom";
import Navbar from "@/components/Header/Navbar";
import { useNavigate } from "react-router";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 10) {
          headerRef.current.classList.add("header-scroll-up");
        } else {
          headerRef.current.classList.remove("header-scroll-up");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="nav-area">
        <div className="logo" alt="logo" onClick={() => navigate("/")}>
          {/*<NavLink to="/">*/}
          {/*  <img src={logoSvg} />*/}
          {/*</NavLink>*/}
        </div>
        <Navbar />
      </div>
    </header>
  );
}
