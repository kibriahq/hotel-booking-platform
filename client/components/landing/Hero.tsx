import SearchBar from "../SearchBar"

const Hero = () => {

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center"
                    data-alt="A wide-angle landscape shot of a magnificent luxury resort with infinity pools and overwater villas during a vibrant golden hour. The sky is a gradient of soft pinks and deep oranges, reflecting off the crystal-clear turquoise ocean. The architecture is modern and minimalist, featuring clean white lines and lush tropical landscaping. The lighting is warm and cinematic, creating a peaceful, high-end travel atmosphere."
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2ZxlEbzjvUeqTKwI7AO9spoQgHb6eLbXd7rotrx5Qu32IdBE8WKxXVRvWGrCKhQ7vKxODYrbq28Gf0jIA2oaI1ICALUii7N1-fgmWVV950gHP9j8_nYkVwhA0Rc27t58fCp9HWSYB9EY-Oeom_UxeSlkx-wrEGOJtGJf4Z0jID-zTgxLSfjFTpV1uc5ghnJXnPFb0fZzoo002ILRVe0KGWPuNm1w00_WG_DXlw5fBrVr5wupciF_1YZigXdJgaUiH0p8Qql5YZbq9')" }}>
                </div>
                <div className="absolute inset-0 hero-gradient"></div>
            </div>
            <div className="relative z-10 text-center text-white px-gutter max-w-4xl mx-auto">
                <h1 className="font-display-lg text-display-lg mb-md drop-shadow-lg">Find Your Perfect Stay</h1>
                <p className="font-body-lg text-body-lg mb-xxl opacity-90 drop-shadow-md">
                    Discover the world&apos;s most exquisite hotels for an unforgettable experience.
                </p>
                <SearchBar /> 
            </div>
        </section>
    )
}

export default Hero