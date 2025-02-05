import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  video: string;
  tools: string[];
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm p-4">
      <div className="bg-[#fbfafa] bg-opacity-80 rounded-md p-6 max-w-lg md:max-w-6xl w-full relative flex flex-col md:flex-row gap-6">
        {/* Botón de cerrar */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Video (izquierda en desktop, arriba en mobile) */}
        <div className="w-full md:w-1/2">
          <video className="w-full rounded-lg" autoPlay loop muted playsInline>
            <source src={project.video} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>

        {/* Contenido (derecha en desktop, abajo en mobile) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl  text-gray-500">{project.title}</h2>
          <p className="text-sm text-gray-500 mt-2">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-gray-500 text-xs px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-6 py-3 mt-4 text-gray-500 rounded-sm border border-gray-400 overflow-hidden transition duration-300 ease-in-out group"
          >
            {/* Efecto de fondo en hover */}
            <span className="absolute inset-0 bg-gray-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

            {/* Texto del botón */}
            <span className="relative z-10 group-hover:text-white transition duration-300">
              Ver proyecto
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
