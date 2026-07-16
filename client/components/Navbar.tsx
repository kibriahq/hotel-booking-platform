import React from 'react'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-outline-variant/60 bg-surface-container-lowest/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-gutter py-4">
                <a
                    href="#top"
                    className="font-headline-md text-headline-md font-semibold tracking-tight text-booking-deep-blue"
                >
                    LuxeStay
                </a>
                <div className="hidden items-center gap-xl md:flex">
                    <a className="border-b-2 border-primary pb-1 font-label-md text-label-md text-primary" href="#destinations">
                        Hotels
                    </a>
                    <a className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary" href="#featured">
                        Destinations
                    </a>
                    <a className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary" href="#offers">
                        Offers
                    </a>
                    <a className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary" href="#contact">
                        Contact
                    </a>
                </div>
                <div className="flex items-center gap-md">
                    <button className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary">
                        Login
                    </button>
                    <button className="rounded-full bg-primary px-lg py-2 font-label-md text-label-md text-on-primary shadow-sm transition-transform hover:bg-primary-container active:scale-95">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar