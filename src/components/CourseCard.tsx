import "../styles/global.css";

type CourseCardProps = {
  title: string;
};

export default function CourseCard({ title }: CourseCardProps) {
  return (
    <div className="md:hidden border-[var(--accent-color)] border-2 rounded-md m-4 p-4">
      <p className="text-xl text-[var(--second-color)] duration-300 transition-colors hover:text-[var(--accent-color)] text-start w-fit">
        {title}
      </p>
    </div>
  );
}
