import "../styles/global.css";
import TechnologyPills from "./TechnologyPills";

type Props = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ title, description, tags }: Props) {
  return (
    <div className="border-[var(--accent-color)] border-2 rounded-md m-4 p-4">
      <p className="text-2xl text-[var(--second-color)] duration-300 transition-colors hover:text-[var(--accent-color)] text-start w-fit">
        {title}
      </p>
      <p className="text-[var(--third-colour)] mt-2">{description}</p>
      <div className="flex flex-wrap mt-3 gap-2">
        <TechnologyPills tags={tags} />
      </div>
    </div>
  );
}
