"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const Header = () => {
  const [text, setText] = useState("");
  const t = useTranslations("Header");
  const phrases = ["Rosanna Contasti", t("secondTitle")];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Velocidad de escritura
  const deletingSpeed = 50; // Velocidad de borrado

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (currentCharIndex > 0) {
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (currentCharIndex < phrases[currentPhrase].length) {
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentPhrase, phrases]);

  useEffect(() => {
    setText(phrases[currentPhrase].substring(0, currentCharIndex));
  }, [currentCharIndex, currentPhrase, phrases]);

  return (
    <div className="flex items-center justify-center min-h-screen text-center flex-col">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-gray-600 tracking-widest mb-10 sm:mb-14 md:mb-16 lg:mb-20 font-sans opacity-40">
        {text}
        <span className="blinking-cursor">|</span>
      </h2>

      {/* Puntos en el lado izquierdo */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6">
      {/* <a
          href="#home"
          className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400 transition duration-300 opacity-60"
        ></a> */}
        {/* Primer Punto */}
        <a
          href="#about"
          className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400 transition duration-300 opacity-60"
        ></a>
        {/* Segundo Punto */}
        <a
          href="#projects"
          className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400 transition duration-300 opacity-60"
        ></a>
        {/* Tercer Punto */}
        <a
          href="#contact"
          className="w-2 h-2 bg-gray-500 rounded-full cursor-pointer hover:bg-gray-400 transition duration-300 opacity-60"
        ></a>
      </div>
    </div>
  );
};

export default Header;
