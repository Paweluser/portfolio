type Props = {
  tags: string[];
};

export default function TechnologyPills({ tags }: Props) {
  return (
    <>
      {tags.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-sm border rounded-full bg-[var(--main-color)] border-[var(--second-color)] text-[var(--second-color)] transition-colors duration-300 hover:bg-[var(--accent-color)] hover:text-[var(--main-color)]"
        >
          {tech}
        </span>
      ))}
    </>
  );
}
