import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-black to-gray-900 text-white px-6 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-700/20 to-transparent opacity-50 blur-[120px]"></div>

      <motion.div
        className="relative container mx-auto text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6 animate-pulse">
          Let’s Build Something Amazing Together
        </h2>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Have a groundbreaking idea or want to connect? Send me a message ✨,
          and I’ll get back to you promptly.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-zinc-900/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-all duration-300"
          initial={{ opacity: 0.8, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-indigo-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-zinc-800/70 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-indigo-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-zinc-800/70 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-indigo-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-5 py-3 bg-zinc-800/70 text-white rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(to right, #6b46c1, #805ad5, #9f7aea, #d6bcfa)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-700 to-purple-500 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all"
          >
            Send Message
          </motion.button>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-sm text-zinc-400">{status}</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
