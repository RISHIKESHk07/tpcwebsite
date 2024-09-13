"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Mousemove event handler
    const moveCursor = (e) => {
      if (!isHovering) {
        gsap.to(cursorRef.current, {
          x: e.clientX - cursorRef.current.offsetWidth / 2,
          y: e.clientY - cursorRef.current.offsetHeight / 2,
          duration: 0.2,
          ease: "power3.out",
        });
      }
    };

    // Mouse enter event handler
    const handleMouseEnter = (e) => {
      const element = e.target;
      const { width, height, top, left } = element.getBoundingClientRect();
      const { borderRadius, backgroundColor } = window.getComputedStyle(element);

      setIsHovering(true);

      // Step 1: Move cursor to the center of the target element
      gsap.to(cursorRef.current, {
        x: left,
        y: top,
        duration: 0.3,
        ease: "power3.out",
        onStart: () => {
          // Step 2: Morph cursor size and shape to the target element
          gsap.to(cursorRef.current, {
            width: width + "px",
            height: height + "px",
            borderRadius: borderRadius,
            backgroundColor: backgroundColor || "#3498db",
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
            delay: 0.2,
          });
        },
      });
    };

    // Mouse leave event handler
    const handleMouseLeave = () => {
      setIsHovering(false);
      // Step 3: Shrink back the cursor after leaving the element
      gsap.to(cursorRef.current, {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "black",
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverableElements = document.querySelectorAll('.hoverable');
    hoverableElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isHovering]);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
