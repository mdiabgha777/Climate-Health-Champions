import { Camera } from "lucide-react";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 object-contain" width={40} height={40} loading="lazy" />
            <span className="font-display text-lg font-bold text-primary">
              Climate Health <span className="text-secondary">Champions</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Healthy communities, resilient futures.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#why" className="hover:text-primary">Why It Matters</a></li>
            <li><a href="#what" className="hover:text-primary">What We Do</a></li>
            <li><a href="#join" className="hover:text-primary">Get Involved</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
            Connect
          </h4>
          <a
            href="https://www.instagram.com/climatehealthchampionsgm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-accent to-secondary px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Camera className="h-4 w-4" /> @climatehealthchampionsgm
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Based in The Gambia 🇬🇲</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          © 2026 Climate Health Champions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}