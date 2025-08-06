import Link from "next/link"
import { useRouter } from "next/router"
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
    const router = useRouter()
    const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false)

    return (
        <div>
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideDownItem {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
                
                .animate-slideDownItem {
                    opacity: 0;
                    animation: slideDownItem 0.4s ease-out forwards;
                }
            `}</style>
            <header className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scroll
                ? "bg-black/95 backdrop-blur-lg "
                : "bg-black/80 backdrop-blur-sm"
                }`}>
                <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-24 mt-2">
                    <div className="flex items-center justify-between h-24 lg:h-32">

                        {/* Logo Section */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center group">
                                <div className="w-64 lg:w-80 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                                    <img
                                        src="/assets/images/logo/coreGameX.png"
                                        alt="CoreGameX Logo"
                                        className="w-full h-full transition-transform duration-300"
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

                        {/* Center Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {/* Marketplace Dropdown */}
                            <div className="relative">
                                <div
                                    className="flex items-center py-4 space-x-1 text-neutral-200 hover:text-white font-semibold text-xl transition-all duration-300"
                                    onMouseEnter={() => setIsMarketplaceOpen(true)}
                                    onMouseLeave={() => setIsMarketplaceOpen(false)}
                                >
                                    <span>Marketplace</span>
                                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${isMarketplaceOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Dropdown Menu */}
                                {isMarketplaceOpen && (
                                    <div
                                        className="absolute top-full w-40 bg-black/95 backdrop-blur-lg border border-neutral-900 rounded-xl shadow-neutral-950 shadow-md"
                                        onMouseEnter={() => setIsMarketplaceOpen(true)}
                                        onMouseLeave={() => setIsMarketplaceOpen(false)}
                                    >
                                        <Link href="/coming-soon" className="block px-4 py-2 text-lg text-neutral-200 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-t-xl">
                                            Explore
                                        </Link>
                                        <Link href="/coming-soon" className="block px-4 py-2 text-lg text-neutral-200 hover:text-white hover:bg-white/10 transition-all duration-300">
                                            Drops
                                        </Link>
                                        <Link href="/coming-soon" className="block px-4 py-2 text-lg text-neutral-200 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-b-xl">
                                            Auctions
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/coming-soon" className="text-neutral-200 hover:text-white font-semibold text-xl transition-all duration-300">
                                API
                            </Link>

                            <Link href="/coin" className="text-neutral-200 hover:text-white font-semibold text-xl transition-all duration-300">
                                Coin
                            </Link>

                            <Link href="/coming-soon" className="text-neutral-200 hover:text-white font-semibold text-xl transition-all duration-300">
                                Platform Guide
                            </Link>

                            <Link href="/coming-soon" className="text-neutral-200 hover:text-white font-semibold text-xl transition-all duration-300">
                                Careers
                            </Link>

                            <Link href="/coming-soon" className="text-neutral-200 hover:text-white font-semibold text-xl transition-all duration-300">
                                News
                            </Link>
                        </nav>

                        {/* Right CTA Section */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* About Us - Outline Button (like Launchpad) */}
                            <Link href="/about-us" className="p-[1px] bg-neutral-500 rounded-2xl">
                                <div className="px-6 py-3 text-neutral-200 hover:text-white font-semibold text-lg rounded-2xl bg-black hover:bg-neutral-900 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                                    About Us
                                </div>
                            </Link>

                            {/* Launchpad - Outline Button */}
                            <Link href="/launchpad" className="p-[1px] bg-neutral-500 rounded-2xl">
                                <div className="px-6 py-3 text-neutral-200 hover:text-white font-semibold text-lg rounded-2xl bg-black hover:bg-neutral-900 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                                    Launchpad
                                </div>
                            </Link>

                            {/* I'm a Studio - Outline Button */}
                            <Link href="/studio" className="p-[1px] bg-neutral-500 rounded-2xl">
                                <div className="px-6 py-3 text-neutral-200 hover:text-white font-semibold text-lg rounded-2xl bg-black hover:bg-neutral-900 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                                    I'm a Studio
                                </div>
                            </Link>

                            {/* Demo - Glow Variant (High Priority) */}
                            <Link href="/demo" className="p-[1px] bg-gradient-to-r from-white to-neutral-300 rounded-2xl">
                                <div className="px-8 py-3 text-neutral-950 hover:text-black font-semibold text-lg rounded-2xl bg-white hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                                    Demo
                                </div>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div
                            onClick={handleMobileMenu}
                            className="lg:hidden bg-black text-neutral-300/90 transition-all duration-300 cursor-pointer"
                        >
                            {isMobileMenu ? <X size={25} /> : <Menu size={25} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Overlay */}
                {isMobileMenu && (
                    <div className="lg:hidden fixed inset-0 top-24 z-40 animate-slideDown">
                        <div className="px-6 py-8 bg-black/90 backdrop-blur-lg animate-slideDown">
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '0.1s' }}></div>

                            {/* Mobile Marketplace Section with Dropdown */}
                            <div className="px-6 py-4 animate-slideDownItem" style={{ animationDelay: '0.2s' }}>
                                <div
                                    className="text-neutral-200 font-semibold text-lg pt-2 flex items-center justify-center gap-2 cursor-pointer"
                                    onClick={() => setIsMarketplaceOpen(!isMarketplaceOpen)}
                                >
                                    <span>Marketplace</span>
                                    <ChevronDown size={16} className={`transform transition-transform duration-200 ${isMarketplaceOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Mobile Marketplace Dropdown */}
                                <div className={`${isMarketplaceOpen ? 'block h-[1px] bg-neutral-800 mt-4' : 'hidden'}`} style={{ animationDelay: '0.5s' }}></div>
                                <div className={`overflow-hidden transition-all duration-300 ${isMarketplaceOpen ? ' opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <Link
                                        href="/coming-soon"
                                        className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                        onClick={handleMobileMenu}
                                    >
                                        Explore
                                    </Link>
                                    <div className="block h-[1px] bg-neutral-800" style={{ animationDelay: '0.7s' }}></div>

                                    <Link
                                        href="/coming-soon"
                                        className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                        onClick={handleMobileMenu}
                                    >
                                        Drops
                                    </Link>
                                    <div className="block h-[1px] bg-neutral-800" style={{ animationDelay: '0.7s' }}></div>

                                    <Link
                                        href="/coming-soon"
                                        className="block px-6 pt-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                        onClick={handleMobileMenu}
                                    >
                                        Auctions
                                    </Link>
                                </div>
                            </div>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '0.3s' }}></div>

                            <Link
                                href="/coming-soon"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '0.4s' }}
                            >
                                API
                            </Link>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '0.5s' }}></div>

                            <Link
                                href="/coin"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '0.6s' }}
                            >
                                Coin
                            </Link>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '0.7s' }}></div>

                            <Link
                                href="/coming-soon"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '0.8s' }}
                            >
                                Platform Guide
                            </Link>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '0.9s' }}></div>

                            <Link
                                href="/coming-soon"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '1.0s' }}
                            >
                                Careers
                            </Link>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '1.1s' }}></div>

                            <Link
                                href="/coming-soon"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '1.2s' }}
                            >
                                News
                            </Link>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '1.3s' }}></div>

                            <Link
                                href="/about-us"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '1.4s' }}
                            >
                                About Us
                            </Link>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '1.5s' }}></div>

                            <Link
                                href="/launchpad"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '1.6s' }}
                            >
                                Launchpad
                            </Link>
                            <div className="block h-[1px] bg-neutral-800 animate-slideDownItem" style={{ animationDelay: '1.7s' }}></div>

                            <Link
                                href="/studio"
                                className="block px-6 py-4 text-neutral-200 text-center hover:text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '1.8s' }}
                            >
                                I'm a Studio
                            </Link>

                            <Link
                                href="/demo"
                                className="block px-8 py-4 mt-4 bg-white text-neutral-950 font-semibold text-lg hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 text-center shadow-xl shadow-white/10 rounded-xl animate-slideDownItem"
                                onClick={handleMobileMenu}
                                style={{ animationDelay: '1.9s' }}
                            >
                                Demo
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer */}
            <div className="h-24 lg:h-32"></div>
        </div>
    )
}