import { Calendar, Edit, Heart, MapPin, Star, Users } from 'lucide-react'
import React from 'react'

export default function Search() {
    return (
        <>
            <div
                className="fixed top-[72px] w-full z-40 bg-surface-container-lowest border-y border-outline-variant/30 py-3 shadow-sm">
                <div
                    className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-md">
                    <div className="flex items-center gap-md text-on-surface">
                        <div className="flex items-center gap-xs">
                            <MapPin className="text-primary" size={18} />
                            <span className="font-label-md text-label-md">Paris, France</span>
                        </div>
                        <span className="text-outline-variant">•</span>
                        <div className="flex items-center gap-xs">
                            <Calendar className="text-primary" size={18} />
                            <span className="font-label-md text-label-md">Sep 12 – Sep 18</span>
                        </div>
                        <span className="text-outline-variant">•</span>
                        <div className="flex items-center gap-xs">
                            <Users className="text-primary" size={18} />
                            <span className="font-label-md text-label-md">2 Guests</span>
                        </div>
                    </div>
                    <button
                        className="flex items-center gap-xs text-primary font-label-md text-label-md border border-primary px-lg py-1.5 rounded-full hover:bg-primary/5 transition-colors">
                        <Edit className="text-primary" size={18} />
                        <span className="">Edit Search</span>
                    </button>
                </div>
            </div>




            <main className="pt-[160px] pb-xxl px-gutter max-w-container-max mx-auto">
                <div className="flex flex-col lg:flex-row gap-xl">
                    {/* Left Sidebar Filters  */}
                    <aside className="w-full lg:w-1/4 space-y-lg">
                        <div className="bg-surface-container-lowest p-lg rounded-2xl shadow-sm border border-outline-variant/20">
                            <h3 className="font-headline-md text-headline-md text-on-surface mb-lg">Filters</h3>
                            {/* Quick Filters  */}
                            <div className="space-y-md pb-lg border-b border-outline-variant/30 mb-lg">
                                <label className="flex items-center gap-md group cursor-pointer">
                                    <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                        type="checkbox" />
                                        <span
                                            className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Free
                                            Cancellation</span>
                                </label>
                                <label className="flex items-center gap-md group cursor-pointer">
                                    <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                        type="checkbox" />
                                        <span
                                            className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Breakfast
                                            Included</span>
                                </label>
                                <label className="flex items-center gap-md group cursor-pointer">
                                    <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                        type="checkbox" />
                                        <span
                                            className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Instant
                                            Confirmation</span>
                                </label>
                            </div>
                            {/* Price Range  */}
                            <div className="mb-lg pb-lg border-b border-outline-variant/30">
                                <h4
                                    className="font-label-md text-label-md text-on-surface font-bold mb-md uppercase tracking-wider">
                                    Price per night</h4>
                                <input
                                    className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                                    max="2000" min="100" step="50" type="range" />
                                    <div className="flex justify-between mt-sm text-label-sm font-label-sm text-text-muted">
                                        <span className="">$100</span>
                                        <span className="">$2,000+</span>
                                    </div>
                            </div>
                            {/* Star Rating  */}
                            <div className="mb-lg pb-lg border-b border-outline-variant/30">
                                <h4
                                    className="font-label-md text-label-md text-on-surface font-bold mb-md uppercase tracking-wider">
                                    Star Rating</h4>
                                <div className="space-y-sm">
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-md">
                                            <input
                                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                                type="checkbox" />
                                                <span className="flex text-secondary-container">
                                                    <Star size={16} fill='#fea619' />
                                                    <Star size={16} fill='#fea619' />
                                                    <Star size={16} fill='#fea619' />
                                                    <Star size={16} fill='#fea619' />
                                                    <Star size={16} fill='#fea619' />
                                                </span>
                                        </div>
                                        <span className="text-label-sm font-label-sm text-text-muted">120</span>
                                    </label>
                                    <label className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-md">
                                            <input
                                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                                type="checkbox" />
                                                <span className="flex text-secondary-container">
                                                    <Star size={16} fill='#fea619' />
                                                    <Star size={16} fill='#fea619' />
                                                    <Star size={16} fill='#fea619' />
                                                    <Star size={16} fill='#fea619' />
                                                </span>
                                        </div>
                                        <span className="text-label-sm font-label-sm text-text-muted">84</span>
                                    </label>
                                </div>
                            </div>
                            {/* Guest Rating  */}
                            <div className="mb-lg pb-lg border-b border-outline-variant/30">
                                <h4
                                    className="font-label-md text-label-md text-on-surface font-bold mb-md uppercase tracking-wider">
                                    Guest Rating</h4>
                                <div className="space-y-sm">
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">9+ Superb</span>
                                    </label>
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">8+ Very Good</span>
                                    </label>
                                </div>
                            </div>
                            {/* Amenities  */}
                            <div className="mb-lg">
                                <h4
                                    className="font-label-md text-label-md text-on-surface font-bold mb-md uppercase tracking-wider">
                                    Amenities</h4>
                                <div className="space-y-sm">
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input checked
                                            className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">Free WiFi</span>
                                    </label>
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">Pool</span>
                                    </label>
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">Breakfast</span>
                                    </label>
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">Parking</span>
                                    </label>
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">Gym</span>
                                    </label>
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">Spa</span>
                                    </label>
                                    <label className="flex items-center gap-md group cursor-pointer">
                                        <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                                            type="checkbox" />
                                            <span className="font-body-md text-body-md text-on-surface-variant">Air Conditioning</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Map Card Placeholder  */}
                        <div className="relative h-48 rounded-2xl overflow-hidden shadow-sm group cursor-pointer">
                            <img alt="Detailed map of Paris" className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Z_eiu_ryPDHfxr6A7D6jsAXn76fX6MdOVjoNNZFw-aqJ2tiMB59OZxMt9h_cWKCMVhB6x-P__eyo55ygwAA0lLtmI6uvQkGXc5Q2ctpwry_zg6U3J7-iBdD6q8A2niJRyZ_J8_H6_ZpfeOfi_CfpF1oI49a0k5qGTKLUPec8SLLBrlIaenwjaVD6ACkBS_fmKZec0oqBnhlM7ZJt_LHpXFCOzcMLoT_LSo5rNeLszRlucGTh_XepgD4ln6gWJ86Dm0lSid_R8AJu" />
                                <div
                                    className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <button
                                        className="bg-surface-container-lowest text-primary font-label-md text-label-md px-lg py-sm rounded-full shadow-lg flex items-center gap-xs">
                                        <span className="material-symbols-outlined">map</span>
                                        Show on Map
                                    </button>
                                </div>
                        </div>
                    </aside>
                    {/* Right Content  */}
                    <section className="w-full lg:w-3/4 space-y-lg">
                        {/* Results Header  */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-md">
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-on-surface">248 hotels found in Paris</h2>
                                <p className="font-body-md text-body-md text-text-muted">Prices and availability are based on your
                                    selected travel dates.</p>
                            </div>
                            <div className="flex items-center gap-sm">
                                <span className="font-label-md text-label-md text-on-surface-variant">Sort by:</span>
                                <select
                                    className="bg-surface-container-lowest border-outline-variant/30 rounded-lg font-label-md text-label-md focus:ring-primary focus:border-primary px-lg py-1.5">
                                    <option>Recommended</option>
                                    <option>Lowest Price</option>
                                    <option>Guest Rating</option>
                                    <option>Distance from Center</option>
                                </select>
                            </div>
                        </div>
                        {/* Hotel Result Cards  */}
                        <div className="space-y-lg">
                            {/* Hotel Card 1  */}
                            <article
                                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20 flex flex-col md:flex-row">
                                <div className="w-full md:w-2/5 relative h-64 md:h-auto"><img alt="Luxury hotel room Paris"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDejCMYiym76BcEwPzV4PTCP-Xwtz2i2GqmYqAYYrtgO_fvHGGgxDwD94CBHAhzBq0nyIqrVYkLKC43PszABpyS9c-AtudCVseH5TFfyRYp-hol2dl_t8sFfBYWmQ-3LU2lxDHv_zy3rClPPObKyYp8w0zBhmrutwBsR8qmg7mmPOP9Qlfj4wpJL6Dy1iw3YDus_GDMA6PZTxh9ZIBNvXD9Y54ojsVgCxUVOjqlgJfhCmz3XzLETLVjgbC8mVRE5X_PZS0tcckmV0Yd" /><button
                                        className="absolute top-md right-md p-sm bg-white/80 backdrop-blur shadow-sm rounded-full text-primary hover:bg-white transition-colors">
                                            <Heart />
                                        </button>
                                    <div className="absolute bottom-md left-md flex flex-wrap gap-xs"><span
                                        className="bg-primary text-on-primary text-label-sm font-label-sm px-md py-1 rounded-full">Best
                                        Value</span><span
                                            className="bg-surface-container-lowest/90 text-primary text-label-sm font-label-sm px-md py-1 rounded-full backdrop-blur-sm">Free
                                            Cancellation</span></div>
                                </div>
                                <div className="flex-1 p-lg flex flex-col justify-between">
                                    <div className="space-y-sm">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-sm mb-1">
                                                    <h3 className="font-headline-md text-headline-md text-on-surface">Hôtel de
                                                        Lumière</h3>
                                                    <div className="flex text-secondary-container">
                                                        <Star size={16} fill='#fea619' />
                                                        <Star size={16} fill='#fea619' />
                                                        <Star size={16} fill='#fea619' />
                                                        <Star size={16} fill='#fea619' />
                                                        <Star size={16} fill='#fea619' />
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-xs text-on-surface-variant mb-2">
                                                    <MapPin size={16} />
                                                    <span className="text-label-md">Paris, France</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div
                                                    className="bg-primary/10 text-primary px-sm py-1 rounded-lg font-bold text-label-md">
                                                    9.4 Superb</div>
                                                <div className="text-label-sm text-text-muted mt-1">1,420 reviews</div>
                                            </div>
                                        </div>
                                        <p className="text-body-md text-on-surface-variant line-clamp-2">Experience unparalleled
                                            luxury in the heart of Paris with breathtaking views of the Eiffel Tower and
                                            world-class service.</p>
                                        <div className="flex gap-md py-2"><span
                                            className="material-symbols-outlined text-on-surface-variant"
                                            title="Free WiFi">wifi</span><span
                                                className="material-symbols-outlined text-on-surface-variant"
                                                title="Pool">pool</span><span
                                                    className="material-symbols-outlined text-on-surface-variant"
                                                    title="Gym">fitness_center</span></div>
                                    </div>
                                    <div className="mt-lg pt-lg border-t border-outline-variant/20">
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-1">
                                                <div className="text-label-sm text-text-muted">Starting from</div>
                                                <div className="text-headline-md font-bold text-on-surface">$450 <span
                                                    className="text-label-md font-normal">/ night</span></div>
                                                <div className="text-label-sm text-primary font-medium">3 room types available for
                                                    your selected dates</div>
                                            </div><button
                                                className="bg-primary text-on-primary px-xl py-3 rounded-lg font-label-md hover:shadow-md transition-all active:scale-95">View
                                                Hotel</button>
                                        </div>
                                        <p className="text-label-sm text-text-muted mt-md italic">Prices and availability are based
                                            on your selected travel dates.</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
