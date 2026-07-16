import FeaturedHotels from "@/components/landing/FeaturedHotels";
import Hero from "@/components/landing/Hero";
import Newsletter from "@/components/landing/Newsletter";
import PopularDestinations from "@/components/landing/PopularDestinations";
import PromoBanner from "@/components/landing/PromoBanner";
import Testimonials from "@/components/landing/Testimonials";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

const destinations = [
  {
    name: "Paris",
    hotels: "1,240 hotels",
    tone: "from-[#1d4ed8] via-[#3b82f6] to-[#93c5fd]",
  },
  {
    name: "Maldives",
    hotels: "450 hotels",
    tone: "from-[#0f766e] via-[#14b8a6] to-[#99f6e4]",
  },
  {
    name: "Tokyo",
    hotels: "890 hotels",
    tone: "from-[#5b21b6] via-[#8b5cf6] to-[#ddd6fe]",
  },
  {
    name: "New York",
    hotels: "2,100 hotels",
    tone: "from-[#b45309] via-[#f59e0b] to-[#fde68a]",
  },
];

const featuredHotels = [
  {
    name: "The Ritz Paris",
    location: "Paris, France",
    price: "$1,200",
    rating: "5.0",
    features: ["Free WiFi", "Pool", "Gym"],
  },
  {
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    price: "$2,500",
    rating: "4.9",
    features: ["Spa", "7 Restaurants", "Valet"],
  },
  {
    name: "The Peninsula Tokyo",
    location: "Tokyo, Japan",
    price: "$980",
    rating: "4.8",
    features: ["Sky Lounge", "Wellness", "Concierge"],
  },
];

const testimonials = [
  {
    quote:
      "The booking process was seamless, and the hotel selection felt genuinely curated.",
    author: "Amanda Lee",
    role: "Travel editor",
    accent: "from-[#1d4ed8] to-[#93c5fd]",
  },
  {
    quote:
      "LuxeStay saved us hours of searching and made the trip feel thoughtfully planned.",
    author: "Marcus Chen",
    role: "Frequent traveler",
    accent: "from-[#0f766e] to-[#99f6e4]",
  },
  {
    quote:
      "Support was quick, the recommendations were strong, and the pricing was clear.",
    author: "Sofia Patel",
    role: "Founder",
    accent: "from-[#b45309] to-[#fde68a]",
  },
];

export default function Home() {
  return (
   <main className="">
    <Hero />
    <PopularDestinations />
    <PromoBanner />
    <FeaturedHotels />
    <WhyChooseUs />
    <Testimonials />
    <Newsletter />
   </main>
  );
}