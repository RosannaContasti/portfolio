"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <section id="projects" className="py-12 min-h-screen bg-customBlue">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl text-gray-500 opacity-40 mb-6">{t("title")}</h2>

        {/* Proyecto Sirenas */}
        <div className=" p-6 mb-8 max-w-3xl mx-auto">
          <h3 className=" text-gray-600 opacity-70">
            {" "}
            {t("firstProjectTitle")}
          </h3>
          <p className=" text-gray-600 opacity-70">
            {t("firstProjectDescription")}
          </p>
        </div>

        {/* Puedes agregar un mensaje de disponibilidad para colaborar */}
        {/* <p className="text-gray-500 mt-4">
          Estoy buscando nuevas oportunidades de desarrollo. ¡Contáctame para
          colaborar en tu próximo proyecto!
        </p> */}
      </div>
    </section>
  );
};

export default Projects;
