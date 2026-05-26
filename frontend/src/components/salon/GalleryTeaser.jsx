import { ArrowRight, Sparkles } from "lucide-react";
import { SALON } from "@/data/salonData";

export default function GalleryTeaser() {
    return (
        <section
            data-testid="gallery-section"
            className="relative py-24 lg:py-32 bg-[#1a1a2e] grain overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                    {/* Left: Abstract art panel */}
                    <div className="lg:col-span-7 relative">
                        <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
                            <div className="col-span-7 row-span-4 img-frame rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
                                    alt="Stylist at work"
                                    loading="lazy"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                            <div className="col-span-5 row-span-3 img-frame rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80"
                                    alt="Hair color transformation"
                                    loading="lazy"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                            <div className="col-span-5 row-span-3 img-frame rounded-2xl overflow-hidden relative">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #c9a96e 0%, #a8884f 100%)",
                                    }}
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1a1a2e] p-4 text-center">
                                    <Sparkles
                                        className="w-8 h-8 mb-2"
                                        strokeWidth={1.8}
                                    />
                                    <p className="font-serif italic text-base sm:text-lg leading-snug">
                                        Crafted in BTM, since {2026 - SALON.years}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-7 row-span-2 img-frame rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                                    alt="Bridal makeup detail"
                                    loading="lazy"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Copy */}
                    <div className="lg:col-span-5 text-[#f8f4ef]">
                        <div className="ornament max-w-[180px] mb-6">
                            <span className="text-xs tracking-[0.4em] uppercase font-semibold">
                                Gallery
                            </span>
                        </div>
                        <h2
                            data-testid="gallery-title"
                            className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
                        >
                            The work{" "}
                            <span className="italic gold-shine">
                                speaks
                            </span>{" "}
                            louder.
                        </h2>
                        <p className="mt-6 text-[#f8f4ef]/70 text-lg leading-relaxed">
                            Photos rarely capture the full story. The
                            confident posture as you leave the chair. The
                            second-glance compliment at the office. The way
                            your bridal portraits turn out years later.
                        </p>
                        <p className="mt-4 text-[#c9a96e] font-serif italic text-xl">
                            Visit us to see the transformation.
                        </p>

                        <a
                            href={SALON.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="gallery-directions-cta"
                            className="mt-8 inline-flex items-center gap-3 text-[#c9a96e] hover:text-[#d9bc82] font-semibold text-base group transition-colors"
                        >
                            <span>Find us in BTM Layout</span>
                            <ArrowRight
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                strokeWidth={2.2}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
