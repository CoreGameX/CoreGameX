import TitileSlider1 from "../slider/TitileSlider1"
export default function FlatTitle1({ onWaitlistClick }) {



    return (
        <>
            <div className="flat-pages-title">
                <div className="widget-bg-line">
                    <div className="wraper">
                        {/* <div className="bg-grid-line y top">
                      <div className="bg-line"></div>
                  </div>
                  <div className="bg-grid-line x left">
                      <div className="bg-line"></div>
                  </div>
                  <div className="bg-grid-line x right">
                      <div className="bg-line"></div>
                  </div> */}
                        <div className="bg-grid-line y bottom">
                            <div className="bg-line" />
                        </div>
                    </div>
                </div>
                <div className="themesflat-container w1490">
                    <div className="row">
                        <div className="col-12 pages-title">
                            <div className="content">
                                <h1 data-wow-delay="0s" className="wow fadeInUp">The World Of Game Play
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay="0.1s">Welcome to the world of rare game assets — explore top-tier
                                    creations from world-class creators and uncover hidden gems
                                    for your next game.</p>
                                {/* join waitlist button */}
                                <div data-wow-delay="0.2s" className=" wow fadeInUp flat-button flex justify-center">
                                    <button
                                        onClick={onWaitlistClick}
                                        className="bg-white px-12 border border-white text-black font-bold text-2xl rounded-2xl hover:bg-neutral-800 hover:text-white transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                                    >
                                        Join Waitlist
                                    </button>
                                </div>
                                <h2 className="text-lg text-gray-400 mt-6">Join Our Mailing List</h2>

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
                            <div className="relative">
                                <TitileSlider1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
