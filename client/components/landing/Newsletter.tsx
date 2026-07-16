import { Mail } from 'lucide-react'
import React from 'react'

const Newsletter = () => {
    return (
        <section className="py-xxl px-gutter">
            <div className="max-w-4xl mx-auto bg-surface-container-high rounded-xl py-xxl px-lg md:px-xxl text-center">
                <Mail className="mx-auto mb-md text-primary" size={48} />
                <h2 className="font-headline-lg text-headline-lg mb-sm">Exclusive Offers to Your Inbox</h2>
                <p className="text-on-surface-variant font-body-md mb-xl max-w-[600px] mx-auto">Join our private list and receive
                    the latest luxury travel insights, hotel openings, and member-only discounts.</p>
                <div className="flex flex-col sm:flex-row gap-md max-w-[500px] mx-auto">
                    <input
                        className="flex-1 bg-white border-outline-variant rounded-lg px-lg py-3 focus:ring-primary focus:border-primary"
                        placeholder="Your email address" type="email" />
                    <button
                        className="bg-primary text-on-primary font-label-md text-label-md px-xl py-3 rounded-lg hover:bg-primary-container transition-all active:scale-95 shadow-md">Subscribe</button>
                </div>
                <p className="text-text-muted text-label-sm mt-md">By subscribing, you agree to our Privacy Policy and Terms of
                    Service.</p>
            </div>
        </section>
    )
}

export default Newsletter