import "../styles/global.css";
import { GlobeAltIcon, Bars3Icon } from "@heroicons/react/24/outline";

interface NavLinks {
  path: string;
  label: string;
}

const ulLinks: NavLinks[] = [
  { label: "Home", path: "#" },
  { label: "About me", path: "#aboutme" },
  { label: "Technology", path: "#technology" },
  { label: "Projects", path: "#projects"},
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 py-6 bg-transparent backdrop-blur-md">
      <div className="container flex justify-between mx-auto">
        <GlobeAltIcon className="lg:w-14 w-12 text-[var(--accent-color)]" />
        <ul className="hidden lg:flex items-center space-x-5 xl:text-xl">
          {ulLinks.map((item) => {
            return (
              <li
                key={item.path}
                className="hover:text-[var(--accent-color)] text-[var(--second-color)] transition-colors duration-300 text-2xl"
              >
                <a href={item.path}>{item.label}</a>
              </li>
            );
          })}
        </ul>
        <button className="px-3 py-2 lg:hidden cursor-pointer hover:text-[var(--accent-color)] transition-colors duration-300">
          <Bars3Icon className="w-12 text-[var(--second-color)] hover:text-[var(--accent-color)] transition-colors duration-300" />
        </button>
      </div>
    </nav>
  );
}
