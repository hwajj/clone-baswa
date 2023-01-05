import { useRef } from "react";

export default function useIntersectionObserver(callback, option) {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },

      option
    )
  );

  const observe = (element) => {
    observer.current.observe(element);
  };

  const unobserve = (element) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
