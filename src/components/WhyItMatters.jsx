import { Thermometer, Droplets, Users } from "lucide-react";

const items = [
  {
    icon: Thermometer,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "hover:border-accent",
    title: "Rising Temperatures",
    desc: "Heat stress, expanding malaria zones, and threats to food security are reshaping daily life across the Sahel.",
  },
  {
    icon: Droplets,
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "hover:border-secondary",
    title: "Water & Sanitation",
    desc: "Floods, droughts, and waterborne diseases like cholera disproportionately affect vulnerable communities.",
  },
  {
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "hover:border-primary",
    title: "Community Resilience",
    desc: "Empowering local health workers and youth advocates to lead adaptation and protection efforts.",
  },
];

export default function WhyItMatters() {
  return (
    <section id="why" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Why Climate & Health?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Climate change isn't just an environmental issue — it's a health
            emergency unfolding now.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, color, bg, border, title, desc }) => (
            <div
              key={title}
              className={`group rounded-2xl border-2 border-transparent bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift ${border}`}
            >
              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${bg}`}>
                <Icon className={`h-7 w-7 ${color}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}