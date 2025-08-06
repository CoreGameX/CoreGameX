import React from 'react';

export default function BecomeCreatorHero({ onWaitlistClick }) {
    return (
        <div className="flat-pages-title min-h-[80vh] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
            <div className="widget-bg-line">
                <div className="wraper">
                    <div className="bg-grid-line y bottom">
                        <div className="bg-line" />
                    </div>
                </div>
            </div>

            <div className="themesflat-container w1490">
                <div className="row">
                    <div className="col-12 pages-title">
                        <div className="content text-center">
                            <h1 data-wow-delay="0s" className="wow fadeInUp text-5xl md:text-6xl font-bold text-white">
                                Launch Your Assets <br /> to the Game World
                            </h1>
                            <p className="wow fadeInUp text-lg text-gray-300 mt-6" data-wow-delay="0.1s">
                                Let gamers discover, fund, and use your assets across their
                                favorite game platforms.
                            </p>

                            {/* Join Waitlist Button */}
                            <div
                                data-wow-delay="0.2s"
                                className="wow fadeInUp flat-button flex justify-center mt-8"
                            >
                                <button
                                    onClick={onWaitlistClick}
                                    className="bg-white px-12 border border-white text-black font-bold text-2xl rounded-2xl hover:bg-neutral-800 hover:text-white transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                                >
                                    Join Waitlist
                                </button>
                            </div>

                            <h2 className="text-lg text-gray-400 mt-6">
                                Join Our Mailing List
                            </h2>
                        </div>
                        {/* <div className="icon-background">
                                            <img className="absolute item1" src="/assets/images/item-background/item1.png" alt="" />
                                            <img className="absolute item2" src="/assets/images/item-background/item2.png" alt="" />
                                            <img className="absolute item3" src="/assets/images/item-background/item3.png" alt="" />
                                            <img className="absolute item4" src="/assets/images/item-background/item1.png" alt="" />
                                            <img className="absolute item5" src="/assets/images/item-background/item1.png" alt="" />
                                            <img className="absolute item6" src="/assets/images/item-background/item4.png" alt="" />
                                            <img className="absolute item7" src="/assets/images/item-background/item5.png" alt="" />
                                            <img className="absolute item8" src="/assets/images/item-background/item5.png" alt="" />
                                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
