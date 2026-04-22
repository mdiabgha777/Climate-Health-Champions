import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";
import logo from "../assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why It Matters" },
  { href: "#what", label: "What We Do" },
  { href: "#join", label: "Get Involved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Climate Health Champions logo" className="h-10 w-10 object-contain" width={40} height={40} />
          <span className="hidden font-display text-lg font-bold text-primary sm:inline">
            Climate Health <span className="text-secondary">Champions</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.instagram.com/climatehealthchampionsgm"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 md:inline-flex"
        >
          <Camera className="h-4 w-4" /> Follow
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com/climatehealthchampionsgm"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                <Camera className="h-4 w-4" /> Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}