import { Leaf, HeartPulse } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        <Leaf className="h-4 w-4" /> Our Mission
                    </div>
                    <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                        About the Project
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Climate Health Champions is a grassroots advocacy initiative based
                        in The Gambia, working at the intersection of climate change and
                        public health. We empower local communities, frontline health
                        workers, and young leaders to build resilience against the growing
                        health impacts of a changing climate.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From rising temperatures to shifting disease patterns, climate
                        change is the defining health challenge of our generation — and
                        West Africa sits on the frontlines.
                    </p>
                    <blockquote className="mt-8 border-l-4 border-primary bg-muted/60 p-6 italic text-foreground">
                        "When we protect the planet, we protect ourselves. Healthy
                        communities are the foundation of resilient futures."
                    </blockquote>
                </div>
                
                <div className="relative flex items-center justify-center">
                    <div className="relative aspect-square w-full max-w-md">
                        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
                        <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-gradient-warm p-12 shadow-lift">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col items-center gap-3 rounded-2xl bg-background p-6 shadow-soft">
                                    <Leaf className="h-12 w-12 text-primary" />
                                    <span className="text-center text-sm font-semibold">Climate</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 rounded-2xl bg-background p-6 shadow-soft">
                                    <HeartPulse className="h-12 w-12 text-secondary" />
                                    <span className="text-center text-sm font-semibold">Health</span>
                                </div>
                                <div className="col-span-2 flex flex-col items-center gap-2 rounded-2xl bg-gradient-primary p-6 text-primary-foreground shadow-soft">
                                    <span className="font-display text-2xl font-bold">The Gambia</span>
                                    <span className="text-sm opacity-90">West Africa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}