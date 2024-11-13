import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4"
    >
      <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
      <p className="text-lg italic text-gray-700 mt-2">
        Want to work together? I thought you’d never ask!
      </p>
      <p className="text-center text-gray-600 mt-2 max-w-lg">
        You can get in contact with me for writing projects, general PR
        inquiries, speaking engagements, and more by filling out the form below
        or emailing me at{" "}
        <a href="mailto:muriel@murielvega.net" className="underline">
          muriel@murielvega.net
        </a>
      </p>
      <form className="w-full max-w-xl mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name <span className="text-red-500">(required)</span>
          </label>
          <div className="flex space-x-4 mt-1">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email Address <span className="text-red-500">(required)</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="subject"
          >
            Subject <span className="text-red-500">(required)</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Let's work together!"
            required
            className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message <span className="text-red-500">(required)</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            required
            className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-44 h-auto bg-transparent text-black p-2 rounded-md font-semibold focus:outline-none focus:ring-0 border-4 border-stone-950 tracking-widest hover:bg-stone-950 hover:text-white"
        >
          SUBMIT
        </button>
      </form>
      <footer className="mt-12 flex flex-col items-center text-gray-500">
        <div className="flex space-x-4 text-xl mb-4">
          <a href="#" className="hover:text-gray-700">
            🐦
          </a>
          <a href="#" className="hover:text-gray-700">
            🔗
          </a>
          <a href="#" className="hover:text-gray-700">
            📓
          </a>
        </div>
        <p>© 2023 Muriel Vega</p>
      </footer>
    </div>
  );
};

export default Contact;
