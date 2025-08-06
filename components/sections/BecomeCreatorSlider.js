import React from 'react'
import FeaturedSlider2 from '../slider/FeaturedSlider2'
import Link from 'next/link'

export default function BecomeCreatorSlider() {
    return (
        <>
            <div className="tf-section featured-item style-bottom mt-20">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="flex flex-col justify-center mb-10 md:mb-16 mx-4">
                            {/* Tagline */}
                            <div className="flex flex-row items-center gap-2 pt-4 px-6 text-lg md:text-xl font-medium text-neutral-300">
                                <div className="h-4 w-8 bg-neutral-300 rounded-lg"></div>
                                Focus on your creativity — we'll handle the rest
                            </div>

                            {/* Main Content */}
                            <div className="flex flex-col md:flex-row justify-center items-start md:items-center">
                                {/* Headline */}
                                <div className="text-5xl md:text-6xl px-6 w-full md:w-1/2 py-4 font-extrabold leading-snug md:leading-tight">
                                    Empowering Every Step <br className='md:hidden block' /> of Your Creator Journey
                                </div>

                                {/* Supporting Text */}
                                <div className="text-xl md:text-2xl font-semibold px-6 md:px-12 w-full md:w-1/2 py-4   leading-relaxed text-gray-400">
                                    You build the vision — <br /> we’ll take care of the tech, funding, licensing, and launch.<br />
                                    <strong> CoreGameX</strong> gives you the tools to create, share, and earn<br /> across the entire gameverse.
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12">
                            <FeaturedSlider2 />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
