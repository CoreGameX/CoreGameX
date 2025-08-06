import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HowItsWork() {
    const steps = [
        {
            id: 1,
            title: "Create & Upload Assets via Studio",
            description: "Use our in-house AI-powered studio to build and upload game-ready assets.",
            img: "/assets/images/howItsWork/img-1.png"
        },
        {
            id: 2,
            title: "Select Platforms & License Type",
            description: "Choose supported game engines (e.g., Roblox, Minecraft, Fortnite) and set licensing terms.",
            img: "/assets/images/howItsWork/img-2.png"
        },
        {
            id: 3,
            title: "Set Price / Funding Goal",
            description: "Define your asset's price or launch a funding goal for support from the community.",
            img: "/assets/images/howItsWork/img-3.png"
        },
        {
            id: 4,
            title: "Launch to Marketplace & Community",
            description: "Publish your asset to reach buyers, Gamers, and studios across multiple platforms.",
            img: "/assets/images/howItsWork/img-4.png"
        }
    ];

    return (
        <section className="bg-black py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-8xl md:mx-8 grid grid-rows-[auto_auto_auto]">
                {/* 1️⃣ Header Section */}
                <div className="flex flex-col py-14 text-center justify-center items-center">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-300 mb-4">
                        How It Works
                    </h2>
                    <p className="text-2xl text-neutral-400 max-w-3xl mx-auto">
                        Transform your creative ideas into profitable game assets with our streamlined process
                    </p>
                </div>

                {/* 2️⃣ Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-neutral-800 mb-4 md:mb-0">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="group relative px-4 py-6 border-b lg:border-r border-neutral-800 flex flex-col items-center justify-between text-center transition-all duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex flex-col items-center justify-between h-full w-full">
                                {/* Image */}
                                <div className="relative h-96 flex items-center justify-center w-full">
                                    <div className="relative w-full h-full overflow-hidden bg-black transition-all duration-300">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <img
                                                src={step.img}
                                                alt={step.title}
                                                className="max-h-full w-auto object-contain transition-all duration-300 group-hover:scale-110"
                                                style={{ filter: 'drop-shadow(0 0 5px rgba(205, 204, 152, 0.233))' }}
                                            />
                                            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                                                <div className="opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-md">
                                                    <img
                                                        src={step.img}
                                                        alt=""
                                                        className="max-h-full w-auto object-contain opacity-20"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col items-center justify-center space-y-4 px-4 py-14 mb-14">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 transition-all duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3️⃣ CTA Section */}
                <div className="text-center py-4 px-6 md:mt-12">
                    <button className="group bg-gradient-to-r from-white/90 to-neutral-100/80 hover:from-neutral-100/90 hover:to-white/80 text-black font-bold px-10 rounded-2xl transition-all duration-100 transform  hover:shadow-2xl hover:shadow-white/25 flex items-center justify-center gap-3 mx-auto">
                        <span className="text-xl">Get Started Now</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>

    );
}
