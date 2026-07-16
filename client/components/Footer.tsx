import { Aperture, Globe, Share2 } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer
            className="bg-surface-container-high dark:bg-inverse-surface w-full pt-xxl pb-lg border-t border-outline-variant dark:border-outline">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-xl px-gutter max-w-container-max mx-auto">
                <div className="space-y-md">
                    <div
                        className="text-headline-md font-headline-md font-bold text-booking-deep-blue dark:text-primary-fixed-dim">
                        LuxeStay</div>
                    <p className="text-on-surface-variant dark:text-surface-variant font-body-md">Redefining luxury travel
                        booking through curation, technology, and exceptional service. Your gateway to the world&apos;s most
                        exquisite stays.</p>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-lg">Navigation</h4>
                    <ul className="space-y-sm">
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">Hotels</a></li>
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">Destinations</a></li>
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">Special Offers</a></li>
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">Loyalty Program</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-lg">Company</h4>
                    <ul className="space-y-sm">
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">About Us</a></li>
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">Contact</a></li>
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">Support</a></li>
                        <li><a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline underline-offset-4 transition-all duration-200"
                            href="#">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-on-surface mb-lg">Social</h4>
                    <div className="flex space-x-md">
                        <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-all"
                            href="#">
                            <Globe />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-all"
                            href="#">
                            <Aperture />
                        </a>
                        <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:text-primary transition-all"
                            href="#">
                            <Share2 />
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="max-w-container-max mx-auto px-gutter mt-xxl pt-lg border-t border-outline-variant flex flex-col md:flex-row justify-between items-center text-label-sm text-text-muted">
                <p>© 2024 LuxeStay Global. All rights reserved.</p>
                <div className="flex space-x-xl mt-md md:mt-0">
                    <a className="hover:text-primary transition-all" href="#">Privacy Policy</a>
                    <a className="hover:text-primary transition-all" href="#">Terms of Service</a>
                    <a className="hover:text-primary transition-all" href="#">Cookie Policy</a>
                    <a className="hover:text-primary transition-all" href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer