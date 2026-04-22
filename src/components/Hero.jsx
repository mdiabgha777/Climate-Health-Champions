import { ArrowDown, Camera } from "lucide-react";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-hero"
    >
      {/* decorative blobs */}
      {/* <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-accent/20 blur-2xl" /> */}

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <img
          src={logo}
          alt="Climate Health Champions logo"
          width={160}
          height={160}
          className="mb-8 h-32 w-32 animate-fade-in object-contain drop-shadow-lg sm:h-40 sm:w-40"
        />
        <h1 className="animate-fade-up font-display text-4xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl">
          Climate Health <span className="text-secondary">Champions</span>
        </h1>
        <p
          className="mt-6 max-w-2xl animate-fade-up text-lg text-foreground/80 sm:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          Healthy communities, resilient futures — bridging climate action and
          public health across The Gambia.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-3 font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-105"
          >
            Learn More <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/climatehealthchampionsgm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-background/60 px-8 py-3 font-semibold text-secondary backdrop-blur transition-all hover:bg-secondary hover:text-secondary-foreground"
          >
            <Camera className="h-4 w-4" /> Follow Us
          </a>
        </div>
      </div>
    </section>
  );
}
