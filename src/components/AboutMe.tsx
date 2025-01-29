"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "../styles/AboutMe.module.css"; // Importamos los estilos

const AboutMe = () => {
  const t = useTranslations("About");
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Tailwind",
    "CSS",
    "MUI",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasBeenVisible(true);
            observer.unobserve(entry.target); // Deja de observar una vez que el componente está visible
          }
        });
      },
      {
        root: null, // Observa en el viewport actual del navegador
        rootMargin: "0px",
        threshold: 0.5, // El componente debe estar al 50% en la pantalla antes de activar la animación
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-12 min-h-screen bg-customPink flex flex-col md:flex-row items-center justify-center"
      ref={sectionRef}
    >
      {/* Título */}
      <div className="bg-white bg-opacity-30 p-10 flex items-center flex-col justify-center w-full md:w-2/6 mb-6 md:mb-0">
        <h2 className="text-8xl text-white text-center opacity-80">
          {t("title")}
        </h2>
        <h2 className="text-8xl text-white text-center opacity-80">
          {t("title2")}
        </h2>
      </div>

      {/* Descripción con animación solo al ser visible */}
      <div
        className={`${
          hasBeenVisible ? styles["slide-in"] : styles.hidden
        } flex flex-col items-center justify-center w-full md:w-4/6 h-full px-6`}
      >
        <p
          className={` text-gray-500 text-lg leading-relaxed max-w-3xl mx-16 opacity-70  w-96 text-justify`}
        >
          {t("description")}
        </p>

        {/* SKILLS */}
        <div
          className={`${
            hasBeenVisible ? styles["slide-in"] : styles.hidden
          } mt-20 flex flex-col items-center w-96`}
        >
          <p className="text-xl text-gray-500 opacity-70 "> {t("skills")}</p>
          <ul className="flex flex-wrap justify-center mt-4 space-x-4 ">
            {skills.map((item) => {
              return (
                <li className="text-gray-500 opacity-70 px-4 py-2 ">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
