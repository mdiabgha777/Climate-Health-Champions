import { BookOpen, Megaphone, ShieldCheck, Microscope } from "lucide-react";

const colorMap = {
  primary: "bg-green-100 text-green-700",
  secondary: "bg-blue-100 text-blue-700",
  accent: "bg-yellow-100 text-yellow-700",
};

const focuses = [
  {
    icon: BookOpen,
    color: "primary",
    title: "Education & Awareness",
    desc: "Workshops, school visits, and digital campaigns that translate climate science into actionable health knowledge.",
  },
  {
    icon: Megaphone,
    color: "secondary",
    title: "Community Health Advocacy",
    desc: "Amplifying the voices of frontline communities and pushing for climate-resilient health policy.",
  },
  {
    icon: ShieldCheck,
    color: "accent",
    title: "Climate Resilience Training",
    desc: "Equipping local health workers and youth with practical tools to prepare for heat, floods, and disease outbreaks.",
  },
  {
    icon: Microscope,
    color: "primary",
    title: "Research & Knowledge Sharing",
    desc: "Documenting lived experience and partnering with researchers to inform global climate-health solutions.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Focus Areas
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Four pillars driving lasting impact in our communities.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {focuses.map(({ icon: Icon, color, title, desc }, i) => (
            <div
              key={title}
              className={`flex flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-md md:p-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl ${colorMap[color]}`}
              >
                <Icon className="h-14 w-14" />
              </div>

              <div
                className={
                  i % 2 === 0
                    ? "md:text-left text-center"
                    : "md:text-right text-center"
                }
              >
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-3 text-lg text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}