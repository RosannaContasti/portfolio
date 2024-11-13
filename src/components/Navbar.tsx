"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";

import { useLocale } from "next-intl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const t = useTranslations("Home");

  const locale = useLocale();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <nav className="w-full">
      <div className="container mx-auto px-6 py-4 flex justify-end items-center">
        {/* Links para pantallas grandes */}
        <div className="hidden md:flex space-x-14">
          <a
            href="#about"
            className="text-gray-500 tracking-widest text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
          >
            {t("about")}
          </a>
          <a
            href="#projects"
            className="text-gray-500 tracking-widest text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
          >
            {t("projects")}
          </a>
          <a
            href="#contact"
            className="text-gray-500 tracking-widest text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
          >
            {t("contact")}
          </a>
          {/* Links para cambiar de idioma */}
          <div className="hidden md:flex space-x-14">
            <Link
              className="text-gray-500 tracking-widest text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
              href="/"
              locale="en"
            >
              English
            </Link>
            <Link
              className="text-gray-500 tracking-widest text-m font-sans transition-transform transform hover:-translate-y-1 opacity-70"
              href="/"
              locale="es"
            >
              Espanol
            </Link>
          </div>
        </div>

        {/* Menú hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none opacity-70"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l2.9 5.9L21 9.2l-4.5 4.3L17.8 21 12 17.7 6.2 21l1.3-7.5L3 9.2l6.1-.9L12 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-auto flex flex-col space-y-4 px-6 py-4">
          <a
            href="#about"
            className="text-gray-500 tracking-widest text-xl font-sans fade-in-slide delay-[0ms] opacity-70"
            onClick={() => setIsOpen(false)}
          >
            Sobre mí
          </a>
          <a
            href="#projects"
            className="text-gray-500 tracking-widest text-xl font-sans fade-in-slide delay-[300ms] opacity-70"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="text-gray-500 tracking-widest text-xl font-sans fade-in-slide delay-[600ms] opacity-70"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
