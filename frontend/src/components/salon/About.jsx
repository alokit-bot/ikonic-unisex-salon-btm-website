import { SALON } from "@/data/salonData";

export default function About() {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 lg:py-32 bg-[#f8f4ef] overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left: Image collage */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative grid grid-cols-2 gap-4 max-w-md">
                            <div className="img-frame rounded-xl overflow-hidden aspect-[3/4] mt-12">
                                <img
                                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                                    alt="Salon interior"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                            <div className="img-frame rounded-xl overflow-hidden aspect-[3/4]">
                                <img
                                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                                    alt="Hair styling"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Decorative quote mark */}
                        <div
                            aria-hidden="true"
                            className="absolute -top-8 -left-4 font-serif text-[180px] text-[#c9a96e]/15 leading-none select-none"
                        >
                            "
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-7">
                        <div className="ornament max-w-xs mb-6">
                            <span className="text-xs tracking-[0.4em] uppercase font-semibold">
                                Our Story
                            </span>
                        </div>

                        <h2
                            data-testid="about-title"
                            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a2e] leading-[1.05] tracking-tight"
                        >
                            {SALON.years}+ years of styling{" "}
                            <span className="italic text-[#c9a96e]">
                                Bengaluru
                            </span>
                            .
                        </h2>

                        <div className="mt-8 space-y-5 text-[#1a1a2e]/80 text-lg leading-relaxed max-w-2xl">
                            <p>
                                Tucked into the buzz of BTM Layout, Ikonic
                                began with a simple promise — every guest
                                walks in a regular and leaves looking like
                                their best self. No script, no rushed
                                appointments, no upsell pressure.
                            </p>
                            <p>
                                Across{" "}
                                <span className="text-[#c9a96e] font-semibold">
                                    seven+ years
                                </span>{" "}
                                and over{" "}
                                <span className="text-[#c9a96e] font-semibold">
                                    {SALON.reviews} five-star regulars
                                </span>
                                , we've stayed obsessed with the
                                fundamentals: clean tools, qualified
                                stylists, premium products, and a chair
                                that feels like home. From a teenager's
                                first fade to a bride's biggest morning —
                                we're here for all of it.
                            </p>
                        </div>

                        {/* Pillars */}
                        <div className="mt-12 grid sm:grid-cols-3 gap-6">
                            {[
                                {
                                    n: "01",
                                    t: "Trained Stylists",
                                    d: "Hand-picked, continually trained team.",
                                },
                                {
                                    n: "02",
                                    t: "Premium Products",
                                    d: "L'Oréal, Schwarzkopf, Streax Pro & more.",
                                },
                                {
                                    n: "03",
                                    t: "Honest Pricing",
                                    d: "No surprises. Transparent at every step.",
                                },
                            ].map((p) => (
                                <div
                                    key={p.n}
                                    data-testid={`about-pillar-${p.n}`}
                                    className="border-t border-[#1a1a2e]/10 pt-5"
                                >
                                    <span className="font-serif text-[#c9a96e] text-sm tracking-wider">
                                        {p.n}
                                    </span>
                                    <h3 className="font-serif text-xl text-[#1a1a2e] mt-2">
                                        {p.t}
                                    </h3>
                                    <p className="text-sm text-[#1a1a2e]/65 mt-2 leading-relaxed">
                                        {p.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
