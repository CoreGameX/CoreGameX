import Link from 'next/link';
import React, { useState } from 'react';
import { Download, Eye, Heart, MoreVertical } from 'lucide-react';

export default function MyAssets() {
    const [activeTab, setActiveTab] = useState('single');

    const singleAssets = [
        {
            id: 1,
            image: '/assets/images/box-item/collectionPack/collection-01.jpg',
            title: '3D Preview Model',
            user: 'Alex Johnson',
            category: '3D Model',
            price: '$29.99',
            downloads: 245,
            likes: 18
        },
        {
            id: 2,
            image: '/assets/images/box-item/discoverItems/Futuristic Bike.png',
            title: 'Futuristic Bike Design',
            user: 'Sarah Chen',
            category: '3D Model',
            price: '$45.00',
            downloads: 189,
            likes: 32
        },
        {
            id: 3,
            image: '/assets/images/box-item/featuredSlider/Ocean Shader Toolkit.png',
            title: 'Abstract Art Collection',
            user: 'Mike Rodriguez',
            category: 'Digital Art',
            price: '$19.99',
            downloads: 567,
            likes: 41
        },
        {
            id: 4,
            image: '/assets/images/box-item/discoverItems/Sci-fiWeaponFXSystem.png',
            title: 'Cyberpunk Environment',
            user: 'Emma Taylor',
            category: '3D Environment',
            price: '$67.50',
            downloads: 298,
            likes: 67
        },
        {
            id: 5,
            image: '/assets/images/box-item/featuredSlider/robotic arm.png',
            title: 'Character Animation Set',
            user: 'David Kim',
            category: 'Animation',
            price: '$89.99',
            downloads: 156,
            likes: 29
        },
        {
            id: 20,
            image: '/assets/images/box-item/featuredSlider/Galaxy Back Bling.png',
            title: 'Cyberpunk Environment',
            user: 'Emma Taylor',
            category: '3D Environment',
            price: '$67.50',
            downloads: 298,
            likes: 67
        },
        {
            id: 21,
            image: '/assets/images/box-item/titleSlider1/MagicalFXOrbPack.png',
            title: 'Character Animation Set',
            user: 'David Kim',
            category: 'Animation',
            price: '$89.99',
            downloads: 156,
            likes: 29
        },
        {
            id: 22,
            image: '/assets/images/box-item/featuredSlider/Neon Racer Car.png',
            title: 'Character Animation Set',
            user: 'David Kim',
            category: 'Animation',
            price: '$89.99',
            downloads: 156,
            likes: 29
        }
    ];

    const collectionPack = [
        {
            id: 6,
            image: '/assets/images/box-item/featuredSlider/AI Enemy Pack.png',
            title: 'Minimalist Icons Pack',
            user: 'Lisa Wang',
            category: 'UI/UX',
            price: '$24.99',
            downloads: 1234,
            likes: 89,
            items: 24
        },
        {
            id: 7,
            image: '/assets/images/box-item/featuredSlider/Fantasy Castle Builder.png',
            title: 'Fantasy Weapon Collection',
            user: 'John Martinez',
            category: '3D Model',
            price: '$39.99',
            downloads: 456,
            likes: 76,
            items: 12
        },
        {
            id: 8,
            image: '/assets/images/box-item/featuredSlider/Galaxy Back Bling.png',
            title: 'Space Station Interior',
            user: 'Rachel Green',
            category: '3D Environment',
            price: '$55.00',
            downloads: 298,
            likes: 45,
            items: 8
        },
        {
            id: 9,
            image: '/assets/images/box-item/featuredSlider/Post-Apocalyptic Armor.png',
            title: 'Vintage Car Models',
            user: 'Tom Wilson',
            category: '3D Model',
            price: '$34.99',
            downloads: 367,
            likes: 52,
            items: 15
        },
        {
            id: 10,
            image: '/assets/images/box-item/featuredSlider/Shadow Sniper Pack.png',
            title: 'Vintage Car Models',
            user: 'Tom Wilson',
            category: '3D Model',
            price: '$34.99',
            downloads: 367,
            likes: 52,
            items: 15
        },
        {
            id: 11,
            image: '/assets/images/box-item/featuredSlider/Neon Racer Car.png',
            title: 'Vintage Car Models',
            user: 'Tom Wilson',
            category: '3D Model',
            price: '$34.99',
            downloads: 367,
            likes: 52,
            items: 15
        },
        {
            id: 12,
            image: '/assets/images/box-item/featuredSlider/NetherParticleFXPack.png',
            title: 'Vintage Car Models',
            user: 'Tom Wilson',
            category: '3D Model',
            price: '$34.99',
            downloads: 367,
            likes: 52,
            items: 15
        }
    ];

    const assetsToShow = activeTab === 'single' ? singleAssets : collectionPack;
    const totalValue = assetsToShow.reduce((sum, asset) => sum + parseFloat(asset.price.replace('$', '')), 0);

    return (
        <div className="lg:ml-96 min-h-screen w-full px-20 bg-neutral-900 text-white scroll-smooth">
            {/* Header Section */}
            <div className="mx-4 py-12 px-6 sm:px-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        {/* Title */}
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">My Assets</h1>
                        </div>

                        {/* Stats Cards */}
                        <div className="flex gap-4">
                            <div className="bg-neutral-700 rounded-xl p-6 text-center min-w-[120px]">
                                <p className="text-3xl font-bold text-white">{assetsToShow.length}</p>
                                <p className="text-sm text-neutral-400 mt-1">
                                    {activeTab === 'single' ? 'Assets' : 'Packs'}
                                </p>
                            </div>
                            <div className="bg-neutral-700 rounded-xl p-6 text-center min-w-[120px]">
                                <p className="text-3xl font-bold text-white">${totalValue.toFixed(2)}</p>
                                <p className="text-sm text-neutral-400 mt-1">Total Value</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation and Content */}
            <div className="px-6 sm:px-10 py-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Navigation Tabs */}
                    <div className="mb-10">
                        <nav className="flex w-full max-w-md bg-neutral-800 rounded-2xl p-1">
                            <button
                                onClick={() => setActiveTab('single')}
                                className={`flex-1 px-6 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 ${
                                    activeTab === 'single'
                                        ? 'bg-white text-neutral-900 shadow-lg'
                                        : 'text-neutral-400 hover:text-white hover:bg-neutral-700'
                                }`}
                            >
                                Single Assets
                            </button>
                            <button
                                onClick={() => setActiveTab('collection')}
                                className={`flex-1 px-6 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 ${
                                    activeTab === 'collection'
                                        ? 'bg-white text-neutral-900 shadow-lg'
                                        : 'text-neutral-400 hover:text-white hover:bg-neutral-700'
                                }`}
                            >
                                Collection Packs
                            </button>
                        </nav>
                    </div>

                    {/* Assets Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6  sm:gap-12  lg:gap-16">
                        {assetsToShow.map(asset => (
                            <div key={asset.id} className="group bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl">
                                {/* Image Container */}
                                <div className="relative aspect-[7/6] overflow-hidden">
                                    <img 
                                        src={asset.image} 
                                        alt={asset.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    
                                    {/* Collection Badge */}
                                    {activeTab === 'collection' && asset.items && (
                                        <div className="absolute top-3 left-3 bg-white text-neutral-900 px-2 py-1 rounded-lg text-xs font-semibold">
                                            {asset.items} items
                                        </div>
                                    )}

                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Category Badge */}
                                    <div className="flex items-center justify-between ">
                                        <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-lg text-xs font-medium">
                                            {asset.category}
                                        </span>
                                        <button className="text-neutral-400 h-auto hover:text-white transition-colors">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-neutral-200 transition-colors">
                                        {asset.title}
                                    </h3>

                                    {/* Creator */}
                                    <p className="text-neutral-400 text-sm mb-2">
                                        by {asset.user}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between mb-2 text-sm">
                                        <div className="flex items-center gap-4 text-neutral-500">
                                            <span className="flex items-center gap-1">
                                                <Download size={12} />
                                                {asset.downloads}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Heart size={12} />
                                                {asset.likes}
                                            </span>
                                        </div>
                                        <span className="text-white font-bold">
                                            {asset.price}
                                        </span>
                                    </div>

                                    {/* Download Button */}
                                    <button className="w-full h-auto bg-white hover:bg-neutral-200 text-lg text-neutral-900 font-semibold py-3 px-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg">
                                        <Download size={16} />
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-white hover:bg-neutral-200 text-neutral-900 font-bold py-4 px-8 rounded-2xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                            Load More {activeTab === 'single' ? 'Assets' : 'Packs'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}