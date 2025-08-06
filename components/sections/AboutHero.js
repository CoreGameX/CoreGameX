import { ArrowDown } from "lucide-react";
import React from "react";

const AboutHero = ({ onWaitlistClick }) => {
    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden -mt-44 border-b border-neutral-800">
            {/* Background Image */}
            <img
                src="/assets/images/item-background/about-us-01.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover object-center md:object-right z-0"
            />

            {/* Content Container */}
            <div className="relative z-20 flex flex-col md:flex-row min-h-screen">
                {/* Left side - Text content */}
                <div className="flex-1 flex flex-col md:max-w-4xl justify-end md:justify-center px-4 md:ml-8 lg:ml-44 py-16 md:-mt-20">
                    <div className="max-w-3xl">
                        <p data-wow-delay="0.0s" className="text-lg sm:text-lg md:text-xl text-gray-400 tracking-widest mb-8 md:mb-16 font-medium">
                            [ OUR MISSION ]
                        </p>

                        <h1 data-wow-delay="0.1s" className="text-4xl md:text-6xl lg:text-8xl font-bold md:leading-loose mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-white">
                            Game Assets That Go<br className="block lg:hidden" /> Beyond Boundaries
                        </h1>
                    </div>
                </div>

                {/* Right side - Description and button */}
                <div className=" flex-1 flex flex-col justify-center md:justify-end px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16">
                    <div className="max-w-full md:ml-auto flex flex-row  gap-5 md:gap-24 items-center ">
                        <p data-wow-delay="0.3s" className="w-full text-base sm:text-lg md:text-2xl text-gray-100 leading-normal mb-8">
                            Empower millions of creators and developers with cutting-edge AI tools to create,
                            customize, and trade high-quality game assets — enabling them to monetize their creativity
                            and power the next generation of immersive games.
                        </p>

                        <div className="w-1/3 flex items-center justify-start">
                            <div data-wow-delay="0.2s" className="hidden md:block px-8 py-3 bg-white border border-white text-black font-bold text-xl md:text-2xl rounded-2xl hover:bg-neutral-800 hover:text-white transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                                onClick={onWaitlistClick}
                            >
                                JOIN US →
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div data-wow-delay="0.2s" className="absolute w-screen px-8 bottom-20 md:left-8 lg:left-52 flex flex-row items-center justify-between">
                <ArrowDown className="animate-bounce text-white w-12 h-12 opacity-60" />
                <div data-wow-delay="0.2s" className="block md:hidden px-3 py-2  bg-white border border-white text-black font-bold text-xl md:text-2xl rounded-2xl hover:bg-neutral-800 hover:text-white transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                    onClick={onWaitlistClick}
                >
                    JOIN US →
                </div>
            </div>
        </section>
    );
};

export default AboutHero;