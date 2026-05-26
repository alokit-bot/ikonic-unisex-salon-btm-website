import { Phone, MapPin, Star, Scissors } from "lucide-react";
import { SALON } from "@/data/salonData";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen hero-pattern grain overflow-hidden"
        >
            {/* Decorative golden circles */}
            <div
                aria-hidden="true"
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
                style={{
                    background:
                        "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-15"
                style={{
                    background:
                        "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
                }}
            />

            {/* Floating scissors decoration */}
            <Scissors
                aria-hidden="true"
                className="hidden lg:block absolute top-32 right-[18%] w-12 h-12 text-[#c9a96e]/30 animate-scissors"
                strokeWidth={1.2}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 text-[#f8f4ef]">
                        <div
                            data-testid="hero-rating-badge"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a96e]/40 bg-[#c9a96e]/5 animate-fade-up"
                        >
                            <Star
                                className="w-4 h-4 text-[#c9a96e] fill-[#c9a96e]"
                            />
                            <span className="text-sm tracking-wide">
                                <span className="font-bold text-[#c9a96e]">
                                    {SALON.rating}
                                </span>{" "}
                                / 5 · {SALON.reviews} Google reviews
                            </span>
                        </div>

                        <h1
                            data-testid="hero-title"
                            className="font-serif font-bold leading-[0.95] tracking-tight mt-7 animate-fade-up delay-100"
                            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
                        >
                            Ikonic
                            <br />
                            <span className="gold-shine italic font-medium">
                                Unisex
                            </span>{" "}
                            Salon
                        </h1>

                        <p
                            data-testid="hero-tagline"
                            className="font-serif italic text-xl sm:text-2xl text-[#c9a96e] mt-6 animate-fade-up delay-200"
                        >
                            "{SALON.tagline}"
                        </p>

                        <p
                            data-testid="hero-description"
                            className="mt-6 text-base sm:text-lg text-[#f8f4ef]/75 max-w-xl leading-relaxed animate-fade-up delay-300"
                        >
                            Bengaluru's beloved neighbourhood salon in BTM
                            Layout — where{" "}
                            <span className="text-[#c9a96e] font-semibold">
                                {SALON.years}+ years
                            </span>{" "}
                            of craft meets every cut, colour, and care
                            ritual. Walk in. Glow out.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
                            <a
                                href={`tel:${SALON.phoneRaw}`}
                                data-testid="hero-call-cta"
                                className="btn-gold inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-bold tracking-wide"
                            >
                                <Phone
                                    className="w-5 h-5"
                                    strokeWidth={2.5}
                                />
                                <span>Book a Visit · {SALON.phone}</span>
                            </a>
                            <a
                                href={SALON.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="hero-directions-cta"
                                className="btn-outline-gold inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-semibold tracking-wide"
                            >
                                <MapPin
                                    className="w-5 h-5"
                                    strokeWidth={2.2}
                                />
                                <span>Get Directions</span>
                            </a>
                        </div>

                        <div className="mt-10 flex items-center gap-2 text-sm text-[#f8f4ef]/60 animate-fade-up delay-500">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span>{SALON.hours}</span>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="lg:col-span-5 relative animate-fade-in delay-300">
                        <div className="relative aspect-[4/5] max-w-md mx-auto">
                            <div
                                className="absolute inset-0 rounded-[2rem] img-frame animate-float"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #1a1a2e 0%, #0f0f1e 100%)",
                                }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80"
                                    alt="Stylish hair work at Ikonic Salon"
                                    className="w-full h-full object-cover rounded-[2rem] mix-blend-luminosity opacity-90"
                                    loading="eager"
                                />
                                <div
                                    className="absolute inset-0 rounded-[2rem] pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, transparent 40%, rgba(26, 26, 46, 0.85) 100%)",
                                    }}
                                />
                            </div>

                            {/* Stat card overlay */}
                            <div
                                data-testid="hero-stat-card"
                                className="absolute -bottom-6 -left-6 sm:-left-12 bg-[#f8f4ef] rounded-2xl p-5 shadow-2xl max-w-[220px] animate-fade-up delay-600"
                            >
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-[#c9a96e] fill-[#c9a96e]"
                                        />
                                    ))}
                                </div>
                                <p className="text-xs text-[#1a1a2e]/70 font-medium leading-relaxed">
                                    "Found my forever salon in BTM!"
                                </p>
                                <p className="text-[10px] mt-2 text-[#1a1a2e]/50 uppercase tracking-wider">
                                    — Priya R., Koramangala
                                </p>
                            </div>

                            {/* Floating badge */}
                            <div
                                className="absolute -top-4 -right-4 sm:-right-8 bg-[#c9a96e] text-[#1a1a2e] rounded-full px-4 py-3 shadow-xl font-serif font-bold animate-float"
                                style={{ animationDelay: "1.5s" }}
                            >
                                <div className="text-center leading-none">
                                    <div className="text-2xl">
                                        {SALON.years}+
                                    </div>
                                    <div className="text-[9px] uppercase tracking-widest font-sans font-bold mt-1">
                                        Years
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <div
                aria-hidden="true"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#c9a96e]/60 animate-fade-in delay-600"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase">
                    Explore
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-[#c9a96e] to-transparent" />
            </div>
        </section>
    );
}
