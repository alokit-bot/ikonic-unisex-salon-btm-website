import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { SALON } from "@/data/salonData";

export default function Footer() {
    return (
        <footer
            data-testid="footer-section"
            className="relative bg-[#0f0f1e] text-[#f8f4ef]/80 border-t border-[#c9a96e]/15"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#c9a96e] text-[#c9a96e] font-serif text-xl font-bold">
                                I
                            </span>
                            <span className="font-serif text-2xl tracking-wider text-[#f8f4ef]">
                                IKONIC
                            </span>
                        </div>
                        <p className="mt-5 text-sm leading-relaxed max-w-sm font-serif italic text-[#c9a96e]">
                            "{SALON.tagline}"
                        </p>
                        <p className="mt-3 text-sm text-[#f8f4ef]/55 max-w-sm leading-relaxed">
                            A premium unisex salon in BTM Layout — proudly
                            styling Bengaluru since {2026 - SALON.years}.
                        </p>
                    </div>

                    {/* Contact details */}
                    <div className="md:col-span-4">
                        <h4 className="font-serif text-sm uppercase tracking-[0.3em] text-[#c9a96e] font-semibold">
                            Visit
                        </h4>
                        <div className="mt-5 space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin
                                    className="w-4 h-4 text-[#c9a96e]/70 shrink-0 mt-0.5"
                                    strokeWidth={2}
                                />
                                <span className="leading-relaxed">
                                    {SALON.address}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone
                                    className="w-4 h-4 text-[#c9a96e]/70 shrink-0"
                                    strokeWidth={2}
                                />
                                <a
                                    href={`tel:${SALON.phoneRaw}`}
                                    data-testid="footer-phone-link"
                                    className="text-[#c9a96e] hover:text-[#d9bc82] transition-colors font-semibold"
                                >
                                    {SALON.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock
                                    className="w-4 h-4 text-[#c9a96e]/70 shrink-0"
                                    strokeWidth={2}
                                />
                                <span>{SALON.hours}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="md:col-span-3">
                        <h4 className="font-serif text-sm uppercase tracking-[0.3em] text-[#c9a96e] font-semibold">
                            Quick Links
                        </h4>
                        <ul className="mt-5 space-y-3 text-sm">
                            {[
                                { href: "#about", label: "About Us" },
                                { href: "#services", label: "Services & Pricing" },
                                { href: "#testimonials", label: "Reviews" },
                                { href: "#contact", label: "Get Directions" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-[#f8f4ef]/65 hover:text-[#c9a96e] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-[#c9a96e]/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-xs text-[#f8f4ef]/45">
                        © {new Date().getFullYear()} {SALON.name}. All rights
                        reserved.
                    </p>
                    <p className="text-xs text-[#f8f4ef]/45 font-serif italic">
                        Crafted with care in Bengaluru.
                    </p>
                </div>
            </div>
        </footer>
    );
}
