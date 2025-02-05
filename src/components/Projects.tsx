"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Modal from "./Modal";

interface Project {
  title: string;
  link: string;
  description: string;
  image?: string;
  video?: string;
  tools: string[];
}

const Projects = () => {
  const t = useTranslations("Projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [projects, setProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      title: t("firstProjectTitle"),
      description: t("firstProjectDescription"),
      link: "https://app.proyecto-sirenas.com",
      image: "../../images/Screenshot 2024-11-16 at 6.44.42 PM.png",
      video: "../../videos/appSirenas.mov",
      tools: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "GraphQL",
      ],
    },
    {
      title: t("secondProjectTitle"),
      description: t("secondProjectDescription"),
      link: "https://sirenas.tv/login",
      image: "../../images/webApp.png",
      video: "../../videos/adminVideo.mov",
      tools: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "GraphQL",
      ],
    },
    {
      title: t("thirdProjectTitle"),
      description: t("thirdProjectDescription"),
      link: "https://admin.proyecto-sirenas.com/",
      image: "../../images/CRM.png",
      video: "",
      tools: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "GraphQL",
      ],
    },
    {
      title: "Portfolio",
      description: t("thirdProjectDescription"),
      link: "https://admin.proyecto-sirenas.com/",
      image: "../../images/webApp.png",
      video: "../../videos/adminVideo.mov",
      tools: [
        "React",
        "Next.js ",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "GraphQL",
      ],
    },
  ];

  // 🔹 Cambia de proyecto automáticamente cada 5 segundos
  useEffect(() => {
    if (projects.length === 0) return; // Evitar errores si `projects` está vacío

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section
      id="projects"
      className="pb-12 min-h-screen bg-customBlue flex flex-col justify-center items-center"
    >
      <div className="flex flex-row w-full md:w-full md:justify-center md:items-center">
        {/* Carrusel */}
        <div className="w-full md:w-1/2 md:ml-32 flex items-center justify-center relative min-h-screen">
          {/* Flecha izquierda */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-20 text-white text-3xl transition-opacity p-2"
          >
            <GoChevronLeft size={49} />
          </button>

          {/* Tarjetas de proyectos */}
          {projects.length > 0 &&
            projects.map((project, index) => (
              <div
                key={project.title}
                className={`absolute w-full transition-all duration-700 ease-in-out md:w-[95%] md:h-1/20 items-center justify-center ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-full lg:w-[90%] h-64 md:h-80 object-cover rounded-md shadow-lg cursor-pointer"
                  onClick={() => setSelectedProject(projects[currentIndex])}
                />
                <h3 className="text-gray-500 opacity-70 px-4 py-2">
                  {project.title}
                </h3>
              </div>
            ))}

          {/* Flecha derecha */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-10 text-white transition-opacity p-2"
          >
            <GoChevronRight size={49} />
          </button>
        </div>

        {/* Título */}
        <div className="w-auto ml-auto">
          <div className="bg-white bg-opacity-30 p-10 flex flex-col justify-center items-end text-right">
            <h2 className="text-5xl md:text-8xl text-white opacity-80">
              Projects
            </h2>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
