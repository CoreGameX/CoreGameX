import Link from "next/link"
import { Mousewheel, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Pagination, Navigation, Mousewheel],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    mousewheel: {
        forceToAxis: true,
        sensitivity: 10
    },
    navigation: {
        clickable: true,
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
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

// Reusable Card Component
const Card = ({ item }) => {
    return (
        <div className="tf-card-box style-1">
            <div className="card-media">
                <img src={item.image} alt={item.title} />
            </div>
            {/* Heading */}
            <h6 className="name">
                <span href={item.link || "#"}>{item.title}</span>
            </h6>
            {/* sub heading */}
            <p className="subtitle text-lg md:text-xl font-semibold text-gray-400 pb-2">
                {item.subTitle}
            </p>
        </div>
    )
}

const cardData = [
    {
        id: 1,
        title: "AI Studio Support",
        image: "/assets/images/box-item/card-item-01.jpg",
        link: "#",
        subTitle: "Create assets faster and smarter.",
    },
    {
        id: 2,
        title: "Royalty Setup & License Config",
        image: "/assets/images/box-item/card-item-02.jpg",
        link: "#",
        subTitle: "You decide how your assets earn.",
    },
    {
        id: 3,
        title: "Asset Review & Quality Scoring",
        image: "/assets/images/box-item/card-item-03.jpg",
        link: "#",
        subTitle: "Launch with confidence.",
    },
    {
        id: 4,
        title: "Community Boost",
        image: "/assets/images/box-item/card-item-04.jpg",
        link: "#",
        subTitle: "Get discovered faster.",
    },
    {
        id: 5,
        title: "Early Access to Token Rewards",
        image: "/assets/images/box-item/card-item-05.jpg",
        link: "#",
        subTitle: "Be rewarded early.",
    },
    {
        id: 6,
        title: "Crowdfunded Launches",
        image: "/assets/images/box-item/card-item-06.jpg",
        link: "#",
        subTitle: "Get funded before you build.",
    },
    {
        id: 7,
        title: "Studio Collaborations",
        image: "/assets/images/box-item/card-item-07.jpg",
        link: "#",
        subTitle: "Get noticed by real studios.",
    }
]

export default function FeaturedSlider2({ data = cardData }) {
    return (
        <>
            <div className="featured pt-10 swiper-container carousel">
                <Swiper {...swiperOptions}>
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card
                                item={item}
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