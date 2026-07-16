import { ArrowRight } from 'lucide-react';
import React from 'react'

const destinations = [
    {
        name: "Paris",
        hotels: "1,240 hotels",
        tone: "from-[#1d4ed8] via-[#3b82f6] to-[#93c5fd]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT_IIMAjF_9r_B0veuFGk3FbokXcnlhFK-AzZZ_no2w8lIi6zi4uk31qAYpHo6x-RQDgx0G9AHEBINCKl3hKHNM2Nh25IUUzGZIzR0w2MgTT37yBCr5t_ojbaY0zpBa3jvLUEXBttX8Rw2ZaBPxKx72Z5FoENL2VWDRGikfiGtHNjTl3uqflAAD7rcb7yJbnDSwOf8rxMS2qftif278HLGh9Jb0yBDUvlVCRpNY83BbSkVYuPRzL6J8fvOdl6_qTf-u8Q7MNfdayjL"
    },
    {
        name: "Maldives",
        hotels: "450 hotels",
        tone: "from-[#0f766e] via-[#14b8a6] to-[#99f6e4]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQlY0cxNjHugr6bEK1tMT83kofuyHAyDW-A36L4HutpJ-_Lf0u4z9l2npYuhxoySg4vr0UMU4eE9AXJWDCBvN6qF0Q6GzZLj9-mSsop7louf1WB9oW9QSAFvuHTuMkWuLUpeOjbJqNeE7Fy8Bu6pPbHVRxxGHjNRx1cxRR7GP4xELm5WWBwMrtZf2zJD5OsuLYpI2-056cSUg2mkpFCLhVdVdDW7KK8i9_qursj2_CjFoPyCLJhC2jaFz4vuhjt7bJxjRFqcocKBWu"
    },
    {
        name: "Tokyo",
        hotels: "890 hotels",
        tone: "from-[#5b21b6] via-[#8b5cf6] to-[#ddd6fe]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzi4DQTtCVuho3hUcAWgoIrQ1KVzbWqAYHXGIYsr18dPWbbfx07LJ_fNvM5pxHLuRQU-cUSAqUNb0-Dw5wDIfGgU_MdeP4eUNbDqpS-N0DTr1YR5kU8FZs-rBnh2RHr83ZnDWOQ21NtYVpc4_c8fR26K9RHUNa6I5nODgCDEuF3SWyF-wclHxCnEXGhoz8WGyjceYCACITbdBspqwygC64oI_LYGX_0_nwg_p9p1dIK88y7nz4dPWwQSu1FquQPswXwU8OAsc4MlR5"
    },
    {
        name: "New York",
        hotels: "2,100 hotels",
        tone: "from-[#b45309] via-[#f59e0b] to-[#fde68a]",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtuiZlog3SCg25dhdiebnyn5aavgSj6AAXTBayBAa6jo9Xt8Q7GPf8VlXu7osQBmg9Or45TeLDDnxJlvpWokkCo1ZO7ecTeYH0HgZDgwrTFcpp8jvXHulgdK4s3HNWlEA5374Ak7o17OPB0LmNr4FMbpusLvjvTX4cV6C-y1bwUewUgwNV21-BjLalc9W7dO_2e8yKpgjFYBGdPmo1N_LUR9O8y323MfidSNnXFviM89nTFDVDszMidZ6BDBUGRDs5kpoDqtZD0zlO"
    },
];

const PopularDestinations = () => {
    return (
        <section className="py-xxl px-gutter max-w-container-max mx-auto">
            <div className="flex justify-between items-center text-center sm:text-left sm:items-end mb-xl flex-col sm:flex-row gap-md">
                <div>
                    <h2 className="font-semibold text-headline-lg text-on-surface mb-xs">Popular Destinations</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">Explore the world&apos;s most sought-after
                        cities.</p>
                </div>
                <button className="text-primary font-label-md flex items-center hover:underline underline-offset-4">View All
                    <ArrowRight /></button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                {destinations.map((destination, index) => (
                    <div key={index} className="group relative h-80 rounded-xl overflow-hidden premium-shadow cursor-pointer">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            data-alt={`A cinematic view of ${destination.name} at twilight, featuring the iconic landmarks glowing in golden light against a deep blue sky. In the foreground, charming architecture and quiet streets are illuminated by warm street lamps. The scene captures the romantic and luxurious essence of ${destination.name} with a soft, dreamy photographic style and deep rich colors.`}
                            style={{ backgroundImage: `url(${destination.image})` }}>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-lg left-lg text-white">
                            <h3 className="font-headline-md text-headline-md">{destination.name}</h3>
                            <p className="font-label-sm text-label-sm opacity-80 uppercase tracking-wider">{destination.hotels}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopularDestinations