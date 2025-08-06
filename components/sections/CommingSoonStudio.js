import React from 'react';
import { PenTool, Users, Share2, Brush, KanbanSquare, Rocket, Workflow } from 'lucide-react';

export default function ComingSoonStudio() {
    return (
        <div className="w-full mx-auto px-6 md:px-72 py-12 mb-36">
            {/* Header */}
            <div className=" mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-6">
                    Your Full-Stack Studio — From Concept to Production.
                </h1>
            </div>

            {/* Image Container with Coming Soon Button */}
            <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-black shadow-2xl">
                <img
                    src="/assets/images/box-item/commingSoonStudio.jpg"
                    alt="Full-stack development studio workspace"
                    className="w-full h-full object-cover opacity-70"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="px-8 py-4 border border-neutral-300 text-neutral-400 hover:text-white font-semibold text-xl rounded-2xl bg-black hover:bg-neutral-900 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                        Coming Soon
                    </button>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div> */}
                <div className="absolute bottom-6 left-6 right-6 text-center">
                    <p className="text-neutral-300 text-2xl font-medium opacity-90">
                        Build, collaborate, and deliver stunning game Project — all in one place.
                    </p>
                </div>
            </div>

            {/* Studio Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* Card 1: Visual Design Suite */}
                <div className="py-12 px-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-xl hover:shadow-md hover:shadow-white/30 transition-all duration-300 group">
                    <Brush className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white mb-3">Visual Design Suite</h3>
                    <p className="text-neutral-400 text-2xl">
                        Create detailed concepts and stunning game-ready assets using integrated design tools tailored for game development.
                    </p>
                </div>

                {/* Card 2: Team Collaboration */}
                <div className="py-12 px-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-xl hover:shadow-md hover:shadow-white/30 transition-all duration-300 group">
                    <KanbanSquare className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white mb-3">Team Collaboration</h3>
                    <p className="text-neutral-400 text-2xl">
                        Work seamlessly with artists, animators, and developers using real-time feedback, asset locking, and version control.
                    </p>
                </div>

                {/* Card 3: Pipeline Integration */}
                <div className="py-12 px-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-xl hover:shadow-md hover:shadow-white/30 transition-all duration-300 group">
                    <Workflow className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold text-white mb-3">Pipeline Integration</h3>
                    <p className="text-neutral-400 text-2xl">
                        Export directly to popular game engines with optimized formats and automated rigging, compression, and compatibility checks.
                    </p>
                </div>
            </div>
        </div>
    );
}
