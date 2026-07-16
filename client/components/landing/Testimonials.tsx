import { Star } from 'lucide-react';
import React from 'react'

const reviews = [
    {
        name: "Sarah Jenkins",
        title: "Travel Blogger",
        rating: 5,
        review: "The booking process was seamless, and the Ritz Paris recommendation exceeded all expectations. True luxury in the heart of the city.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5miVzveP2McL6dt-xyPqL3sb2z5YntxoXIbS67tG2hHbO2T1yv6lPy75Q99GB8bN7X7S7_x64WbmwGKIXCPTl-zfdnJuJlPzrmg64HO3MU8oRkkfJRWAS-MjXEvUQwgb7MkCsjl1U3sBTEai-IN1In8xvWNy4gvm4BhX5VU45XwQcma1tvYB9nDiVDB_iDBsmzDf022HBFiYHtMAfdWQr1XCv0MInQ-sggZ8yMT2Vqf5Y6Knc_xuLn0vitwu_KX0JQr0njXpptIA3"
    },
    {
        name: "Michael Thompson",
        title: "Business Traveler",
        rating: 5,
        review: "Outstanding service and attention to detail made our business trip unforgettable. The hotel's location and amenities exceeded our expectations.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4wYWvLgd2bseHcfOI0J22JD37qFkN4S1Z4Pn_1KUhrkUALWgpKUnyoucvqiRfWbUc0ox2uMU-VDPKlcuTg8nBjUg84EYg_Tgt5qmICvzEsD9I6yvNVsSeAZWBGOWrOsLTRDmApylrbbX4cR2RwS0W3RSzF3ySgjXtNMwuNQN-En387XlEbLUEYjJnZkg9U6wP4915OpyuCG_ieoBLTIqnkFC0kQ2Yn29PzFCo91SHfcwD56FLy5NwphVaFT-VXMiFcSDNtATXhVKM"
    },
    {
        name: "Emily Rodriguez",
        title: "Luxury Travel Consultant",
        rating: 5,
        review: "LuxeStay's curated selection of hotels is unparalleled. The attention to detail and personalized service made our stay truly exceptional.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa_xTwIHD_R0tuxuQWQxiQEPcIQvXXhHkHFrqpRRyg7qxoCdBUUGAVy2qQBOwN_h0E-a05Fk8fOuLHqRWylcmSwsbq19tNwah2HlK4iz4gWL2BGXsWVsKtPvb5pG6XSwkDN4IXrDiyo5MOXh7DaTOoddywmhNhllfTROD-dgFseHRL9vfCPetT5w_QuqSYZN2nmV4xpTzaUvw3he0aBBYspNOJs9zIXa31r1qAfSUz524YoutrpOnc4pVXuXPa5hxA4C_UlV_9Hn4u"
    }
];

const Testimonials = () => {
    return (
        <section className="py-xxl px-gutter bg-surface-container">
            <div className="max-w-container-max mx-auto">
                <div className="text-center mb-xl">
                    <h2 className="font-semibold text-headline-lg mb-xs">What Our Guests Say</h2>
                    <p className="text-on-surface-variant">Exceptional experiences told by world travelers.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-xl rounded-xl premium-shadow">
                            <div className="flex text-secondary mb-md">
                                <Star size={16} fill='#855300' />
                                <Star size={16} fill='#855300' />
                                <Star size={16} fill='#855300' />
                                <Star size={16} fill='#855300' />
                                <Star size={16} fill='#855300' />
                            </div>
                            <p className="text-on-surface-variant font-body-md italic mb-xl">&quot;{review.review}&quot;</p>
                            <div className="flex items-center">
                                <img className="w-12 h-12 rounded-full object-cover mr-md" src={review.image} alt={review.author} />
                                <div>
                                    <h4 className="font-semibold text-label-md">{review.name}</h4>
                                    <p className="text-text-muted text-label-sm">{review.title}</p>
                                </div>
                            </div>
                        </div >
                    ))}
                </div >
            </div >
        </section >
    )
}

export default Testimonials