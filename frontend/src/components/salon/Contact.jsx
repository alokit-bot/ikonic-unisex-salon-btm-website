import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { SALON } from "@/data/salonData";

export default function Contact() {
    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 lg:py-32 bg-[#1a1a2e] grain overflow-hidden"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Left: Details */}
                    <div className="lg:col-span-5 text-[#f8f4ef]">
                        <div className="ornament max-w-[200px] mb-6">
                            <span className="text-xs tracking-[0.4em] uppercase font-semibold">
                                Visit Us
                            </span>
                        </div>
                        <h2
                            data-testid="contact-title"
                            className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
                        >
                            Walk in.{" "}
                            <span className="italic gold-shine">
                                Glow out.
                            </span>
                        </h2>
                        <p className="mt-6 text-[#f8f4ef]/70 text-lg leading-relaxed max-w-md">
                            Call ahead to book your slot — weekends fill
                            up fast. We accept walk-ins, but a quick call
                            saves your time.
                        </p>

                        <div className="mt-10 space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-11 h-11 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center">
                                    <Phone
                                        className="w-4 h-4 text-[#c9a96e]"
                                        strokeWidth={2.2}
                                    />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#f8f4ef]/50 font-semibold">
                                        Phone
                                    </p>
                                    <a
                                        href={`tel:${SALON.phoneRaw}`}
                                        data-testid="contact-phone-link"
                                        className="mt-1 block font-serif text-2xl text-[#c9a96e] hover:text-[#d9bc82] transition-colors"
                                    >
                                        {SALON.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-11 h-11 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center">
                                    <MapPin
                                        className="w-4 h-4 text-[#c9a96e]"
                                        strokeWidth={2.2}
                                    />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#f8f4ef]/50 font-semibold">
                                        Address
                                    </p>
                                    <p
                                        data-testid="contact-address"
                                        className="mt-1 text-[#f8f4ef]/90 leading-relaxed text-base"
                                    >
                                        {SALON.address}
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <div className="shrink-0 w-11 h-11 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center">
                                    <Clock
                                        className="w-4 h-4 text-[#c9a96e]"
                                        strokeWidth={2.2}
                                    />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-[#f8f4ef]/50 font-semibold">
                                        Hours
                                    </p>
                                    <p className="mt-1 text-[#f8f4ef]/90 text-base">
                                        {SALON.hours}
                                    </p>
                                    <div className="mt-1 inline-flex items-center gap-2 text-xs text-green-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span>Open now</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-3">
                            <a
                                href={`tel:${SALON.phoneRaw}`}
                                data-testid="contact-call-cta"
                                className="btn-gold inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-bold tracking-wide"
                            >
                                <Phone
                                    className="w-4 h-4"
                                    strokeWidth={2.5}
                                />
                                <span>Tap to Call</span>
                            </a>
                            <a
                                href={SALON.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="contact-directions-cta"
                                className="btn-outline-gold inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold tracking-wide"
                            >
                                <Navigation
                                    className="w-4 h-4"
                                    strokeWidth={2.2}
                                />
                                <span>Get Directions</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="lg:col-span-7">
                        <div
                            className="img-frame rounded-2xl overflow-hidden shadow-2xl shadow-black/40 bg-[#0f0f1e]"
                            style={{ aspectRatio: "1 / 1" }}
                        >
                            <iframe
                                title="Ikonic Unisex Salon location"
                                data-testid="contact-map-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.659580547399!2d77.59802907576196!3d12.916932016234916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156ed8a4cc9d%3A0x9c2a8dba49e4ff04!2sChocolate%20Factory%20Rd%2C%20Tavarekere%2C%20BTM%201st%20Stage%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000"
                                width="100%"
                                height="100%"
                                style={{
                                    border: 0,
                                    filter: "grayscale(0.3) contrast(1.05)",
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <a
                            href={SALON.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="contact-map-link"
                            className="mt-4 inline-flex items-center gap-2 text-sm text-[#c9a96e] hover:text-[#d9bc82] transition-colors"
                        >
                            <Navigation className="w-4 h-4" strokeWidth={2.2} />
                            <span>Open in Google Maps →</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
