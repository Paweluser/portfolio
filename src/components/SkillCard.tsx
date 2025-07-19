import Icon from "../components/Icon";
import "../styles/global.css";

const skills = [
  { name: "HTML", icon: "simple-icons:html5" },
  { name: "CSS", icon: "simple-icons:css3" },
  { name: "JavaScript", icon: "simple-icons:javascript" },
  { name: "TypeScript", icon: "simple-icons:typescript" },
  { name: "React", icon: "simple-icons:react" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "Astro", icon: "simple-icons:astro" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  { name: "SASS", icon: "simple-icons:sass" },
  { name: "Git", icon: "simple-icons:git" },
  { name: "Playwright", icon: "simple-icons:playwright" },
  { name: "PostgreSQL", icon: "simple-icons:postgresql" },
  { name: "Bootstrap", icon: "simple-icons:bootstrap" },
];

export default function SkillCard() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 mt-6">
      {skills.map(({ name, icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 group transition-transform hover:scale-105"
        >
          <Icon
            name={icon}
            className="lg:w-[120px] lg:h-[120px] max-sm:w-[60px] max-sm:h-[60px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] text-[var(--third-colour)] transition-colors duration-300 group-hover:text-[var(--accent-color)]"
            title={name}
          />
          <span className="text-sm text-[var(--second-color)]">{name}</span>
        </div>
      ))}
    </div>
  );
}
