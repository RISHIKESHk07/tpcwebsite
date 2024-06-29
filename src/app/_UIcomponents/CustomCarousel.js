"use client";

import { useEffect, useRef, useState } from "react";

const CustomCarousel = ({ children }) => {
  const carouselRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(null);

  // Update viewport width on resize
  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle scrollbar slider width
  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        setScrollLeft(carousel.scrollLeft);
        setScrollWidth(carousel.scrollWidth - carousel.clientWidth);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize scroll positions
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScrollbarScroll = (e) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollbar = e.target;
      const scrollPercentage = scrollbar.scrollLeft / scrollbar.clientWidth;
      carousel.scrollLeft = scrollPercentage * scrollWidth;
    }
  };

  // Calculate the thumb left position relative to the fixed scrollbar width
  const maxScrollbarWidth = 400; // Maximum width for the scrollbar
  const scrollbarWidth = Math.min(maxScrollbarWidth, viewportWidth * 0.4); // Adjust as needed
  const thumbLeft = (scrollLeft / (scrollWidth || 1)) * scrollbarWidth;

  return (
    <div className="relative max-w-full">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="carousel carousel-center bg-transparent max-sm:max-w-[305px] sm:max-w-[305px] md:max-w-[620px] lg:max-w-[920px] space-x-4 p-4 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">{children}</div>
      </div>
      {/* ScrollBar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-2 bg-transparent cursor-pointer`}
        style={{
          width: `${scrollbarWidth}px`,
          margin: "-10px auto",
        }}
        onScroll={handleScrollbarScroll}>
        <div className="relative h-0.5 bg-[#333333] w-full"></div>
        <img
          src="/cursor.svg"
          alt="Scroll Cursor"
          className={`absolute h-2`}
          style={{
            left: `${thumbLeft}px`,
            top: `-50%`,
            transform: `translateX(-50%)`,
            transition: "left 0.1s",
          }}
        />
      </div>
    </div>
  );
};

export default CustomCarousel;
