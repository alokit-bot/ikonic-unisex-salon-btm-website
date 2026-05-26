import { useState } from "react";
import {
    Scissors,
    Palette,
    Sparkles,
    Hand,
    Crown,
    Phone,
} from "lucide-react";
import { SERVICES, SALON } from "@/data/salonData";

const ICONS = {
    scissors: Scissors,
    palette: Palette,
    sparkles: Sparkles,
    hand: Hand,
    crown: Crown,
};

export default function Services() {
    const [activeId, setActiveId] = useState(SERVICES[0].id);
    const active = SERVICES.find((s) => s.id === activeId);

    return (
        <section
            id="services"
            data-testid="services-section"
            className="relative py-24 lg:py-32 bg-[#1a1a2e] grain overflow-hidden"
        >
            {/* Background ornament */}
            <div
                aria-hidden="true"
                className="absolute top-1/2 -right-32 w-96 h-96 rounded-full opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="ornament max-w-[180px] mx-auto mb-6">
                        <span className="text-xs tracking-[0.4em] uppercase font-semibold">
                            Menu
                        </span>
                    </div>
                    <h2
                        data-testid="services-title"
                        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f8f4ef] leading-[1.05] tracking-tight"
                    >
                        Services crafted with{" "}
                        <span className="italic text-[#c9a96e]">care</span>
                    </h2>
                    <p className="mt-5 text-[#f8f4ef]/70 text-lg max-w-xl mx-auto">
                        From quick trims to full bridal transformations —
                        every service is honest, hygienic, and finished
                        with finesse.
                    </p>
                </div>

                {/* Category tabs */}
                <div
                    role="tablist"
                    className="mt-12 flex flex-wrap justify-center gap-3"
                >
                    {SERVICES.map((s) => {
                        const Icon = ICONS[s.icon];
                        const isActive = s.id === activeId;
                        return (
                            <button
                                key={s.id}
                                role="tab"
                                aria-selected={isActive}
                                data-testid={`service-tab-${s.id}`}
                                onClick={() => setActiveId(s.id)}
                                className={`group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                                    isActive
                                        ? "bg-[#c9a96e] text-[#1a1a2e] shadow-lg shadow-[#c9a96e]/30"
                                        : "bg-[#f8f4ef]/5 text-[#f8f4ef]/75 border border-[#c9a96e]/20 hover:border-[#c9a96e]/60 hover:text-[#c9a96e]"
                                }`}
                            >
                                <Icon className="w-4 h-4" strokeWidth={2.2} />
                                <span>{s.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Active service panel */}
                <div
                    key={active.id}
                    data-testid="service-panel"
                    className="mt-14 grid lg:grid-cols-12 gap-10 items-start animate-fade-up"
                >
                    {/* Image */}
                    <div className="lg:col-span-5">
                        <div className="img-frame rounded-2xl overflow-hidden aspect-[4/5] relative">
                            <img
                                src={active.image}
                                alt={active.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(180deg, transparent 50%, rgba(26, 26, 46, 0.6) 100%)",
                                }}
                            />
                            <div className="absolute bottom-5 left-5 right-5 text-[#f8f4ef]">
                                <div className="flex items-center gap-2 text-[#c9a96e]">
                                    {(() => {
                                        const Icon = ICONS[active.icon];
                                        return (
                                            <Icon
                                                className="w-5 h-5"
                                                strokeWidth={2.2}
                                            />
                                        );
                                    })()}
                                    <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                                        {active.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing list */}
                    <div className="lg:col-span-7">
                        <div className="space-y-1">
                            {active.items.map((item, idx) => (
                                <div
                                    key={item.name}
                                    data-testid={`service-item-${active.id}-${idx}`}
                                    className="flex items-baseline justify-between gap-4 py-5 border-b border-[#c9a96e]/15 group hover:border-[#c9a96e]/50 transition-colors"
                                >
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-serif text-lg sm:text-xl text-[#f8f4ef] group-hover:text-[#c9a96e] transition-colors">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span
                                            aria-hidden="true"
                                            className="hidden sm:block flex-1 border-b border-dotted border-[#c9a96e]/30 w-12"
                                        />
                                        <span className="font-serif text-lg sm:text-xl text-[#c9a96e] font-semibold whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href={`tel:${SALON.phoneRaw}`}
                                data-testid="services-call-cta"
                                className="btn-gold inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold tracking-wide"
                            >
                                <Phone
                                    className="w-4 h-4"
                                    strokeWidth={2.5}
                                />
                                <span>Call to Book This Service</span>
                            </a>
                            <p className="text-xs text-[#f8f4ef]/50 self-center max-w-xs leading-relaxed">
                                Prices may vary based on hair length, product
                                choice & customization. Confirmed on consult.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
