import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
}

// Reusable Collection Card Component
const CollectionCard = ({
    imageUrl = "/assets/images/box-item/collectionPack/collection-01.jpg",
    title = "Bored ape#21",
    author = "@Themesflat",
    itemCount = "12 Item",
    likeCount = "97 like",
    authorLink = "/author01",
    cardLink = "/author-2"
}) => {
    return (
        <div className="tf-card-collection">
            <div className="w-full aspect-square rounded-[15px] overflow-hidden mb-4">
                <Link href={cardLink}>
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </Link>
            </div>
            <div className="card-bottom">
                <div className="author">
                    <h5><Link href={authorLink}>{title}</Link></h5>
                    <div className="infor">{author}</div>
                </div>
                <div className="bottom-right">
                    <div className="shop">
                        <div className="icon">
                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p>{itemCount}</p>
                    </div>
                    <div className="like">
                        <span className="wishlist-button icon-heart" />
                        <p>{likeCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TopCollections1() {
    const collections = [
        { id: 1, title: "Bored ape#21", author: "@Themesflat", itemCount: "12 Item", likeCount: "97 like", imageUrl: "/assets/images/box-item/collectionPack/collection-01.jpg" },
        { id: 2, title: "Bored ape#22", author: "@Themesflat", itemCount: "8 Item", likeCount: "45 like", imageUrl: "/assets/images/box-item/collectionPack/collection-02.jpg" },
        { id: 3, title: "Bored ape#23", author: "@Themesflat", itemCount: "15 Item", likeCount: "123 like", imageUrl: "/assets/images/box-item/collectionPack/collection-03.jpg" },
        { id: 4, title: "Bored ape#24", author: "@Themesflat", itemCount: "6 Item", likeCount: "78 like", imageUrl: "/assets/images/box-item/collectionPack/collection-04.jpg" },
        { id: 5, title: "Bored ape#25", author: "@Themesflat", itemCount: "20 Item", likeCount: "156 like", imageUrl: "/assets/images/box-item/collectionPack/collection-05.jpg" },
        { id: 6, title: "Bored ape#26", author: "@Themesflat", itemCount: "9 Item", likeCount: "89 like", imageUrl: "/assets/images/box-item/collectionPack/collection-06.jpg" },
    ]

    return (
        <>
            <div className="tf-section top-collections">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section pb-20">
                                <h2 className="tf-title">Explore In Pack</h2>
                                <Link href="/explore-3">
                                    Discover more <i className="icon-arrow-right2" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper {...swiperOptions} className="featured pt-10 swiper-container carousel3">
                                {collections.map((collection) => (
                                    <SwiperSlide key={collection.id}>
                                        <CollectionCard
                                            title={collection.title}
                                            author={collection.author}
                                            itemCount={collection.itemCount}
                                            likeCount={collection.likeCount}
                                            imageUrl={collection.imageUrl}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}