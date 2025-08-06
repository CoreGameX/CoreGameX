import React from 'react';

const Principle = () => {
  return (
    <div className=" bg-black text-white p-8 md:p-64">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-lg sm:text-lg md:text-xl text-gray-400 tracking-widest mb-8 md:mb-16 font-medium">
            [ OUR PRINCIPLES ]
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 lg:mb-0">
              Our Core Pillar
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-md leading-relaxed">
              We’re united by creativity, driven by innovation, and committed to empowering the future of gaming.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Principle 1 */}
          <div className="space-y-8 p-5 border-l border-neutral-800 my-8">
            <div className="flex">
              <svg
                className="w-20 h-20 text-white mb-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-light text-white">
              Empowering a Borderless Creator Economy

            </h3>
            <p className="text-gray-400 leading-relaxed text-2xl">
              To become the global ecosystem where creators, gamers, and game studios seamlessly collaborate through AI-powered asset generation, exchange, and innovation — making game creation accessible, scalable, and rewarding for all.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="space-y-8 p-5 border-l border-neutral-800 my-8">
            <div className="flex">
              <svg
                className="w-20 h-20 text-white mb-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-light text-white">
              One Platform, Infinite Game Universes

            </h3>
            <p className="text-gray-400 leading-relaxed text-2xl">
              To build an AI-powered platform that empowers creators to generate, customize, and exchange game assets across games and studios — fueling a global creator economy where innovation, interoperability, and monetization thrive.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="space-y-8 p-5 border-l border-neutral-800 my-8">
            <div className="flex">
              <svg
                className="w-20 h-20 text-white mb-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-light text-white">
              Creativity, Fairness, and Growth Through Collaboration

            </h3>
            <p className="text-gray-400 leading-relaxed text-2xl">
              We value creativity, fairness, and simplicity. Our platform stands for empowering individuals through accessible AI tools, transparent ownership, and open collaboration — enabling creators and studios to grow together through shared success.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principle;