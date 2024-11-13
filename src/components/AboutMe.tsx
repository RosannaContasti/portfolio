"use client";
import React from "react";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="py-12 min-h-screen bg-customPink flex flex-col md:flex-row items-center justify-center"
    >
      {/* Título */}
      <div className="bg-white bg-opacity-10 p-10 flex items-center justify-center w-full md:w-2/6">
        <h2 className="text-4xl text-gray-500 text-center opacity-40">
          {t("title")}
        </h2>
      </div>

      {/* Descripción */}
      <div className="flex items-center justify-center w-full md:w-4/6 h-full px-6">
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-16 opacity-70">
          {t("description")}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
