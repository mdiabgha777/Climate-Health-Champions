import { useState } from "react";
import { Camera, Share2, Check, Copy } from "lucide-react";

export default function GetInvolved() {
  const [copied, setCopied] = useState(false);

  const copyHashtag = async () => {
    await navigator.clipboard.writeText("#ClimateHealthChampions");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="join" className="bg-gradient-warm py-24 sm:py-32">
      <div className="container">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Join the Movement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Be part of building healthier, climate-resilient communities.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {/* Instagram */}
          <div className="flex flex-col rounded-2xl bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-secondary text-white">
              <Camera className="h-7 w-7" />
            </div>

            <h3 className="text-xl font-bold">Follow on Instagram</h3>

            <p className="mt-2 flex-1 text-muted-foreground">
              Get stories, science, and updates from the field.
            </p>

            <a
              href="https://www.instagram.com/climatehealthchampionsgm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              @climatehealthchampionsgm
            </a>
          </div>

          {/* Share */}
          <div className="flex flex-col rounded-2xl bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <Share2 className="h-7 w-7" />
            </div>

            <h3 className="text-xl font-bold">Spread the Word</h3>

            <p className="mt-2 flex-1 text-muted-foreground">
              Share our mission with your network using our hashtag.
            </p>

            <button
              onClick={copyHashtag}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary px-5 py-2.5 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> #ClimateHealthChampions
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}