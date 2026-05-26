import { Star, Users, Clock, Calendar } from "lucide-react";
import { SALON } from "@/data/salonData";

const HIGHLIGHTS = [
    {
        icon: Star,
        value: "4.7",
        suffix: "/ 5",
        label: "Google Rating",
        accent: true,
    },
    {
        icon: Users,
        value: "242",
        suffix: "+",
        label: "Happy Clients",
    },
    {
        icon: Calendar,
        value: "7",
        suffix: "+ yrs",
        label: "In Business",
    },
    {
        icon: Clock,
        value: "10",
        suffix: " PM",
        label: "Open Till Daily",
    },
];

export default function Highlights() {
    return (
        <section
            data-testid="highlights-section"
            className="relative py-20 bg-[#f8f4ef] border-y border-[#c9a96e]/15"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                    {HIGHLIGHTS.map((h, i) => {
                        const Icon = h.icon;
                        return (
                            <div
                                key={h.label}
                                data-testid={`highlight-${i}`}
                                className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-[#1a1a2e]/5 hover:border-[#c9a96e]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1a1a2e]/5"
                            >
                                <div className="flex items-center gap-2 text-[#c9a96e] mb-4">
                                    <Icon
                                        className={`w-5 h-5 ${
                                            h.accent
                                                ? "fill-[#c9a96e]"
                                                : ""
                                        }`}
                                        strokeWidth={2}
                                    />
                                </div>
                                <div className="flex items-baseline gap-1 font-serif">
                                    <span className="text-4xl lg:text-5xl font-bold text-[#1a1a2e]">
                                        {h.value}
                                    </span>
                                    <span className="text-lg text-[#c9a96e] font-semibold">
                                        {h.suffix}
                                    </span>
                                </div>
                                <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.15em] text-[#1a1a2e]/60 font-semibold">
                                    {h.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
