import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";


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
        </header>
    )
}