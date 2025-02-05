"use client";
import React, { useEffect, useRef, useState } from "react";

// Definir colores del cursor
const CURSOR_COLORS = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500",
};

const CustomCursor = () => {
  // Referencias a los elementos del cursor
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Estado del color del cursor
  const [cursorColor, setCursorColor] = useState("sky-500");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2; // Suaviza el movimiento
      cursorY += (mouseY - cursorY) * 0.2;

      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        ringRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      requestAnimationFrame(animateCursor);
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 800);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const tagName = (e.target as HTMLElement).tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Punto pequeño */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none rounded-full w-3 h-3 bg-${cursorColor} z-50`}
        style={{
          transition: "none", // Elimina la transición para que no se retrase
        }}
      />

      {/* Anillo exterior */}
      <div
        ref={ringRef}
        className={`fixed pointer-events-none rounded-full w-8 h-8 border-2 border-${cursorColor} z-40 transition-transform duration-200`}
      >
        <div
          className={`w-8 h-8 ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          } rounded-full bg-${cursorColor} transition-all duration-500`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
