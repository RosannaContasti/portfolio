"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  const t = useTranslations("Contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario, por ejemplo con un email API
    console.log("Formulario enviado:", form);
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-customOrange p-4"
    >
      <div className="bg-[#FAF3DD] p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-4xl mb-4 text-gray-700">{t("subtitle")}</h2>
        <p className="text-gray-700 mb-4">{t("description")}</p>

        {/* Formulario de contacto */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              {t("inputName")}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
              className="w-full border-b-2 border-red-400 focus:outline-none focus:border-red-600 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              {t("inputEmail")}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
              className="w-full border-b-2 border-red-400 focus:outline-none focus:border-red-600 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              {t("inputMessage")}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full border-b-2 border-red-400 focus:outline-none focus:border-red-600 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-200 text-gray-500 px-6 py-3 rounded-md font-bold hover:bg-teal-300 transition duration-300"
          >
            {t("sendButton")}
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-12 flex flex-col items-center text-gray-500">
        <div className="flex space-x-4 text-xl mb-4">
          <a
            href="https://github.com/RosannaContasti"
            className="hover:text-gray-700"
          >
            <FiGithub size={25} />
          </a>
          <a
            href="https://ar.linkedin.com/in/rosanna-contasti?trk=public_post_feed-actor-name"
            className="hover:text-gray-700"
          >
            <FaLinkedinIn size={25} />
          </a>
        </div>
        <p>© 2025 | {t("designeBy")}</p>
      </footer>
    </section>
  );
};

export default Contact;
