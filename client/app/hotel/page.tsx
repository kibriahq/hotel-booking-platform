import { MapPin, Star, Search, SlidersHorizontal, ZoomIn, Share, Heart, LogIn, LogOut, Wifi, Waves, Dumbbell, Sparkles, Utensils, CircleParking, Eye, Ruler, Building2, CheckCircle, Navigation, Lock } from 'lucide-react'
import React from 'react'

export default function Hotel() {
    return (
        <>
            <div
                className="sticky top-[72px] z-40 bg-surface-container-lowest/90 backdrop-blur-md py-3 shadow-sm border-t border-outline-variant/30">
                <div className="max-w-container-max mx-auto px-gutter flex flex-wrap items-center justify-between gap-md">
                    <div
                        className="flex items-center gap-md bg-surface-container-low px-lg py-2 rounded-full border border-outline-variant shadow-sm flex-1 max-w-2xl cursor-pointer hover:bg-surface-container transition-colors">
                        <Search className="text-primary" />
                        <div className="flex flex-col">
                            <span className="text-label-sm font-bold">Paris, France</span>
                            <span className="text-label-sm text-on-surface-variant">Sep 12 - Sep 18 • 2 Guests</span>
                        </div>
                    </div>
                    <button
                        className="md:flex hidden items-center gap-sm px-lg py-2 rounded-full border border-outline text-label-md font-bold hover:bg-surface-container-low transition-all">
                        <SlidersHorizontal />
                        Modify Search
                    </button>
                </div>
            </div>



            <main className="max-w-container-max mx-auto px-gutter pt-xl pb-xxl">
                {/* Hero Section & Gallery  */}
                <section className="grid grid-cols-1 lg:grid-cols-4 gap-md mb-xl">
                    <div className="lg:col-span-2 relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-alt="A grand luxury hotel suite in Paris with high ceilings, ornate white crown molding, and large floor-to-ceiling windows. Through the windows, a breathtaking, unobstructed view of the Eiffel Tower rises above the Haussmann-style architecture. The room is bathed in golden hour sunlight, featuring a plush king-sized bed with white silk linens and deep navy velvet accents. The aesthetic is contemporary Parisian luxury with warm wood flooring and a minimalist crystal chandelier."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZVfP-5xc9NHrXQhrfgj3V57Zl8WrQQ2qxI5k7QFC-_yQT2Pvh8-Rog2_iHZLsiS49mibfr7rLIGq5xGfPZTfzIfau55cAa2kWJNr2Oxdtk4DE3DA1b-tknF6Fv-JX5R_pkw6NVoJE1zbzf4OFGppfydnhOPH7H2PrMCQTWb5rIrA0ZPer4Cw1wkce3dX3ojkp8Na4Ev8Z5hiJm_I3sB4ghlPaluUezgtuanhnaFFt28IgAS7fXo87ck5IDT5G0m4bG6kyBE1uMkyR" />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-lg">
                            <span className="text-white font-label-md flex items-center gap-sm"><ZoomIn /> View Image</span>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-md h-full">
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                data-alt="An elegant hotel bathroom featuring white Calacatta marble walls and flooring, a standalone deep soaking porcelain tub, and gold-finished fixtures. Large windows overlook a charming Parisian street with limestone buildings. The lighting is soft and natural, emphasizing a clean, spa-like atmosphere. The color palette consists of pristine whites, subtle gray veining, and warm metallic accents."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkjIDpe_OzXmX2FrPihnMnEwAiSxOoMaFm25diYcfGcrHqu-_TNlAlQy9kQAOSwm3Qr6AVxZaBEbvaBZRD78f7EWTMbiGUTUd99CAt4RWUMa5FE55QBxciqsMN60r6NbiIX2b64ssBEwSHwiajzkXWcJv-_2O-XKmVsmJeFcKXu-eOt5oIY1JDjs_E-YQBtL-_KonLixDkNgQT-dkraL2pY3GLW5cN8GuZe7iu7pDtAYg3wNXh1B0sWC-TUpBnME8PVpHat1lppuu_" />
                        </div>
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                data-alt="A sophisticated fine-dining restaurant within a luxury Parisian hotel. The room features dark wood paneling, velvet sapphire blue armchairs, and tables set with crisp white linens and polished silverware. Large arched windows offer a view of a lush interior courtyard garden. The mood is intimate and upscale, with warm ambient lighting from Art Deco sconces."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcGjzkodos4L9C6p6kOlmSd8vviR5CeyATnVXVpc64EhyPqhXU_hq11y3cb1D-0deoy99M5yF3ZpvbholGT8aES6zmTVNXm5aT7eZXMU28TPSZQ2jvk3SmU6zv1L73Yy3GAu-i6QIrjyfWxplUcm3-e9csb0pb2pWxloB4Gm7NtrGoA2yk9mI8t4yuISY6KBOwnDdIiyPxwZQrn9Vb9OpPQAiUHwfmaxvrZjXwBkROrre8qDRtJH4WYUEJTK16iR65CZYsGV01UYeW" />
                        </div>
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                data-alt="An indoor heated infinity pool in a luxury Paris hotel. The walls are lined with sleek dark slate tiles, and the ceiling features a minimalist geometric design with recessed LED lighting. Large glass doors lead to a sunlit terrace. The water is crystalline and still, reflecting the modern architectural lines of the space. The atmosphere is serene and exclusive."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAMyy-kJ1sRHYvC7dSv5_S_ft6r0Yq_NrRqq9ktkPe-g7TT94gFSV3l1X4zmH-35Ij3icGcIdCE_28lv_e7Vzz1kjeGtHow0yG_kKOR-QaH5FD5qWmRF0PkPiZpfDXnBJfNYZ2ysbum4F5ToICirFHtvHsWIMg_ZIOj2B7DRt9CPkkFsaiJmObBrbIMPeJzaXkGSXWIlol3hRhQ_mQPJlHkUsGWLf6i3lrp1zrzYc2SoQEmNG70WX2XT1TA9jVlAZX2zy3cMTmhnki" />
                        </div>
                        <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                data-alt="A charming private balcony of a Parisian luxury hotel at dusk. Two classic wrought-iron chairs and a small round table with a bottle of champagne are set against a backdrop of twinkling city lights and the illuminated Eiffel Tower. The sky is a deep twilight blue with streaks of orange. The vibe is romantic and exceptionally premium."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATBNyc8xl0EMI2onu5LpiVFSmb2EhYNZbEszhV23T4FB_ncUVkew_d2lqYaInQfCuCz8IRO8M23rrtGytbch_L8XDgz8MJJhWpiFuU4x_Jiuo40g1dT043C3nCFWnLTaaD0GbY13qzaaaSC7RBsZqFzU5A9YiujXLtwQBq_3Ci0Y3C4NOF5ZdhAutA-qCtMA8_N7_TvbHvLzS7sDAPP3et4V5fsHvAdP8TCCG420KVXVscCrQXKwHD96FjuxooCU3O6mWi7JhZteiQ" />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold">
                                <span className="font-label-md">+24 Photos</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Header Info  */}
                <section className="flex flex-col lg:flex-row justify-between items-start gap-lg mb-xl">
                    <div className="flex-1">
                        <div className="flex items-center gap-sm mb-xs">
                            <Star size={16} fill='#fea619' />
                            <Star size={16} fill='#fea619' />
                            <Star size={16} fill='#fea619' />
                            <Star size={16} fill='#fea619' />
                            <Star size={16} fill='#fea619' />
                        </div>
                        <h1
                            className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-sm">
                            Hôtel de Lumière</h1>
                        <p className="flex items-center gap-xs text-on-surface-variant font-body-md mb-md">
                            <MapPin className="text-primary" />
                            8 Avenue de la Bourdonnais, 7th Arr., 75007 Paris, France
                        </p>
                        <div className="flex items-center gap-md">
                            <div className="flex items-center gap-sm bg-primary-container/10 px-md py-2 rounded-lg">
                                <span className="bg-primary text-on-primary font-bold px-sm py-xs rounded text-label-md">9.4</span>
                                <div className="flex flex-col">
                                    <span className="font-bold text-label-md">Superb</span>
                                    <span className="text-label-sm text-on-surface-variant">1,420 reviews</span>
                                </div>
                            </div>
                            <button
                                className="flex items-center gap-sm text-primary font-bold hover:underline underline-offset-4 transition-all">
                                <Share />
                                Share
                            </button>
                            <button
                                className="flex items-center gap-sm text-primary font-bold hover:underline underline-offset-4 transition-all">
                                <Heart />
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto flex flex-col items-end">
                        <span className="text-label-sm text-on-surface-variant">Starting from</span>
                        <div className="flex items-baseline gap-xs">
                            <span className="font-display-lg text-primary">$450</span>
                            <span className="text-on-surface-variant font-body-md">/ night</span>
                        </div>
                        <a className="mt-md px-xxl py-4 bg-primary text-on-primary rounded-xl font-bold hover:shadow-lg active:scale-95 transition-all text-center w-full"
                            href="#rooms">See Availability</a>
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
                    {/* Main Content Area  */}
                    <div className="lg:col-span-2 space-y-xl">
                        {/* Overview  */}
                        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/30">
                            <h2 className="font-headline-md mb-md">Property Overview</h2>
                            <p className="text-on-surface-variant font-body-md leading-relaxed mb-lg">
                                Experience the epitome of Parisian luxury at Hôtel de Lumière. Nestled in the heart of the
                                prestigious 7th Arrondissement, our property offers unparalleled views of the Eiffel Tower and a
                                refined atmosphere that blends historic elegance with contemporary comfort. Each suite is
                                meticulously designed to provide a sanctuary of calm amidst the vibrant energy of the City of
                                Light.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg border-t border-outline-variant pt-lg">
                                <div className="flex gap-md">
                                    <LogIn className="text-primary" />
                                    <div>
                                        <h4 className="font-bold text-label-md">Check-in</h4>
                                        <p className="text-on-surface-variant text-label-md">From 3:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex gap-md">
                                    <LogOut className="text-primary" />
                                    <div>
                                        <h4 className="font-bold text-label-md">Check-out</h4>
                                        <p className="text-on-surface-variant text-label-md">Until 12:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Amenities  */}
                        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/30"
                            id="amenities">
                            <h2 className="font-headline-md mb-md">Popular Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
                                <div className="flex items-center gap-md">
                                    <Wifi className="text-on-surface-variant" />
                                    <span className="text-body-md">Free High-speed WiFi</span>
                                </div>
                                <div className="flex items-center gap-md">
                                    <Waves className="text-on-surface-variant" />
                                    <span className="text-body-md">Indoor Heated Pool</span>
                                </div>
                                <div className="flex items-center gap-md">
                                    <Dumbbell className="text-on-surface-variant" />
                                    <span className="text-body-md">24/7 Fitness Center</span>
                                </div>
                                <div className="flex items-center gap-md">
                                    <Sparkles className="text-on-surface-variant" />
                                    <span className="text-body-md">Luxury Spa &amp; Wellness</span>
                                </div>
                                <div className="flex items-center gap-md">
                                    <Utensils className="text-on-surface-variant" />
                                    <span className="text-body-md">Michelin-starred Dining</span>
                                </div>
                                <div className="flex items-center gap-md">
                                    <CircleParking className="text-on-surface-variant" />
                                    <span className="text-body-md">Valet Parking</span>
                                </div>
                            </div>
                            <button className="mt-xl text-primary font-bold hover:underline underline-offset-4">Show all 42
                                amenities</button>
                        </div>
                        {/* Room Types  */}
                        <div className="space-y-lg" id="rooms">
                            <h2 className="font-headline-md">Available Room Types</h2>
                            {/* Room 1  */}
                            <div
                                className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-1/3 relative">
                                    <img className="h-full w-full object-cover"
                                        data-alt="A luxurious Deluxe King Room at Hôtel de Lumière. The room features a plush king-sized bed with crisp white linens and a beige upholstered headboard. Large windows offer a stunning view of the Parisian city skyline at sunrise. Minimalist modern furniture in light oak and soft neutral tones creates a serene environment. 35 square meters of elegant space."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPmpecsnsb7zWeGtM-iUb-X4hYy95DvouXVuWGkQixUtJ0f3pAAnq-km_8kEvCIZijbXV_yn04X93Uun8C7ZpsyejmoBUDSaro58fqD9svyMPCJF9xz_uKxIo-aogLmTU3sc8s9DTRsPamMd1yvQaMR_L6Px2kx10EvfPK9TdgEzO3Sy3fbIhB6xr7wRnOMM0RtVaK6jS6EOF7NAP5cDtaZsN3OXeTWqfO_mMp9RjYsHzhi8Yj01Fn9rIT0CAu6ZMCjJZFCPauw2ts" />
                                    <div
                                        className="absolute top-md left-md bg-booking-deep-blue text-white px-md py-1 rounded-full text-label-sm font-bold shadow-md">
                                        Recommended</div>
                                </div>
                                <div className="flex-1 p-lg flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-sm">
                                            <h3 className="font-headline-md">Deluxe King Room</h3>
                                            <div className="text-right">
                                                <div className="text-display-lg-mobile font-bold text-primary">$450</div>
                                                <div className="text-label-sm text-on-surface-variant">per night</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-sm mb-lg">
                                            <div className="flex items-center gap-xs text-on-surface-variant text-label-md">
                                                <Eye className="text-sm" /> City view
                                            </div>
                                            <div className="flex items-center gap-xs text-on-surface-variant text-label-md">
                                                <Ruler className="text-sm" /> 35m²
                                            </div>
                                            <div
                                                className="flex items-center gap-xs text-secondary font-bold text-label-md col-span-2">
                                                <Utensils className="text-sm" /> Breakfast included
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-md items-center">
                                        <button
                                            className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold hover:bg-primary/90 transition-all active:scale-95">Reserve
                                            Now</button>
                                        <button
                                            className="w-full border border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary/5 transition-all active:scale-95">Room
                                            Photos</button>
                                    </div>
                                    <p className="mt-sm text-right text-label-sm text-on-surface-variant">$2,700 total for 6 nights
                                    </p>
                                </div>
                            </div>
                            {/* Room 2  */}
                            <div
                                className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-1/3 relative">
                                    <img className="h-full w-full object-cover"
                                        data-alt="A luxurious Junior Suite with a private balcony at a high-end Paris hotel. The suite includes a spacious sitting area with designer armchairs and a marble coffee table. The open doors lead to a wrought-iron balcony with a direct, majestic view of the Eiffel Tower. High ceilings, decorative plasterwork, and a palette of muted golds and creams define the room's elegant vibe. 50 square meters."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUlylKgD8q4GL45rG-wJ_NAi2a3F-KfWpelBHGfs5VUGFa7-Yhc-4prQaTrxyKzyfkkTdj79MQbFzn5D7mpt4wIwdYRKK6CselkuU4H3GieYJPBewqxvXjwQ_OKUFEdTPQDfrAqUeLO9kEErYFTQ3vgY1MCb6ubOPoSFr4IZ2A2Lrjk_WZm6q2su_JKWpMUPTh7bHUztw4voZ8JSm5Bq-kAR1g6N4kYTDYBkRsCux8uOfuD_gRdohHZQpC1blHmKubig-T0l_sLvE" />
                                    <div
                                        className="absolute top-md left-md bg-error text-white px-md py-1 rounded-full text-label-sm font-bold shadow-md">
                                        Only 2 rooms left</div>
                                </div>
                                <div className="flex-1 p-lg flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-sm">
                                            <h3 className="font-headline-md">Junior Suite with Balcony</h3>
                                            <div className="text-right">
                                                <div className="text-display-lg-mobile font-bold text-primary">$650</div>
                                                <div className="text-label-sm text-on-surface-variant">per night</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-sm mb-lg">
                                            <div className="flex items-center gap-xs text-on-surface-variant text-label-md">
                                                <Building2 className="text-sm" /> Eiffel Tower view
                                            </div>
                                            <div className="flex items-center gap-xs text-on-surface-variant text-label-md">
                                                <Ruler className="text-sm" /> 50m²
                                            </div>
                                            <div
                                                className="flex items-center gap-xs text-success font-bold text-label-md col-span-2 text-green-600">
                                                <CheckCircle className="text-sm" /> Free cancellation
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-md items-center">
                                        <button
                                            className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold hover:bg-primary/90 transition-all active:scale-95">Reserve
                                            Now</button>
                                        <button
                                            className="w-full border border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary/5 transition-all active:scale-95">Room
                                            Photos</button>
                                    </div>
                                    <p className="mt-sm text-right text-label-sm text-on-surface-variant">$3,900 total for 6 nights
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Reviews  */}
                        <div className="bg-surface-container-lowest p-lg rounded-xl shadow-sm border border-outline-variant/30">
                            <h2 className="font-headline-md mb-xl">Guest Reviews</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl">
                                <div className="space-y-md">
                                    <div className="flex flex-col">
                                        <div className="flex justify-between mb-xs">
                                            <span className="text-label-md">Cleanliness</span>
                                            <span className="font-bold">9.8</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full w-[98%]"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex justify-between mb-xs">
                                            <span className="text-label-md">Location</span>
                                            <span className="font-bold">9.9</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full w-[99%]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-md">
                                    <div className="flex flex-col">
                                        <div className="flex justify-between mb-xs">
                                            <span className="text-label-md">Service</span>
                                            <span className="font-bold">9.5</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full w-[95%]"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex justify-between mb-xs">
                                            <span className="text-label-md">Value for Money</span>
                                            <span className="font-bold">8.9</span>
                                        </div>
                                        <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full w-[89%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single Review Example  */}
                            <div className="border-t border-outline-variant pt-lg space-y-lg">
                                <div className="flex gap-lg">
                                    <div
                                        className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed shrink-0">
                                        JD</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-sm">
                                            <div>
                                                <h4 className="font-bold">John Doe</h4>
                                                <p className="text-label-sm text-on-surface-variant">Stayed in Sept 2023</p>
                                            </div>
                                            <div className="bg-primary-container/20 px-sm py-xs rounded font-bold text-primary">10.0
                                            </div>
                                        </div>
                                        <p className="text-body-md text-on-surface-variant">"The views were absolutely breathtaking.
                                            Waking up to the Eiffel Tower every morning was a dream come true. The staff was
                                            incredibly attentive and the breakfast was superb."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Location Map  */}
                        <div
                            className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
                            <div className="p-lg">
                                <h2 className="font-headline-md mb-md">Location</h2>
                                <p className="text-on-surface-variant font-body-md flex items-center gap-sm mb-lg">
                                    <Navigation className="text-primary" />
                                    8 Avenue de la Bourdonnais, 75007 Paris. Excellent location - 5 min walk to Eiffel Tower.
                                </p>
                            </div>
                            <div className="h-80 w-full bg-surface-container relative">
                                <div className="absolute inset-0 bg-cover bg-center"
                                    data-alt="A clean, minimalist map centered on the 7th Arrondissement of Paris, France. Highlighting the location of Hôtel de Lumière with a prominent blue pin, very close to the Champ de Mars and the Eiffel Tower. The map features soft pastel colors for parks and buildings, with key landmarks clearly labeled in an elegant font. Modern UI map design."
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoD0nMNmDiqrTFlVhmtrYdMT2LcMj4Z4i6D16GJKmPA94rmYG7fr34mDkvH62EBOahd-NeKwlpXgzkjDZlHVdsyedsThVQtg6-MW_LstYd2tnRiELbK7LwvtH4PBJ9NJgMpkM5uvPmIjslwPLhFLxwWJhM9mRqlPsJ9aW1bYq-6KEciCGyYRm5i1ul53tvqJZaH7XaDQ-2dydVl6ldNH10snlDxCXNk5_u3xEVxFZ3AMOZi1uJ_yY-fGmFAFPSU9auA3WVdHIfhlcc')" }} />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="bg-white px-lg py-md rounded-xl shadow-xl flex items-center gap-md border border-outline-variant">
                                    <MapPin size={24} fill='#d32f2f' />
                                    <div>
                                        <p className="font-bold text-label-md">Hôtel de Lumière</p>
                                        <p className="text-label-sm text-on-surface-variant">Open in Maps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sticky Booking Summary  */}
                <div className="lg:col-span-1">
                    <aside
                        className="sticky top-40 bg-surface-container-lowest p-lg rounded-xl shadow-lg border border-outline-variant/40 space-y-lg">
                        <h3 className="font-headline-md">Your Booking</h3>
                        <div className="space-y-md border-b border-outline-variant pb-lg">
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Dates</span>
                                <span className="font-bold">Sep 12 - Sep 18</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Stay Duration</span>
                                <span className="font-bold">6 Nights</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Guests</span>
                                <span className="font-bold">2 Adults</span>
                            </div>
                        </div>
                        <div className="space-y-md pt-md pb-md">
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">$450 x 6 nights</span>
                                <span className="font-bold">$2,700.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Service fee</span>
                                <span className="font-bold">$124.50</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-on-surface-variant">Taxes &amp; Fees</span>
                                <span className="font-bold">$218.00</span>
                            </div>
                        </div>
                        <div className="border-t border-outline-variant pt-lg flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="font-headline-md">Total</span>
                                <span className="text-label-sm text-on-surface-variant">Inc. all taxes</span>
                            </div>
                            <div className="text-display-lg-mobile font-bold text-primary">$3,042.50</div>
                        </div>
                        <button
                            className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-headline-md shadow-md hover:shadow-xl hover:bg-primary/95 transition-all active:scale-95">
                            Complete Booking
                        </button>
                        <div className="flex items-center gap-md justify-center py-2 text-label-sm text-on-surface-variant">
                            <Lock className="text-green-600" />
                            Secure payment process
                        </div>
                    </aside>
                </div>
                {/* </div> */}
                {/* Similar Hotels  */}
                <section className="mt-xxl">
                    <h2 className="font-headline-md mb-xl">Similar Hotels You Might Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
                        {/* Card 1  */}
                        <div
                            className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30 group cursor-pointer">
                            <div className="h-48 relative overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    data-alt="A classic grand hotel facade in Paris with limestone walls and gray slate roofs. Balconies with black wrought iron railings are adorned with red geraniums. The street is lined with trees and warm streetlights at dusk. 5-star premium aesthetic."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC73vefvstHEm1mc9dtDPPzm_Q-mhu8E5QL6ItOMdLJ5J7OE26UX2rHZLcJPW55fq187ltV2ygvMPvi8xUIyC89emjHavnQ38J6RTs0kEswhjTZjFSfCJXI1QHNK0MGeU0DqSHPYqJvExiUeE-uphrtwF_rasMZ0e_Rzrp8ioINy_EWPTmuocyUAgbZQdlwxl0Z16rpg0Yv1FtMJ4KYq2kaj30MgdQpUAYjNaC07ErjZ_BkvkyzWQw5VYJBunsbYP-uYMelbJeW9LTy" />
                            </div>
                            <div className="p-md">
                                <h4 className="font-bold text-label-md mb-xs truncate">Grand Palais Paris</h4>
                                <div className="flex items-center gap-xs mb-md">
                                    <span className="bg-primary px-xs py-[2px] rounded text-[10px] text-white font-bold">9.1</span>
                                    <span className="text-label-sm text-on-surface-variant">Superb • 840 reviews</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="text-primary font-bold text-label-md">$410/night</div>
                                </div>
                            </div>
                        </div>
                        {/* Card 2  */}
                        <div
                            className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30 group cursor-pointer">
                            <div className="h-48 relative overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    data-alt="A boutique luxury hotel interior in the Marais district of Paris. Modern eclectic furniture, colorful art on the walls, and a cozy courtyard view through leaded glass windows. Sophisticated, artsy, and premium."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqjaU2yBwwtptdw4cbVM-nb6BSgJhXkqZCwCFUB7OJRkM86yMsVmTgq1-vwIkU_WPIjwBj6xcbIBDAe61mOUb5QCYp5i1r6d8519KHbpwTDSnOdQezS4ZI8CbktBNVpoKc83an89g4wCYRD9gFzmWZ5aNQBw1zxQyW2VzYfrLO47p3S939WSGQyhEO6z86z_F7wXZBXGeOHip_I2xUukw9KVurf53wtL0YC6DD31C4EdDVssluASWAifmOgex8cB3eyG5FE9hGGcAt" />
                            </div>
                            <div className="p-md">
                                <h4 className="font-bold text-label-md mb-xs truncate">L'Art de Vivre Boutique</h4>
                                <div className="flex items-center gap-xs mb-md">
                                    <span className="bg-primary px-xs py-[2px] rounded text-[10px] text-white font-bold">9.5</span>
                                    <span className="text-label-sm text-on-surface-variant">Exceptional • 420 reviews</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="text-primary font-bold text-label-md">$520/night</div>
                                </div>
                            </div>
                        </div>
                        {/* Card 3  */}
                        <div
                            className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30 group cursor-pointer">
                            <div className="h-48 relative overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    data-alt="A modern glass-walled hotel penthouse overlooking the River Seine in Paris. The interior is ultra-minimalist with polished concrete floors and designer lighting. The view shows the river and historic bridges at night."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrrJz0W-QKqYhCVYwPmy2XCgmI15PqJnawJhw-xbTDUiGmsBePBiSjaDWZuqCwVMqDwa2YKZxxWyUUo6_UyDM9rFXRjf-LCz-1qO2i3qWQhufgh8lzHhA_Th5hPvgvuk2Ale72B63deQfVZcr6QWgrr4w5YtOxvQiAjl5Etps7pdA_6Or24pdHmpuzkVOMjgr5VVT0Nq1UPGwf7dHtBlvxzRxc5g2HQjkCtTKfFK9_MW9O8eUgrm1-zq4mGZ42w5AF16unKQUNulAJ" />
                            </div>
                            <div className="p-md">
                                <h4 className="font-bold text-label-md mb-xs truncate">Seine Modern Suites</h4>
                                <div className="flex items-center gap-xs mb-md">
                                    <span className="bg-primary px-xs py-[2px] rounded text-[10px] text-white font-bold">8.8</span>
                                    <span className="text-label-sm text-on-surface-variant">Excellent • 1.1k reviews</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="text-primary font-bold text-label-md">$380/night</div>
                                </div>
                            </div>
                        </div>
                        {/* Card 4  */}
                        <div
                            className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/30 group cursor-pointer">
                            <div className="h-48 relative overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    data-alt="A historic chateau-style hotel lobby in Paris with massive crystal chandeliers, red velvet carpets, and a grand marble staircase. The atmosphere is traditional French luxury and opulence."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgVX8iWTnqtv8u7BvHfA47DbcSWYVeH14rShd7ig6JmjQJe_--kGuZs9ibt1sIPnLEtJiCNSbD8fSfQi_cWFci_yoQxFO4Eu43uGnuPOKYbacGhRueD-nnxEI28xzTZ-YdbwTkZbMurDsTrknmtD5UTEtKB-vObCIWsdiJ-uG9gj-o6HMEIzS_dd1eea-pDYAygfx-BCEfUB5lga_42eyW2j2b2HFZYLPe3KDcidVYV1zcGgMO5p8dM9fR-OAbUx-ntOUEopQ-7-Xe" />
                            </div>
                            <div className="p-md">
                                <h4 className="font-bold text-label-md mb-xs truncate">Château Montmartre</h4>
                                <div className="flex items-center gap-xs mb-md">
                                    <span className="bg-primary px-xs py-[2px] rounded text-[10px] text-white font-bold">9.2</span>
                                    <span className="text-label-sm text-on-surface-variant">Superb • 950 reviews</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="text-primary font-bold text-label-md">$465/night</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
