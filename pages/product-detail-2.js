import BarChart from "@/components/elements/BarChart"
import Countdown from "@/components/elements/Countdown"
import Layout from "@/components/layout/Layout"
import FeaturedSlider1 from "@/components/slider/FeaturedSlider1"
import { Menu } from '@headlessui/react'
import Link from "next/link"
import { FaCube } from "react-icons/fa"
const currentTime = new Date()
export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={1}>

                <div>
                    <div className="tf-section-2 product-detail">
                        <div className="themesflat-container">
                            <div className="row">
                                <div data-wow-delay="0s" className="wow fadeInLeft col-md-6">
                                    <div className="tf-card-box style-5 mb-0">
                                        <div className="card-media h-[615px] mb-0">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/discoverItems/Mech Robo.png" alt="" />
                                            </Link>
                                        </div>
                                        <h6 className="price gem"><FaCube /></h6>
                                        <div className="wishlist-button">10<i className="icon-heart" /></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div data-wow-delay="0s" className="wow fadeInRight infor-product">
                                        <div className="text">8SIAN Main Collection <span className="icon-tick"><span className="path1" /><span className="path2" /></span></div>
                                        <div className="menu_card">
                                            <Menu as="div" className="dropdown">
                                                <div className="icon">
                                                    <Menu.Button as="a" className="btn-link" aria-expanded="false">
                                                        <i className="icon-link-1" />
                                                    </Menu.Button>
                                                    <Menu.Items as="div" className="dropdown-menu show d-block">
                                                        <Link className="dropdown-item" href="#"><i className="icon-link" />Copy link</Link>
                                                        <Link className="dropdown-item" href="#"><i className="icon-facebook" />Share on facebook</Link>
                                                        <Link className="dropdown-item mb-0" href="#"><i className="fab fa-x-twitter"></i>Share on twitter</Link>
                                                    </Menu.Items>
                                                </div>
                                            </Menu>
                                            <Menu as="div" className="dropdown">
                                                <div className="icon">
                                                    <Menu.Button as="a" className="btn-link" aria-expanded="false">
                                                        <i className="icon-content" />
                                                    </Menu.Button>
                                                    <Menu.Items as="div" className="dropdown-menu show d-block">
                                                        <Link className="dropdown-item" href="#"><i className="icon-refresh" />Refresh metadata</Link>
                                                        <Link className="dropdown-item mb-0" href="#"><i className="icon-report" />Report</Link>
                                                    </Menu.Items>
                                                </div>
                                            </Menu>
                                        </div>
                                        <h2>Themesflat #0270</h2>
                                        <div className="author flex items-center mb-30">
                                            <div className="avatar">
                                                <img src="/assets/images/avatar/avatar-box-01.png" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by:</span>
                                                <h6><Link href="/author01">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="meta mb-20">
                                            <div className="meta-item view">
                                                <i className="icon-show" />208 view
                                            </div>
                                            <div className="meta-item rating">
                                                <i className="icon-link-2" />Top #2 trending
                                            </div>
                                            <div className="meta-item favorites">
                                                <i className="icon-heart" />10 favorites
                                            </div>
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item time-sales">
                                        {/* <h6><i className="icon-clock" />Sale ends May 22 at 9:39</h6> */}
                                        <h6>Current price</h6>
                                        <div className="content">
                                            {/* <div className="text">Current price</div> */}
                                            <div className="flex justify-between">
                                                <p>$58,11 <span></span></p>
                                                <Link href="#" className="tf-button style-1 h50 w216">Buy Now<i className="icon-arrow-up-right2" /></Link>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-8">
                                            {[
                                                { icon: "/assets/icon/3dview.png", text: "3D View", alt: "3D View" },
                                                { icon: "/assets/icon/game-controller.png", text: "Try Box", alt: "Try Box" },
                                                { icon: "/assets/icon/doc.png", text: "Companion Doc", alt: "Companion Doc" },
                                            ].map(({ icon, text, alt }) => (
                                                <button
                                                    key={text}
                                                    className="flex items-center justify-center gap-2 w-full h-auto border font-bold text-lg sm:text-xl rounded-2xl bg-neutral-800 text-white transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                                                >
                                                    <img src={icon} alt={alt} className="h-8 w-8 sm:h-10 sm:w-10" />
                                                    {text}
                                                </button>
                                            ))}
                                        </div>



                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item description">
                                        <h6><i className="icon-description" />Description</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <p>8,888 NFTs of beautiful, Asian women painstakingly-crafted where even the most intricate details are steeped in historical significance. We envision 8SIAN being a global, inclusive community <span>see more</span></p>
                                        </div>
                                    </div>
                                    {/* <div data-wow-delay="0s" className="wow fadeInRight product-item history">
                                        <h6><i className="icon-description" />Price History</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            /* <div className="chart">
                                                <canvas id="myChart" />
                                            </div> *
                                            <BarChart />
                                        </div>
                                    </div> */}
                                </div>
                                {/* assets details */}
                                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item details">
                                        <h6><i className="icon-description" />Assets Details</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="details-item">
                                                <span>Asset type</span>
                                                <span className="">Weapon</span>
                                            </div>
                                            <div className="details-item">
                                                <span>License type</span>
                                                <span className="">Standard</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Launch type</span>
                                                <span className="">Limited Edition</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Format</span>
                                                <span className="">fbx</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Size</span>
                                                <span >719 MB</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Chain</span>
                                                <span >Hyperledger Fabric</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Last Updated</span>
                                                <span >8 months ago</span>
                                            </div>
                                            <div className="details-item mb-0">
                                                <span>Creator Earnings</span>
                                                <span >8%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Traits */}
                                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item traits style-1">
                                        <h6><i className="icon-description" />Traits</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="trait-item">
                                                <p>Rarity</p>
                                                <div className="title">Epic</div>
                                                <p>Floor: 75 $</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>style</p>
                                                <div className="title">Cyber Punk, Dark</div>
                                                <p>Floor: 40 $</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Mod type</p>
                                                <div className="title">Skin</div>
                                                <p>Floor: 50 $</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>AI Generated</p>
                                                <div className="title">yes</div>
                                                <p>Floor: 80 $</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* offers */}
                                {/* <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item offers">
                                        <h6><i className="icon-description" />Offers</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="table-heading">
                                                <div className="column">Price</div>
                                                <div className="column">USD Price</div>
                                                <div className="column">Quantity</div>
                                                <div className="column">Floor Diference</div>
                                                <div className="column">Expiration</div>
                                                <div className="column">Form</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem">$ 0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem">$ 0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem">$ 0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem">$ 0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Item activity */}
                                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item item-activity mb-0">
                                        <h6><i className="icon-two-arrow rotateZ90" />Item activity</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="table-heading">
                                                <div className="column">Event</div>
                                                <div className="column">Price</div>
                                                <div className="column">Form</div>
                                                <div className="column">To</div>
                                                <div className="column">Date</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-two-arrow" />Transfer</div>
                                                <div className="column">-/-</div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-sale" />Sale</div>
                                                <div className="column"><h6 className="price gem">$ 0,0319</h6></div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-two-arrow" />Listing</div>
                                                <div className="column">$ 0.0319</div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column"><span className="tf-color">Market</span></div>
                                                <div className="column">1d ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-sale" />Update</div>
                                                <div className="column"><h6 className="price gem">-/-</h6></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column"><span className="tf-color">-/-</span></div>
                                                <div className="column">1d ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 featured-item style-bottom">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section pb-20">
                                        <h2 className="tf-title ">Related Assets</h2>
                                        <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <FeaturedSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}