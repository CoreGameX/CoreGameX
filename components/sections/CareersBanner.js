import React from 'react';
import { ArrowRight } from 'lucide-react';

const CareersBanner = () => {
    return (
        <section className="bg-black min-h-[80vh]  px-8 md:px-64 text-white">
            <p className="text-lg sm:text-lg md:text-xl text-gray-400 tracking-widest mb-12 md:mb-0 font-medium">
                [ CAREER ]
            </p>
            <div className=" flex flex-col md:flex-row gap-16 items-center">
                {/* left side - Text Content */}
                <div className="space-y-8 text-left">
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                        Join Our Dream Team
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
                        We’re hiring builders, dreamers, and gamers who believe in open creativity. Be part of our journey.
                    </p>

                    <div data-wow-delay="0.2s" className=" wow fadeInUp flat-button flex justify-center md:justify-start">
                        <button className="flex  justify-center items-center gap-2 bg-white px-12 border border-white text-black font-bold text-2xl rounded-2xl hover:bg-neutral-800 hover:text-white transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white">
                            View Open Roles <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                {/* right side - Person Image */}
                <div className="flex justify-center md:justify-start  ">
                    <div className="relative  overflow-hidden flex items-center justify-center">
                        <img
                            src="/assets/images/about-section/career.jpg"
                            alt="Investor Image"
                            className="h-[500px] w-auto object-contain brightness-50"
                        />
                    </div>
                </div>




            </div>
        </section>
    );
};

export default CareersBanner;
