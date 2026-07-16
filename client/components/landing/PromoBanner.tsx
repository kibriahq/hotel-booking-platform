import React from 'react'

const PromoBanner = () => {
    return (
        <section className="py-xl px-gutter max-w-container-max mx-auto">
            <div className="relative rounded-xl overflow-hidden h-[300px] flex items-center px-lg sm:px-xxl premium-shadow">
                <div className="absolute inset-0 bg-cover bg-center"
                    data-alt="A close-up artistic shot of a luxurious poolside setup. A crystal-clear infinity pool edge blends into a deep blue sea background. Two high-end designer lounge chairs with plush white towels and a small side table holding a refreshing summer cocktail and a book are visible. The lighting is bright and summery, emphasizing a mood of relaxation and high-end escape with a minimalist, clean layout."
                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfFNnOjHyFWkA9x6r412NtHU7JwaZ_qXhXJmwZY8vn38CrlSuEtm_unvUHBIrwHQ11YZjX8ewkNNfrQzB7vL1EXEKxKn1LlfPu_180Z8_sQWu4w-qvfgwXm8F0IAvwOp-olse--y5ajZHLrTQ198uk61GJVL8EmhBdmdg5eoUKu2f00AoP28M1bN1xwppC12aRyuIbxeuBuGAKF21Ihay2kNsqClH7A-Kd0VXStrcvpGhFfmhCJbnTyQCbWa3FlzsJjmWuRE5QjwN0')` }}>
                </div>
                <div className="absolute inset-0 bg-booking-deep-blue/40 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-white text-center sm:text-left">
                    <h2 className="font-display-lg text-4xl sm:text-display-lg mb-md leading-tight">Summer Escape: Save up to 30%</h2>
                    <p className="font-body-lg text-md sm:text-body-lg mb-lg">Book your luxury stay by August 31st and enjoy exclusive
                        seasonal rates at participating hotels.</p>
                    <button
                        className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-xl py-3 rounded-lg hover:bg-secondary-fixed transition-all active:scale-95 shadow-md">Claim
                        Offer</button>
                </div>
            </div>
        </section>
    )
}

export default PromoBanner