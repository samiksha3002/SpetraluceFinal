"use client";
import React, { useEffect, useRef } from "react";
// <-- CHANGE: DO NOT import LazyLinePainter here anymore.
// import LazyLinePainter from "lazy-line-painter"; 

const Preloader = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // We define an async function inside useEffect to handle the dynamic import
    const initializePainter = async () => {
      try {
        // <-- CHANGE: Dynamically import the library ONLY on the client-side
        const LazyLinePainterModule = await import('lazy-line-painter');
        const LazyLinePainter = LazyLinePainterModule.default;

        if (svgRef.current) {
          const painter = new LazyLinePainter(svgRef.current, {
            ease: "easeLinear",
            strokeWidth: 10,
            strokeColor: null,
            strokeAnimation: "oneByOne",
            delay: 500,
          });
          painter.paint();
        }
      } catch (error) {
        console.error("Failed to load LazyLinePainter", error);
      }
    };

    initializePainter();
    
  }, []); // The empty array ensures this runs only once on mount

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
      <svg
        ref={svgRef}
        version="1.1"
        id="test2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 595.3 841.9"
        style={{ enableBackground: "new 0 0 595.3 841.9", width: "600px", height: "600px" }}
        className="lazy-line-painter"
      >
        <style type="text/css">
          {`
            .st0{fill:none;stroke:#F58220;stroke-width:10;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#2CACE3;stroke-width:10;stroke-miterlimit:10;}
          `}
        </style>
        {/* SVG paths are unchanged */}
        <path className="st0" d="M357,314.3l-105,82.3c0,0-15.3,15.5-7.2,40.7c0,0,4.7,18,26.6,26.6c0,0,14.8,6.6,38.3-12l28.2-21.6" />
        <path className="st0" d="M287.7,418.7l41-29.1c0,0,11.3-10.2,30.9-1.8c0,0,11.7,4.2,23.4,23.4c0,0,5.2,9.8,2.7,20.8c0,0-1.1,7.9-6.9,13.6l-31.5,26.5" />
        <polyline className="st1" points="206,437.3 275.6,528.6 334.9,482.9 " />
      </svg>
    </div>
  );
};

export default Preloader;