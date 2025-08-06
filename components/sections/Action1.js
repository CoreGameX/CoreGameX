

export default function Action1({ onWaitlistClick }) {
    return (
        <section className="min-h-screen flex items-center justify-center text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex p-[2px] bg-gradient-to-r from-white/10 via-white/40 to-white/10 
                backdrop-blur-lg rounded-2xl md:rounded-full shadow-lg shadow-white/10 relative overflow-hidden 
                animate-border bg-[length:300%_300%] w-full max-w-7xl">

                <div className="w-full text-center bg-black rounded-2xl md:rounded-full py-32 md:py-28 px-6 sm:px-12 md:px-20 lg:px-72">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Unleash Your <br className="hidden md:block" />Game Play!
                    </h1>
                    <p className="text-gray-400 mb-6 sm:mb-8 text-xl md:text-2xl">
                        Fuel your next game with powerful tools and world-class assets.
                    </p>

                    <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex justify-center mb-4 sm:mb-6">
                        <button
                            onClick={onWaitlistClick}
                            className="bg-white px-12 py-2 border border-white text-black font-bold text-lg sm:text-xl md:text-2xl rounded-xl sm:rounded-2xl hover:bg-neutral-800 hover:text-white transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                        >
                            Join Waitlist
                        </button>
                    </div>

                    <p className="text-sm sm:text-lg md:text-xl text-gray-400">Join Our Mailing List</p>
                </div>
            </div>
        </section>
    );
};