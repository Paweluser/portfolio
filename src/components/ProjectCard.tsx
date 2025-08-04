import "../styles/global.css";
import TechnologyPills from "./TechnologyPills";
import LinkButton from "./LinkButton";

type Props = {
  title: string;
  description: string;
  tags: string[];
  projectUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  projectUrl,
  liveUrl,
}: Props) {
  return (
    <div className="border-[var(--accent-color)] border-2 rounded-md m-4 p-4">
      <p className="text-xl md:text-2xl text-[var(--second-color)] duration-300 transition-colors hover:text-[var(--accent-color)] text-start w-fit">
        {title}
      </p>
      <p className="text-[var(--third-colour)] mt-2">{description}</p>
      <div className="flex flex-wrap mt-3 gap-2">
        <TechnologyPills tags={tags} />
      </div>
        <div className="flex justify-between gap-4 mt-6">
          {projectUrl && (
            <LinkButton href={projectUrl} label="Show code" />
          )}
          {liveUrl && (
            <LinkButton href={liveUrl} label="Show live" />
          )}
        </div>
    </div>
  );
}
