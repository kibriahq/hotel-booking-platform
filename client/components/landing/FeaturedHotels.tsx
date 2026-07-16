import { ArrowLeft, ArrowRight, CarFront, Dumbbell, Flower2, MapPin, Star, Utensils, WavesLadder, Wifi } from 'lucide-react';
import React from 'react'

const hotels = [
    {
        id: 1,
        name: "The Ritz Paris",
        location: "Paris, France",
        price: "1,200",
        rating: "5.0",
        features: [{"name": "Free WiFi", "icon": <Wifi size={14}/>}, {"name": "Pool", "icon": <WavesLadder size={14}/>}, {"name": "Gym", "icon": <Dumbbell size={14}/>}],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcwA4cpuVcArplsCyrXn6y-qG5e3R5P-0UBXqWWLd68ReoTTZLw-21YpAWaf99O72k9ofU5_st-TfyGx7-3LEi4z_4OeOI7v2YIJ7YWIAm7hhh7oa7c3L1E1ngqtZFe3ApI4y6NWkEpDvHhYKkB6X0Bqe70K0QhiLARMOjfYoyuCfdHTi3xFWsnbo1fg6M2IG6OMSapEVM8FNzlJ3SFivI0hkI8gouyzjZM-SSr25tiP54PgIe0g9aOb-w5j77svCpwmSjKs5OEEsP",
    },
    {
        id: 2,
        name: "Burj Al Arab",
        location: "Dubai, UAE",
        price: "2,500",
        rating: "4.9",
        features: [{"name": "Spa", "icon": <Flower2 size={14}/>}, {"name": "7 Restaurants", "icon": <Utensils size={14}/>}, {"name": "Valet", "icon": <CarFront size={14}/>}],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTLgUuWYpbxdr534K2b6-Owf42L55N_CK2OuTSPMIJhO3p5s2yamEl5j2ygUMVyfrwwTX7ls2yP6KkEOjz8Vi96KRahBtRqm4d7RDd6xQRbr3x4aWIyqU7peqc2CTnUonu-1X_XgvkYeoW2MVsKLAIY_1ZgfGFWc6dqs__Fq8CfTxOcmMQ-54kZN8A071xAQkjbUxyAnJ0WHY_JmzvWr8L1d1sv-kyAdzHYdsiztifjFoPqK5PrzXzRephnV_yhw6X4KKSJVETs73L",
    },
    {
        id: 3,
        name: "The Peninsula Tokyo",
        location: "Tokyo, Japan",
        price: "980",
        rating: "4.8",
        features: [{"name": "Sky Lounge", "icon": <WavesLadder size={14}/>}, {"name": "Wellness", "icon": <WavesLadder size={14}/>}, {"name": "Concierge", "icon": <MapPin size={14}/>}],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfwHVpZqzhtNKU1YG6GyfJ7EA6OEGRWlSlgBmTM8YedO8GyTayEYsT2qAoce69sMLBphrr_kkpe8roiPZJTcjMYKC3ga5BVoMhIBjO7CtHhkMF3uQRTivaD-gNGwCdt4uQyh-k7XJRs1ACInfM7xl99yQcjNx1EAMGlrQhpBtR-4WPahRGQ9m_eS739jMtsLOADPFNaK7pzbvdTM0jGGMKtQDWlu45gJYxMvl6ayHR4Skhfp86vfLBhtsuN0iSSG-LvGftOHW54tFJ",
    },
];

const FeaturedHotels = () => {
    return (
        <section className="py-xxl px-gutter bg-surface-subtle overflow-hidden">
            <div className="max-w-container-max mx-auto">
                <div className="flex justify-between items-center text-center sm:text-left sm:items-end mb-xl flex-col sm:flex-row gap-md">
                    <div>
                        <h2 className="font-semibold text-headline-lg text-on-surface mb-xs">Featured Luxury Hotels</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Handpicked stays for the discerning
                            traveler.</p>
                    </div>
                    <div className="flex space-x-md">
                        <button
                            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white hover:border-primary hover:text-primary transition-all">
                            <ArrowLeft />
                        </button>
                        <button
                            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white hover:border-primary hover:text-primary transition-all">
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div className="flex space-x-lg overflow-x-auto pb-lg no-scrollbar">
                    { hotels.map((hotel) => (
                        <div key={hotel.id} className="min-w-full sm:min-w-[380px] bg-white rounded-xl overflow-hidden premium-shadow group">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${hotel.image}')` }}>
                                </div>
                                <div
                                    className="absolute top-md right-md bg-white/90 backdrop-blur px-md py-1 rounded-full text-secondary font-label-sm shadow-sm flex items-center gap-1">
                                    <Star size={16} fill='#855300' /> 5.0
                                </div>
                            </div>
                            <div className="p-lg">
                                <div className="flex justify-between items-start mb-sm">
                                    <div>
                                        <h3 className="font-headline-md text-headline-md text-on-surface">{hotel.name}</h3>
                                        <p className="text-on-surface-variant font-label-md flex items-center">
                                            <MapPin size={18} />
                                            {hotel.location}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-primary font-bold text-headline-md">${hotel.price}</p>
                                        <p className="text-text-muted text-label-sm">per night</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-sm mb-xl">
                                    {hotel.features.map((feature, index) => (
                                        <span key={index}
                                            className="bg-surface-container-high px-md py-1 rounded-full text-label-sm text-on-surface-variant flex items-center">
                                            <span className="material-symbols-outlined text-[16px] mr-1">{feature.icon}</span> {feature.name}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className="w-full py-3 rounded-lg border-2 border-primary text-primary font-label-md hover:bg-primary hover:text-on-primary transition-all active:scale-95">View
                                    Details</button>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedHotels