// Salon data constants
export const SALON = {
    name: "Ikonic Unisex Salon",
    tagline: "Style that speaks for itself",
    phone: "+91 99450 80196",
    phoneRaw: "+919945080196",
    address:
        "Chocolate Factory Rd, Tavarekere, Cashier Layout, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
    addressShort: "BTM 1st Stage, Bengaluru — 560029",
    mapsUrl: "https://maps.app.goo.gl/YQq7J7iNbhALMG7L6",
    hours: "Open daily · Closes 10:00 PM",
    rating: "4.7",
    reviews: 242,
    years: 7,
};

export const SERVICES = [
    {
        id: "hair",
        title: "Haircuts & Styling",
        icon: "scissors",
        image:
            "https://images.unsplash.com/photo-1599387737479-c1ca5d39f1ff?auto=format&fit=crop&w=900&q=80",
        items: [
            { name: "Men's Haircut & Styling", price: "₹200 – ₹400" },
            { name: "Women's Haircut & Styling", price: "₹350 – ₹600" },
            { name: "Kids' Haircut", price: "₹150 – ₹250" },
            { name: "Hair Wash & Blow Dry", price: "₹300 – ₹500" },
            { name: "Beard Trim & Styling", price: "₹100 – ₹200" },
        ],
    },
    {
        id: "color",
        title: "Hair Color & Treatments",
        icon: "palette",
        image:
            "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
        items: [
            { name: "Global Hair Color", price: "₹800 – ₹2,500" },
            { name: "Highlights / Balayage", price: "₹1,500 – ₹4,000" },
            { name: "Keratin Smoothening", price: "₹3,500 – ₹8,000" },
            { name: "Hair Spa Treatment", price: "₹600 – ₹1,200" },
            { name: "Protein Treatment", price: "₹800 – ₹1,500" },
        ],
    },
    {
        id: "skin",
        title: "Skin & Face",
        icon: "sparkles",
        image:
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
        items: [
            { name: "Basic Facial", price: "₹500 – ₹800" },
            { name: "D-Tan Facial", price: "₹700 – ₹1,200" },
            { name: "Threading (eyebrows)", price: "₹50" },
            { name: "Threading (full face)", price: "₹150 – ₹200" },
            { name: "Waxing (full arms/legs)", price: "₹300 – ₹600" },
        ],
    },
    {
        id: "nails",
        title: "Nails",
        icon: "hand",
        image:
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
        items: [
            { name: "Manicure (basic)", price: "₹300 – ₹500" },
            { name: "Pedicure (basic)", price: "₹400 – ₹600" },
            { name: "Gel Nail Color", price: "₹700 – ₹1,000" },
        ],
    },
    {
        id: "bridal",
        title: "Bridal & Special Occasions",
        icon: "crown",
        image:
            "https://images.unsplash.com/photo-1595019141441-3ec3f9bb8943?auto=format&fit=crop&w=900&q=80",
        items: [
            { name: "Bridal Makeup", price: "₹5,000 – ₹12,000" },
            { name: "Party Makeup", price: "₹1,500 – ₹3,000" },
            { name: "Pre-Bridal Package", price: "₹8,000 – ₹15,000" },
        ],
    },
];

export const TESTIMONIALS = [
    {
        name: "Priya Raghavan",
        location: "Koramangala",
        rating: 5,
        text: "Found my forever salon in BTM! Got my balayage done here last month — the stylist genuinely listened to what I wanted, gave honest advice on what would suit me, and the result was just stunning. Worth every rupee.",
        service: "Balayage & Hair Spa",
    },
    {
        name: "Arjun Subramanian",
        location: "BTM 1st Stage",
        rating: 5,
        text: "Been coming here for over two years for my haircuts and beard trim. Always punctual, always neat, and the boys remember exactly how I like it. No fuss, no upselling — just solid work. Highly recommend.",
        service: "Haircut & Beard Styling",
    },
    {
        name: "Sneha Kulkarni",
        location: "HSR Layout",
        rating: 5,
        text: "Had my pre-bridal package and bridal makeup done here — could not have asked for a smoother experience. The team made me feel so relaxed. My skin glowed and the makeup lasted the full day. Got compliments throughout the wedding!",
        service: "Pre-Bridal & Bridal Makeup",
    },
];
