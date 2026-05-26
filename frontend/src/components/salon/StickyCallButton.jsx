import { Phone } from "lucide-react";
import { SALON } from "@/data/salonData";

export default function StickyCallButton() {
    return (
        <a
            href={`tel:${SALON.phoneRaw}`}
            data-testid="sticky-call-button"
            aria-label={`Call ${SALON.name} at ${SALON.phone}`}
            className="md:hidden fixed bottom-20 right-4 z-40 btn-gold rounded-full w-14 h-14 flex items-center justify-center shadow-2xl shadow-[#c9a96e]/40 active:scale-95"
        >
            <Phone className="w-6 h-6" strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a96e] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c9a96e]" />
            </span>
        </a>
    );
}
