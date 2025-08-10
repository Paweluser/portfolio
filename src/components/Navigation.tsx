import { useState, useEffect } from "react";
import "../styles/global.css";
import {
  GlobeAltIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface NavLinks {
  path: string;
  label: string;
}

const ulLinks: NavLinks[] = [
  { label: "About me", path: "#aboutme" },
  { label: "Technology", path: "#technology" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="fixed w-full top-0 py-4 lg:py-6 bg-transparent backdrop-blur-md z-50">
      <div className="container flex justify-between mx-auto max-sm:px-2 md:px-4">
        <a href="#">
          <GlobeAltIcon className="md:w-14 w-12 text-[var(--accent-color)] cursor-pointer" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center space-x-5 xl:text-xl">
          {ulLinks.map((item) => (
            <li
              key={item.path}
              className="hover:text-[var(--accent-color)] text-[var(--second-color)] transition-colors duration-300 text-2xl"
            >
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative md:w-14 w-12 px-3 py-2 lg:hidden cursor-pointer z-50"
          aria-label="Toggle navigation"
        >
          <Bars3Icon
            className={`absolute inset-0 transition-transform duration-300 ease-in-out transform ${
              isOpen
                ? "opacity-0 scale-75 rotate-12"
                : "opacity-100 scale-100 rotate-0"
            } text-[var(--second-color)]`}
          />
          <XMarkIcon
            className={`absolute inset-0 transition-transform duration-300 ease-in-out transform ${
              isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 -rotate-12"
            } text-[var(--second-color)]`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--main-color)] z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-center space-y-8 text-center`}
      >
        {ulLinks.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="text-[var(--second-color)] hover:text-[var(--accent-color)] md:text-3xl md:p-6 p-3 text-2xl transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
