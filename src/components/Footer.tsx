import "../styles/global.css";

export default function Footer() {
  return (
    <footer className="bg-[var(--third-colour)] text-[var(--second-color)] py-8">
      <div className="max-w-6xl mx-auto px-4 text-center max-sm:text-sm">
         <p>© {new Date().getFullYear()} Paweluser. All rights reserved.</p>
      </div>
    </footer>
  );
}
