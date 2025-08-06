import React, { useState } from 'react'
import Link from "next/link"

const mockProducts = [
    {
        id: 1,
        title: "User serpentine belt",
        image: "/assets/images/box-item/card-item-35.jpg",
        creator: "Kristin Watson",
        avatar: "/assets/images/avatar/avatar-box-01.jpg",
        price: "0.34",
        authorLink: "/author-2"
    },
    {
        id: 2,
        title: "Vintage spark plug",
        image: "/assets/images/box-item/card-item-36.jpg",
        creator: "James Brown",
        avatar: "/assets/images/avatar/avatar-box-02.jpg",
        price: "0.42",
        authorLink: "/author-2"
    },
    {
        id: 3,
        title: "Chrome engine cover",
        image: "/assets/images/box-item/card-item-37.jpg",
        creator: "Alice Johnson",
        avatar: "/assets/images/avatar/avatar-box-03.jpg",
        price: "1.12",
        authorLink: "/author-3"
    },
    {
        id: 4,
        title: "High performance",
        image: "/assets/images/box-item/card-item-38.jpg",
        creator: "Ethan Hunt",
        avatar: "/assets/images/avatar/avatar-box-04.jpg",
        price: "0.76",
        authorLink: "/author-4"
    },
    {
        id: 1,
        title: "Dayco serpentine belt",
        image: "/assets/images/box-item/card-item-35.jpg",
        creator: "Kristin Watson",
        avatar: "/assets/images/avatar/avatar-box-01.jpg",
        price: "0.34",
        authorLink: "/author-2"
    },
    {
        id: 2,
        title: "Vintage spark plug",
        image: "/assets/images/box-item/card-item-36.jpg",
        creator: "James Brown",
        avatar: "/assets/images/avatar/avatar-box-02.jpg",
        price: "0.42",
        authorLink: "/author-2"
    },
    {
        id: 3,
        title: "Chrome engine cover",
        image: "/assets/images/box-item/card-item-37.jpg",
        creator: "Alice Johnson",
        avatar: "/assets/images/avatar/avatar-box-03.jpg",
        price: "1.12",
        authorLink: "/author-3"
    },
    {
        id: 4,
        title: "High performance",
        image: "/assets/images/box-item/card-item-38.jpg",
        creator: "Ethan Hunt",
        avatar: "/assets/images/avatar/avatar-box-04.jpg",
        price: "0.76",
        authorLink: "/author-4"
    },
    {
        id: 1,
        title: "Dayco serpentine belt",
        image: "/assets/images/box-item/card-item-35.jpg",
        creator: "Kristin Watson",
        avatar: "/assets/images/avatar/avatar-box-01.jpg",
        price: "0.34",
        authorLink: "/author-2"
    },
    {
        id: 2,
        title: "Vintage spark plug",
        image: "/assets/images/box-item/card-item-36.jpg",
        creator: "James Brown",
        avatar: "/assets/images/avatar/avatar-box-02.jpg",
        price: "0.42",
        authorLink: "/author-2"
    },
    {
        id: 3,
        title: "Chrome engine cover",
        image: "/assets/images/box-item/card-item-37.jpg",
        creator: "Alice Johnson",
        avatar: "/assets/images/avatar/avatar-box-03.jpg",
        price: "1.12",
        authorLink: "/author-3"
    },
    {
        id: 4,
        title: "High performance",
        image: "/assets/images/box-item/card-item-38.jpg",
        creator: "Ethan Hunt",
        avatar: "/assets/images/avatar/avatar-box-04.jpg",
        price: "0.76",
        authorLink: "/author-4"
    }
]

export default function UserProductCards() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    return (
        <div className="max-w-screen-lg mx-auto py-2">
            <div className="flex flex-wrap">
                {mockProducts.map((product, index) => (
                    <div
                        key={product.id}
                        data-wow-delay={`${0.2 + index * 0.1}s`}
                        className="wow fadeInUp fl-item px-3 mb-6 col-xl-3 col-lg-4 col-md-6 col-sm-6 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4"
                    >
                        <div className="tf-card-box style-1 flex flex-col justify-between min-h-[380px] rounded-lg bg-neutral-900 p-4">
                            <div>
                                <div className="card-media mb-3">
                                    <Link href="#">
                                        <img src={product.image} alt={product.title} className="rounded-lg" />
                                    </Link>
                                    <span className="wishlist-button icon-heart" />
                                    {/* <div className="button-place-bid mt-2">
                                        <a onClick={handleBidModal} href="#" className="tf-button">
                                            <span>Place Bid</span>
                                        </a>
                                    </div> */}
                                </div>
                                <h5 className="name mb-2">
                                    <Link href="#">{product.title}</Link>
                                </h5>
                                <div className="author flex items-center mb-3">
                                    <div className="avatar mr-2 w-8 h-8 rounded-full overflow-hidden">
                                        <img src={product.avatar} alt="Avatar" />
                                    </div>
                                    <div className="info">
                                        <span className="text-gray-400 text-xs">Created by:</span>
                                        <h6>
                                            <Link href={product.authorLink}>{product.creator}</Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="divider border-b border-neutral-700 mb-2" />
                                <div className="meta-info flex items-center justify-between text-white">
                                    <span className="text-bid text-gray-400">Current Price</span>
                                    <h6 className="price gem flex items-center">
                                        $ {product.price}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}