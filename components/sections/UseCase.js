import React, { useState, useEffect } from 'react';
import { Gamepad2, PencilRuler, Building2, ChevronDown, ArrowRight, Play, Pause } from 'lucide-react';

function UseCase() {
    const useCaseData = [
        {
            id: 0,
            name: "For Gamers",
            icon: <Gamepad2 className="w-10 h-10" />,
            heading: "Discover, Own & Customize Your Game Experience",
            content: "Gamers can browse and buy high-quality, AI-enhanced game assets — skins, mods, tools — from across games like Minecraft, Roblox, and more...",
            image: "/assets/images/about-section/useCaseGamer.jpg",
            ctaText: "Browse Assets",
        },
        {
            id: 1,
            name: "For Creators",
            icon: <PencilRuler className="w-10 h-10" />,
            heading: "Monetize Your Talent. Reach Millions of Gamers",
            content: "Modders and digital artists can easily create, upload, and sell assets...",
            image: "/assets/images/about-section/useCaseCreator.jpg",
            ctaText: "Start Selling",
        },
        {
            id: 2,
            name: "For Studios",
            icon: <Building2 className="w-10 h-10" />,
            heading: "Scale Asset Pipelines with AI & Automation",
            content: "Indie and mid-size studios can plug into our backend...",
            image: "/assets/images/about-section/useCaseStudio.jpg",
            ctaText: "Connect API",
        },
    ];

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="mx-auto p-8 md:px-32 lg:px-64">
                <div className="mb-16">
                    <p className="text-lg sm:text-lg md:text-xl text-gray-400 tracking-widest mb-8 md:mb-16 font-medium">[ USE CASES ]</p>
                </div>

                <div className="relative mx-auto">
                    {/* Central timeline */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/60 to-white/20 transform md:-translate-x-1/2" />

                    {useCaseData.map((useCase, index) => (
                        <div key={useCase.id} className={`relative flex items-center mb-32 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <div className="group bg-gradient-to-br from-neutral-950/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-700/30 rounded-2xl p-10 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 ">
                                    {/* Icon and Label */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/10 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                            <div className="text-white group-hover:scale-110 transition-transform duration-300">
                                                {useCase.icon}
                                            </div>
                                        </div>
                                        <span className="text-white text-xl font-medium tracking-wide uppercase">{useCase.name}</span>
                                    </div>

                                    {/* Heading */}
                                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-200 leading-relaxed mb-6 group-hover:text-neutral-100 transition-colors duration-300">
                                        {useCase.heading}
                                    </h3>

                                    {/* Content */}
                                    <p className="text-gray-400 text-lg lg:text-2xl leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                                        {useCase.content}
                                    </p>

                                    {/* CTA Button */}
                                    <div className="mt-8">
                                        <button className="h-auto inline-flex text-lg items-center gap-2 px-4 py-3 rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 font-medium">
                                            {useCase.ctaText}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>


                                </div>
                            </div>


                            {/* Image */}
                            <div className={`hidden md:block w-1/3 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                                <div className="relative group">
                                    <img
                                        src={useCase.image}
                                        alt={useCase.name}
                                        className="w-full aspect-square object-cover rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500  shadow-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10  transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default UseCase;