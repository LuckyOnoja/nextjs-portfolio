import { FaWhatsapp, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">About Me</h3>
            <p className="text-zinc-400">
              I'm a passionate full-stack developer specializing in creating
              modern web and mobile applications. Let's build something amazing
              together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#banner"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <button
                onClick={() =>
                  window.open(
                    "/LUCKY-CV-DECEMBER.docx",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              >
                Download Resume
              </button>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">
              Stay Connected
            </h3>
            <div className="social-icon flex justify-center md:justify-start gap-4">
              <a
                href="http://wa.me/2347042351981"
                className="social-icon-link hover:bg-white hover:text-black p-2 rounded-full bg-zinc-800 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://x.com/luckylkonoja?s=21"
                className="social-icon-link hover:bg-white hover:text-black p-2 rounded-full bg-zinc-800 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lucky-onoja-6926842b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="social-icon-link hover:bg-white hover:text-black p-2 rounded-full bg-zinc-800 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/LuckyOnoja"
                className="social-icon-link hover:bg-white hover:text-black"
                aria-label="Twitter"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-6 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Lucky Onoja. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
