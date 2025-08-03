import "../styles/global.css";

type Props = {
  href: string;
  label: string;
};

export default function LinkButton({ href, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[var(--main-color)] text-[var(--second-color)] border-[var(--second-color)] border-[1px] px-4 py-2 rounded-md text-sm font-medium duration-300 transition-colors hover:bg-[var(--accent-color)] hover:text-[var(--main-color)]"
    >
      {label}
    </a>
  );
}
