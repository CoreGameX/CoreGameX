import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <nav id="mobile-main-nav" className="mobile-main-nav">
                <ul id="menu-mobile-menu" className="menu">
                    <li className="menu-item" >
                        <Link className="item-menu-mobile" href="/">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/about-us">About us</Link>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(2)}>
                        <a className="item-menu-mobile">Explore</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/explore-1">Explore Style 1</Link></li>
                            <li className="menu-item"><Link href="/product-detail-2">Product Detail 2</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(3)}>
                        <a className="item-menu-mobile">Pages</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/terms-condition">Terms &amp; Condition</Link></li>
                            <li className="menu-item"><Link href="/faq">FAQs</Link></li>
                            <li className="menu-item"><Link href="/coming-soon">Coming Soon</Link></li>
                            <li className="menu-item"><Link href="/login">Login</Link></li>
                            <li className="menu-item"><Link href="/sign-up">Sign up</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item ">
                            <Link className="item-menu-mobile" href="/blog-grid">Blog</Link></li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/contact-us">Contact</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/creator-profile">Creator Profile</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/asset-listing">Asset listing</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/creator-dashboard">Creator dashboard</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
