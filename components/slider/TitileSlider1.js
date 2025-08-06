import Link from "next/link"
import { Autoplay, EffectCoverflow, FreeMode, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BidModal from "../elements/BidModal"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow],
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 15,
        stretch: 90,
        depth: 0,
        modifier: 1,
        scale: 0.9,
        slideShadows: false,
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".next-3d",
        prevEl: ".prev-3d",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span className="' + + '">' + (index + 1) + '</span>'
        },
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    },
}

import Countdown from '@/components/elements/Countdown'
import { useState } from "react"

export default function TitileSlider1() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    const currentTime = new Date()
    const timerx = <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
    return (
        <>


            <Swiper {...swiperOptions} className="swiper swiper-3d-7 swiper-container-horizontal">
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/AncientPortalGate.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Ancient Portal Gate</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/CrystalResourceNode.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Crystal Resource Node</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/Cyberbike9000.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Cyber bike 9000</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/CyberpunkSwordPack.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Cyber punk Sword Pack</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/DangerDragon.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Danger Dragon</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/ExplodableObjectKit.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Explodable Object Kit</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/FantasyWizardHat.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Fantasy Wizard Hat</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/ForestBiomePack.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Forest Biome Pack</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/HighPolyDragonBoss.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">High-Poly Dragon Boss</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/HoverboardVehicle.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Hoverboard Vehicle</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/JetpackGear.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Jetpack Gear</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/MagicalFXOrbPack.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Magical FX Orb Pack</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/ModularSci-fiCorridorKit.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Modular Sci-fi Corridor Kit</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tf-card-box">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/titleSlider1/NeonCyberHoodie.png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                        </div>
                        <div className="meta-info text-center">
                            <h5 className="name"><Link href="#">Neon Cyber Hoodie</Link></h5>
                            <h6 className="price gem">$ 0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="swiper-pagination pagination-number" />
            </Swiper>
            <div className="swiper-button-next next-3d over" />
            <div className="swiper-button-prev prev-3d over text-black" />
        </>
    )
}
