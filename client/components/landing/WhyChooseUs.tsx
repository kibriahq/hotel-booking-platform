import { HeartPlus, LockKeyhole, ShieldCheck, Ticket } from 'lucide-react'
import React from 'react'

const features = [
    {
        icon: ShieldCheck,
        title: "Best Price Guarantee",
        description: "Find a lower price elsewhere and we&apos;ll match it plus an extra 10% discount."
    },
    {
        icon: LockKeyhole,
        title: "Secure Booking",
        description: "Your data is protected by the latest industry-standard encryption protocols."
    },
    {
        icon: HeartPlus,
        title: "24/7 Support",
        description: "Our luxury concierge team is available around the clock for any request."
    },
    {
        icon: Ticket,
        title: "Free Cancellation",
        description: "Flexible plans that allow you to cancel with no fees on most bookings."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-xxl px-gutter max-w-container-max mx-auto text-center">
            <h2 className="font-semibold text-headline-lg mb-xxl">Why Choose LuxeStay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
                
                {features.map((feature, index) => (
                    <div
                        className="p-lg rounded-xl transition-all duration-300 hover:bg-white hover:premium-shadow flex flex-col items-center"
                        key={index}
                    >
                        <div
                            className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-lg">
                            <feature.icon />
                        </div>
                        <h3 className="font-semibold text-headline-md mb-sm">{feature.title}</h3>
                        <p className="text-on-surface-variant font-body-md">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs