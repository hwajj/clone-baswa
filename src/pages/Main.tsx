import React, { useState, useEffect, useRef } from "react";
import "@/scss/components/MainContent/Main.scss";
import HeroHome from "@/components/Main/HeroHome";
import System from "@/components/Main/System";
import Gallery from "@/components/Main/Gallery";
import References from "@/components/Main/References";
import Pioneers from "@/components/Main/Pioneers";
import Blog from "@/components/Main/Blog";

export default function Main() {
  const mainRef = useRef<HTMLElement | null>(null);
  const galleryIndexRef = useRef<HTMLElement | null>(null);
  const systemRef = useRef<HTMLElement | null>(null);
  const allRefs = useRef<
    React.MutableRefObject<Record<string, HTMLElement | null>>
  >({}).current;

  useEffect(() => {
    // if (headerRef.current) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("upMotionClass");
          } else {
            entry.target.classList.remove("upMotionClass");
          }
        });
      },
      {
        // 설정 가능: root, rootMargin, threshold 등
      },
    );

    for (const key in allRefs) {
      if (allRefs[key]) {
        observer.observe(allRefs[key] as HTMLElement);
      }
    }
    observer.observe(systemRef.current as HTMLElement);
    observer.observe(galleryIndexRef.current as HTMLElement);

    return () => {
      for (const key in allRefs) {
        if (allRefs[key]) {
          observer.unobserve(allRefs[key] as HTMLElement);
        }
      }
      if (systemRef.current) observer.unobserve(systemRef.current);
      if (galleryIndexRef.current) observer.unobserve(galleryIndexRef.current);
    };
    // }
  }, [allRefs]);

  return (
    <main>
      <HeroHome mainRef={mainRef} />
      <System systemRef={systemRef} />
      <Gallery galleryIndexRef={galleryIndexRef} allRefs={allRefs} />
      <References />
      <Blog />
      <Pioneers />
    </main>
  );
}
