import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer id="footer">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-content flex justify-between items-start flex-wrap">
                                <div className="widget-logo justify-between">
                                    <div className="logo-footer" id="logo-footer">
                                        <Link href="/" className="flex items-center group">
                                            <div className="w-64 lg:w-80  rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                                                <img
                                                    src="/assets/images/logo/coreGameX.png"
                                                    alt="CoreGameX Logo"
                                                    className="w-full h-full  transition-transform duration-300"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.parentNode.innerHTML = `
                                        <div class='w-full h-full bg-neutral-300 rounded-xl flex items-center justify-center shadow-lg'>
                                        <span class='text-black font-bold text-2xl lg:text-4xl'>CG</span>
                                        </div>
                                        `;
                                                    }}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="widget widget-menu style-1">
                                    <h5 className="title-widget">Quick Links</h5>
                                    <ul>
                                        <li><Link href="#">Explore</Link></li>
                                        <li><Link href="#">Drops</Link></li>
                                        <li><Link href="#">Auction</Link></li>
                                        <li><Link href="#">API</Link></li>
                                        <li><Link href="#">Coin</Link></li>
                                        <li><Link href="#">Studio</Link></li>
                                        <li><Link href="#">Launchpad</Link></li>
                                        <li><Link href="#">Blog</Link></li>
                                        <li><Link href="#">Perform Guide</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-2">
                                    <h5 className="title-widget">Resource</h5>
                                    <ul>
                                        <li><Link href="#">Help center</Link></li>
                                        <li><Link href="#">Platform status</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                        <li><Link href="#">FAQ</Link></li>
                                    </ul>
                                </div>

                                <div className="widget-last">
                                    <div className="widget-menu style-4">
                                        <h5 className="title-widget">Company</h5>
                                        <ul>
                                            <li><Link href="#">About Us</Link></li>
                                            <li><Link href="#">Career</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                    <h5 className="title-widget mt-30">Join the community</h5>
                                    <div className="widget-social">
                                        <ul className="flex">
                                            <li>
                                                <Link
                                                    href="#"
                                                    aria-label="Discord"
                                                    className="w-10 h-10 flex items-center justify-center text-white bg-neutral-800 rounded-full transition-colors hover:bg-[#5865f2]"
                                                >
                                                    <i className="fab fa-discord"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    aria-label="X (Twitter)"
                                                    className="w-10 h-10 flex items-center justify-center text-white bg-neutral-800 rounded-full transition-colors hover:bg-[#1e1e1f]"
                                                >
                                                    <i className="fab fa-x-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    aria-label="YouTube"
                                                    className="w-10 h-10 flex items-center justify-center text-white bg-neutral-800 rounded-full transition-colors hover:bg-[#c00]"
                                                >
                                                    <i className="fab fa-youtube "></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    aria-label="LinkedIn"
                                                    className="w-10 h-10 flex items-center justify-center text-white bg-neutral-800 rounded-full transition-colors hover:bg-[#0a66c2]"
                                                >
                                                    <i className="fab fa-linkedin-in "></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} CoreGameX</p>
                        <div className="flex text-2xl">
                            Built for Gamers, Creators, and Studios.
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
