import "../styles/global.css";
import LinkButton from "./LinkButton";

type CourseCardProps = {
  title: string;
  url: string;
};

export default function CourseCard({ title, url }: CourseCardProps) {
  return (
    <div className="md:hidden border-[var(--accent-color)] border-2 rounded-md m-4 p-4">
      <p className="text-xl text-[var(--second-color)] duration-300 transition-colors hover:text-[var(--accent-color)] text-start w-fit">
        {title}
      </p>
      <div className="mt-5">
        <LinkButton href={url} label="Show course" />
      </div>
    </div>
  );
}
