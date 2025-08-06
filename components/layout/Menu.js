import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
                <li className="menu-item ">
                    <Link href="/" className={router.pathname == "/" ? "menu-item current-item" : "menu-item"}>Home</Link>
                </li>
                <li className={router.pathname == "/home" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/about-us">About us</Link>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a>Explore</a>
                    <ul className="sub-menu">
                        <li className={router.pathname == "/explore-1" ? "menu-item current-item" : "menu-item"}><Link href="/explore-1">Explore Style 1</Link></li>
                        <li className={router.pathname == "/product-detail-2" ? "menu-item current-item" : "menu-item"}><Link href="/product-detail-2">Product Detail 2</Link></li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a>Pages</a>
                    <ul className="sub-menu">

                        <li className={router.pathname == "/terms-condition" ? "menu-item current-item" : "menu-item"}><Link href="/terms-condition">Terms &amp; Condition</Link></li>
                        <li className={router.pathname == "/faq" ? "menu-item current-item" : "menu-item"}><Link href="/faq">FAQs</Link></li>
                        <li className={router.pathname == "/coming-soon" ? "menu-item current-item" : "menu-item"}><Link href="/coming-soon">Coming Soon</Link></li>
                        <li className={router.pathname == "/login" ? "menu-item current-item" : "menu-item"}><Link href="/login">Login</Link></li>
                        <li className={router.pathname == "/sign-up" ? "menu-item current-item" : "menu-item"}><Link href="/sign-up">Sign up</Link></li>
                    </ul>
                </li>
                <li className="menu-item">
                    <Link href="/blog-grid">Blog</Link>
                </li>
                <li className={router.pathname == "/contact-us" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/contact-us">Contact</Link>
                </li>
                <li className={router.pathname == "/contact-us" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/creator-profile">Creator profile</Link>
                </li>
                <li className={router.pathname == "/contact-us" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/asset-listing">Asset Listing</Link>
                </li>
                <li className={router.pathname == "/contact-us" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/creator-dashboard">Creator dashboard</Link>
                </li>
            </ul>
        </>
    )
}
