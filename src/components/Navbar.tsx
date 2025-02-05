"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("Home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Ícono hamburguesa: Fuera cuando está cerrado */}
      {!isOpen && (
        <div className="fixed top-4 right-6 z-[100]">
          <button
            onClick={toggleMenu}
            className="text-gray-500 text-3xl focus:outline-none opacity-70"
          >
            ☰
          </button>
        </div>
      )}

      {/* Menú hamburguesa con botón adentro cuando está abierto */}
      <div
        className={`fixed top-16 right-0 w-44 flex flex-col items-end px-6 py-4 bg-white shadow-md rounded-sm transition-all duration-300 mr-11 z-[100] ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {/* Botón de cerrar dentro del menú */}
        <button
          onClick={toggleMenu}
          className="text-gray-500 text-3xl focus:outline-none self-end opacity-70 mb-2"
        >
          ✕
        </button>

        {/* Opciones del menú */}
        {[
          { id: "about", label: t("about") },
          { id: "projects", label: t("projects") },
          { id: "contact", label: t("contact") },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-gray-500 text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}

        {/* Links de idioma */}
        <Link
          href="/"
          locale="en"
          className="text-gray-500 text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
        >
          English
        </Link>
        <Link
          href="/"
          locale="es"
          className="text-gray-500 text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
        >
          Español
        </Link>
      </div>
    </>
  );
};

export default Navbar;
