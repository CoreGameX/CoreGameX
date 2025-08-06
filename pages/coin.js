import Layout from '@/components/layout/Layout'
import React from 'react'

function GameEconomy() {
    return (
        <Layout headerStyle={2} footerStyle={1} pageCls="home-1">
            <div className=' my-28 flex flex-col gap-10  items-center p-24  bg-black text-white relative overflow-hidden'>

                <div className='p-8 mb-20'>
                    <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-screen-lg mx-auto'>
                        {/* Image section */}
                        <div className='w-full lg:w-1/2 relative group'>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-xl"></div>
                            <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-neutral-950 p-4 hover:border-gray-700 transition-all duration-500">
                                <img
                                    src='/assets/images/box-item/gameEconomy.png'
                                    alt="Game Economy"
                                    className="w-full h-auto object-cover rounded filter grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>

                        {/* Content section */}
                        <div className='w-full lg:w-1/2 space-y-8'>
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                                    <span className="block">The Game</span>
                                    <span className="block py-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-pulse">
                                        Economy Layer
                                    </span>
                                    <span className="block">Is Coming.</span>
                                </h1>

                                <div className="relative">
                                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-white via-gray-400 to-transparent opacity-30"></div>
                                    <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed pl-8">
                                        Unlock rewards, royalties, and true cross-game ownership — a new era of UGC is loading...
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="group relative overflow-hidden bg-white text-black px-8 py-4 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gray-200 ">
                                    <span className="relative z-10">Coming Soon</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-400 transition-colors duration-300"></div>
                                </button>

                                <p className="text-lg md:text-2xl text-gray-500 font-mono tracking-wide max-w-md">
                                    Token utility and details will be revealed during private rollout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loading indicator */}
                <div className="flex space-x-1 ">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce opacity-60"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* Bottom decorative line */}
                <div className=" w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
            </div>
        </Layout>
    )
}

export default GameEconomy