import { profile } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with Next.js · Designed with intent</span>
        <a href="#top">back to top ↑</a>
      </div>
    </footer>
  );
}
