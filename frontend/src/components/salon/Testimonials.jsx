import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/salonData";

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-24 lg:py-32 bg-[#f8f4ef] overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="ornament max-w-[200px] mx-auto mb-6">
                        <span className="text-xs tracking-[0.4em] uppercase font-semibold">
                            Reviews
                        </span>
                    </div>
                    <h2
                        data-testid="testimonials-title"
                        className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.05] tracking-tight"
                    >
                        Loved by{" "}
                        <span className="italic text-[#c9a96e]">
                            Bengaluru
                        </span>
                    </h2>
                    <div className="mt-5 inline-flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-5 h-5 text-[#c9a96e] fill-[#c9a96e]"
                            />
                        ))}
                        <span className="ml-2 text-[#1a1a2e]/70 text-sm font-semibold">
                            4.7 across 242 Google reviews
                        </span>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <article
                            key={t.name}
                            data-testid={`testimonial-${i}`}
                            className="relative bg-white rounded-2xl p-8 border border-[#1a1a2e]/8 svc-card flex flex-col"
                            style={{
                                animationDelay: `${i * 0.15}s`,
                            }}
                        >
                            <Quote
                                aria-hidden="true"
                                className="absolute top-6 right-6 w-10 h-10 text-[#c9a96e]/20"
                                strokeWidth={1.5}
                            />
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star
                                        key={idx}
                                        className="w-4 h-4 text-[#c9a96e] fill-[#c9a96e]"
                                    />
                                ))}
                            </div>
                            <p className="text-[#1a1a2e]/85 leading-relaxed text-[15px] flex-1">
                                "{t.text}"
                            </p>
                            <div className="mt-6 pt-5 border-t border-[#1a1a2e]/8">
                                <p className="font-serif text-lg text-[#1a1a2e] font-semibold">
                                    {t.name}
                                </p>
                                <p className="text-xs text-[#1a1a2e]/55 mt-1">
                                    {t.location} ·{" "}
                                    <span className="text-[#c9a96e] font-medium">
                                        {t.service}
                                    </span>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="mt-12 text-center text-xs text-[#1a1a2e]/50 tracking-wide">
                    Reviews reflect the experience of our long-time regulars
                    across BTM, Koramangala & HSR Layout.
                </p>
            </div>
        </section>
    );
}
