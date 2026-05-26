import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SALON } from "@/data/salonData";

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Visit" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled ? "py-3" : "py-5"
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all duration-500 ${
                        scrolled
                            ? "nav-pill shadow-2xl shadow-black/20"
                            : "bg-transparent"
                    }`}
                >
                    <a
                        href="#top"
                        data-testid="nav-logo"
                        className="flex items-center gap-2.5 group"
                    >
                        <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[#c9a96e] text-[#c9a96e] font-serif text-lg font-bold transition-transform duration-500 group-hover:rotate-12">
                            I
                        </span>
                        <span
                            className={`font-serif text-base sm:text-lg tracking-wider ${
                                scrolled ? "text-[#f8f4ef]" : "text-[#f8f4ef]"
                            }`}
                        >
                            IKONIC
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                data-testid={`nav-link-${link.label.toLowerCase()}`}
                                className="text-sm font-medium tracking-wide text-[#f8f4ef]/80 hover:text-[#c9a96e] transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <a
                        href={`tel:${SALON.phoneRaw}`}
                        data-testid="nav-call-cta"
                        className="hidden md:inline-flex items-center gap-2 btn-gold rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide"
                    >
                        <Phone className="w-4 h-4" strokeWidth={2.5} />
                        <span>Call to Book</span>
                    </a>

                    <button
                        data-testid="nav-mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-[#f8f4ef] p-1"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div
                        data-testid="nav-mobile-menu"
                        className="md:hidden mt-3 nav-pill rounded-2xl p-5 animate-fade-in"
                    >
                        <nav className="flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
                                    className="text-base font-medium text-[#f8f4ef]/90 py-3 px-3 rounded-lg hover:bg-[#c9a96e]/10 hover:text-[#c9a96e] transition-all"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={`tel:${SALON.phoneRaw}`}
                                data-testid="nav-mobile-call-cta"
                                className="mt-3 inline-flex items-center justify-center gap-2 btn-gold rounded-full px-5 py-3 text-sm font-semibold"
                            >
                                <Phone className="w-4 h-4" strokeWidth={2.5} />
                                <span>Call Now: {SALON.phone}</span>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
