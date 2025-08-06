import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useState } from "react"
import ProductCard from './ProductCard'
import {
    Gamepad2,
    Package,
    Palette,
    User,
    Music,
    Volume2,
    MoreHorizontal,
    DollarSign,
    Crown,
    ShieldCheck,
    Users,
    TrendingUp,
    Star,
    Clock,
    Zap,
    Gift,
    Award,
    Sparkles,
    CheckCircle,
    Gamepad,
    Copyright,
    CopyrightIcon,
    Dock,
    ArrowUpWideNarrow,
    ArrowUpDown,
    TimerResetIcon
} from 'lucide-react'

const currentTime = new Date()

export default function DiscoverItem1() {
    const [isBidModal, setBidModal] = useState(false)

    const [selectedGames, setSelectedGames] = useState([]);
    const [selectedAssets, setSelectedAssets] = useState([]);
    const [selectedLicense, setSelectedLicense] = useState("Resell");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedSort, setSelectedSort] = useState("Trending");

    const games = [
        { name: "Roblox", icon: "roblox" },
        { name: "Minecraft", icon: "minecraft" },
        { name: "Comming Soon", icon: "commingsoon" }
    ];

    const gameIcons = {
        roblox: <img className='h-8 w-8' src='/assets/images/games/roblox.png' alt="Roblox" />,
        minecraft: <img className='h-8 w-8' src='/assets/images/games/minecraft.png' alt="Minecraft" />,
        commingsoon: <TimerResetIcon />
    };

    const assetTypes = [
        { name: "3D Models", icon: Package },
        { name: "Skins / texture", icon: Palette },
        { name: "Props & Objects", icon: Gift },
        { name: "Avatar / Character", icon: User },
        { name: "Animation", icon: Zap },
        { name: "Sound / Music", icon: Music },
        { name: "Others", icon: MoreHorizontal }
    ];

    const licenseOptions = [
        { name: "Free to Use", icon: Gift },
        { name: "Commercial with Royalty", icon: DollarSign },
        { name: "Personel Use Only", icon: User },
        { name: "Resell", icon: TrendingUp }
    ];

    const options = [
        { name: 'Crowdfunded', icon: Users },
        { name: 'Limited Edition', icon: Crown },
        { name: 'Premium Launch', icon: Sparkles },
        { name: 'Community Picks', icon: Award },
    ];

    const sortOptions = [
        { name: "Most Popular", icon: Star },
        { name: "Trending", icon: TrendingUp },
        { name: "Newest", icon: Sparkles },
        { name: "Ending Soon", icon: Clock },
        { name: "Top Rated", icon: Award },
    ];

    const handleBidModal = () => setBidModal(!isBidModal)

    const toggleGame = (game) => {
        setSelectedGames((prevSelected) =>
            prevSelected.includes(game)
                ? prevSelected.filter((g) => g !== game)
                : [...prevSelected, game]
        );
    };

    const toggleAsset = (asset) => {
        setSelectedAssets((prevSelected) =>
            prevSelected.includes(asset)
                ? prevSelected.filter((a) => a !== asset)
                : [...prevSelected, asset]
        );
    };

    const toggleOption = (option) => {
        setSelectedTypes((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const cards = [
        { image: "/assets/images/box-item/discoverItems/Sci-fiWeaponFXSystem.png", avatar: "/assets/images/avatar/avatar-box-11.png", delay: "0s", name: "Sci-fi Weapon FX System",creatorName: "John Doe", price: "12.00" },
        { image: "/assets/images/box-item/discoverItems/Tactical Helmet with HUD Visor.png", avatar: "/assets/images/avatar/avatar-box-10.png", delay: "0.1s", name: "Tactical Helmet with Visor", creatorName: "Jane Smith", price: "15.00" },
        { image: "/assets/images/box-item/discoverItems/Mech Robo.png", avatar: "/assets/images/avatar/avatar-box-04.png", delay: "0.2s", name: "Mech Robo" , creatorName: "Alice Johnson", price: "20.00" },
        { image: "/assets/images/box-item/discoverItems/Baby Dino.png", avatar: "/assets/images/avatar/avatar-box-06.png", delay: "0.3s", name: "Baby Dino", creatorName: "Bob Brown", price: "8.00" },
        { image: "/assets/images/box-item/discoverItems/Futuristic Bike.png", avatar: "/assets/images/avatar/avatar-box-09.png", delay: "0.2s", name: "Futuristic Bike", creatorName: "Charlie Davis", price: "25.00" },
        { image: "/assets/images/box-item/discoverItems/Cannon.png", avatar: "/assets/images/avatar/avatar-box-08.png", delay: "0.2s", name: "Cannon", creatorName: "David Wilson", price: "18.00" },
        { image: "/assets/images/box-item/discoverItems/Sci-fiWeaponFXSystem.png", avatar: "/assets/images/avatar/avatar-box-07.png", delay: "0s", name: "Sci-fi Weapon FX System", creatorName: "Eve Taylor", price: "12.00" },
        { image: "/assets/images/box-item/discoverItems/Lightning Hut.png", avatar: "/assets/images/avatar/avatar-box-05.png", delay: "0.1s", name: "Lightning Hut", creatorName: "Frank Miller", price: "10.00" },
    ];

    return (
        <>
            <div className="tf-section-3 discover-item ">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section pb-30">
                                <h2 className="tf-title ">Discover item</h2>
                                <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link>
                            </div>
                        </div>
                        <div className="col-md-12 pb-30">
                            <div className="tf-soft flex items-center justify-between">
                                <div className="soft-left">
                                    <Menu as="div" className="dropdown">
                                        <Menu.Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                            <Gamepad />
                                            <span className="inner">Games</span>
                                        </Menu.Button>

                                        <Menu.Items as="div" className="dropdown-menu d-block !min-w-full" aria-labelledby="dropdownMenuButton">
                                            {games.map((game) => {
                                                const isSelected = selectedGames.includes(game.name);
                                                return (
                                                    <a key={game.name} className="dropdown-item" onClick={() => toggleGame(game.name)}>
                                                        <div className={`sort-filter ${isSelected ? "active" : ""}`}>
                                                            <span className='flex justify-center items-center'>
                                                                <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
                                                                    {gameIcons[game.icon]}
                                                                </span>
                                                                <span>{game.name}</span>
                                                            </span>
                                                            <span className="icon-tick">
                                                                {isSelected && <span className="path2" />}
                                                            </span>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </Menu.Items>
                                    </Menu>

                                    <Menu as="div" className="dropdown">
                                        <Menu.Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" aria-haspopup="true" aria-expanded="false">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 6.25L15.625 5.15583M17.5 6.25V8.125M17.5 6.25L15.625 7.34417M2.5 6.25L4.375 5.15583M2.5 6.25L4.375 7.34417M2.5 6.25V8.125M10 10.625L11.875 9.53083M10 10.625L8.125 9.53083M10 10.625V12.5M10 18.125L11.875 17.0308M10 18.125V16.25M10 18.125L8.125 17.0308M8.125 2.96833L10 1.875L11.875 2.96917M17.5 11.875V13.75L15.625 14.8442M4.375 14.8442L2.5 13.75V11.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span className="inner">Assets Type</span>
                                        </Menu.Button>

                                        <Menu.Items as="div" className="dropdown-menu d-block lg:-left-[10px]" aria-labelledby="dropdownMenuButton2">
                                            {assetTypes.map((type) => {
                                                const isSelected = selectedAssets.includes(type.name);
                                                const IconComponent = type.icon;
                                                return (
                                                    <a key={type.name} className="dropdown-item" onClick={() => toggleAsset(type.name)}>
                                                        <div className={`sort-filter ${isSelected ? "active" : ""}`}>
                                                            <span className='flex justify-center items-center'>
                                                                <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
                                                                    <IconComponent size={16} />
                                                                </span>
                                                                <span>{type.name}</span>
                                                            </span>
                                                            <span className="icon-tick">
                                                                {isSelected && <span className="path2" />}
                                                            </span>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </Menu.Items>
                                    </Menu>

                                    <Menu as="div" className="dropdown">
                                        <Menu.Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" aria-haspopup="true" aria-expanded="false">
                                            <Copyright />
                                            <span className="inner">License Type</span>
                                        </Menu.Button>

                                        <Menu.Items as="div" className="dropdown-menu d-block !min-w-[270px] lg:-left-[30px]" aria-labelledby="dropdownMenuButton3">
                                            {licenseOptions.map((option) => {
                                                const IconComponent = option.icon;
                                                return (
                                                    <a key={option.name} className="dropdown-item " onClick={() => setSelectedLicense(option.name)}>
                                                        <div className={`sort-filter ${selectedLicense === option.name ? "active" : ""}`}>
                                                            <span className='flex justify-center items-center'>
                                                                <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
                                                                    <IconComponent size={16} />
                                                                </span>
                                                                <span>{option.name}</span>
                                                            </span>
                                                            <span className="icon-tick">
                                                                {selectedLicense === option.name && <span className="path2" />}
                                                            </span>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </Menu.Items>
                                    </Menu>

                                    <Menu as="div" className="dropdown">
                                        <Menu.Button className="btn btn-secondary dropdown-toggle" type="button">
                                            <Dock />
                                            <span className="inner">Launch Type</span>
                                        </Menu.Button>

                                        <Menu.Items as="div" className="dropdown-menu d-block lg:-left-[10px]">
                                            {options.map((option) => {
                                                const IconComponent = option.icon;
                                                return (
                                                    <div
                                                        key={option.name}
                                                        className={`dropdown-item cursor-pointer`}
                                                        onClick={() => toggleOption(option.name)}
                                                    >
                                                        <div className={`sort-filter ${selectedTypes.includes(option.name) ? 'active' : ''}`}>
                                                            <span className='flex justify-center items-center'>
                                                                <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
                                                                    <IconComponent size={16} />
                                                                </span>
                                                                <span>{option.name}</span>
                                                            </span>
                                                            <span className="icon-tick">
                                                                {selectedTypes.includes(option.name) && <span className="path2" />}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </Menu.Items>
                                    </Menu>
                                </div>
                                <div className="soft-right">
                                    <Menu as="div" className="dropdown">
                                        <Menu.Button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton4"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <ArrowUpDown />
                                            <span>Sort by: {selectedSort}</span>
                                        </Menu.Button>

                                        <Menu.Items
                                            as="div"
                                            className="dropdown-menu d-block !min-w-[265px] lg:-left-[10px]"
                                            aria-labelledby="dropdownMenuButton4"
                                        >
                                            <h6>Sort by</h6>

                                            {sortOptions.map((option) => {
                                                const IconComponent = option.icon;
                                                return (
                                                    <div key={option.name} className="dropdown-item">
                                                        <div
                                                            className={`sort-filter ${selectedSort === option.name ? "active" : ""}`}
                                                            onClick={() => setSelectedSort(option.name)}
                                                        >
                                                            <span className='flex justify-center items-center'>
                                                                <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
                                                                    <IconComponent size={16} />
                                                                </span>
                                                                <span>{option.name}</span>
                                                            </span>
                                                            <span className="icon-tick">
                                                                {selectedSort === option.name && <span className="path2" />}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}

                                            <h6>Creator Badges</h6>

                                            <div className="dropdown-item">
                                                <div className="sort-filter">
                                                    <span className='flex justify-center items-center'>
                                                        <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
                                                            <ShieldCheck size={16} />
                                                        </span>
                                                        <span>Verified Creators Only</span>
                                                    </span>
                                                    <input
                                                        className="check"
                                                        type="checkbox"
                                                        name="check"
                                                        defaultChecked
                                                    />
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="sort-filter">
                                                    <span className='flex justify-center items-center'>
                                                        <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
                                                            <Star size={16} />
                                                        </span>
                                                        <span>Featured Launches</span>
                                                    </span>
                                                    <input className="check" type="checkbox" name="check" />
                                                </div>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        {/* cards */}
                        {cards.map((card, index) => (
                            <ProductCard
                                key={index}
                                image={card.image}
                                avatar={card.avatar}
                                delay={card.delay}
                                name={card.name}
                                creatorName={card.creatorName || "Unknown Creator"}
                                price={card.price || "0.00"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}