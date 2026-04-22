import { useState } from "react";
import { Instagram, Share2, Mail, Check, Copy } from "lucide-react";

export default function GetInvolved() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyHashtag = async () => {
        await navigator.clipboard.writeText("#ClimateHealthChampions");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="join" className="bg-gradient-warm py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                        Join the Movement
                    </h2>
                </div>
            </div>
        </section>
    )
}