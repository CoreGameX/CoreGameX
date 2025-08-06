import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
}

// Reusable Featured Card Component
const FeaturedCard = ({ 
    image, 
    name, 
    authorAvatar, 
    authorName, 
    price = "$ 0,34",
    itemLink = "#",
    authorLink = "/author-2"
}) => {
    return (
        <div className="tf-card-box style-1">
            <div className="card-media">
                <Link href={itemLink}>
                    <img src={image} alt={name} />
                </Link>
                <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name"><Link href={itemLink}>{name}</Link></h5>
            <div className="author flex items-center">
                <div className="avatar">
                    <img src={authorAvatar} alt="Image" />
                </div>
                <div className="info">
                    <span>Created by:</span>
                    <h6><Link href={authorLink}>{authorName}</Link></h6>
                </div>
            </div>
            <div className="divider" />
            <div className="meta-info flex items-center justify-between">
                <span className="text-bid">Current Price</span>
                <h6 className="price gem">{price}</h6>
            </div>
        </div>
    )
}

export default function FeaturedSlider1() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    // Featured items data
    const featuredItems = [
        {
            id: 1,
            name: "AI Enemy Pack",
            image: "/assets/images/box-item/featuredSlider/AI Enemy Pack.png",
            authorName: "Kathryn Murphy",
            authorAvatar: "/assets/images/avatar/avatar-box-01.png",
            price: "$ 2.99"
        },
        {
            id: 2,
            name: "Fantasy Castle Builder",
            image: "/assets/images/box-item/featuredSlider/Fantasy Castle Builder.png",
            authorName: "Cody Fisher",
            authorAvatar: "/assets/images/avatar/avatar-box-02.png",
            price: "$ 7.90"
        },
        {
            id: 3,
            name: "Galaxy Back Bling",
            image: "/assets/images/box-item/featuredSlider/Galaxy Back Bling.png",
            authorName:"danny jainson",
            authorAvatar: "/assets/images/avatar/avatar-box-03.png",
            price: "$ 9.00"
        },
        {
            id: 4,
            name: "Neon Racer Car",
            image: "/assets/images/box-item/featuredSlider/Neon Racer Car.png",
            authorName: "sarah jones",
            authorAvatar: "/assets/images/avatar/avatar-box-04.png",
            price: "$ 18.99"
        },
        {
            id: 5,
            name: "Nether Particle FX Pack",
            image: "/assets/images/box-item/featuredSlider/NetherParticleFXPack.png",
            authorName: "robert smith",
            authorAvatar: "/assets/images/avatar/avatar-box-05.png",
            price: "$ 11.00"
        },
        {
            id: 6,
            name: "Ocean Shader Toolkit",
            image: "/assets/images/box-item/featuredSlider/Ocean Shader Toolkit.png",
            authorName: "william johnson",
            authorAvatar: "/assets/images/avatar/avatar-box-06.png",
            price: "$ 30.00"
        },
        {
            id: 7,
            name: "Post-Apocalyptic Armor",
            image: "/assets/images/box-item/featuredSlider/Post-Apocalyptic Armor.png",
            authorName: "linda williams",
            authorAvatar: "/assets/images/avatar/avatar-box-01.png",
            price: "$ 10.34"
        },
        {
            id: 8,
            name: "Robotic Arm",
            image: "/assets/images/box-item/featuredSlider/robotic arm.png",
            authorName: "brian brown",
            authorAvatar: "/assets/images/avatar/avatar-box-04.png",
            price: "$ 12.00"
        }
    ]

    return (
        <>
            <div className="featured pt-10 swiper-container carousel">
                <Swiper {...swiperOptions}>
                    {featuredItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <FeaturedCard 
                                image={item.image}
                                name={item.name}
                                authorAvatar={item.authorAvatar}
                                authorName={item.authorName}
                                price={item.price}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination" />
                <div className="slider-next swiper-button-next" />
                <div className="slider-prev swiper-button-prev" />
            </div>
        </>
    )
}