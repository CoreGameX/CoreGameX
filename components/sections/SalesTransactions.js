import { ChevronDown, RotateCcw, Search } from "lucide-react";
import { useState } from "react";

const SalesTransactions = () => {
    const [filters, setFilters] = useState({
        buyer: '',
        game: '',
        asset: '',
        dateRange: ''
    });

    const transactions = [
        {
            buyer: 'PreGamer23',
            asset: 'Modern Car Pack',
            game: 'GTA V',
            salePrice: '$5.00',
            platformFee: '$1.00',
            earnings: '$4.00',
            date: '08/17',
            assetIcon: '🚗',
            gameIcon: '🎮'
        },
        {
            buyer: 'GameLover44',
            asset: 'Weapon Skin Bundle',
            game: 'Roblox',
            salePrice: '$15.00',
            platformFee: '$2.00',
            earnings: '$4.00',
            date: '08/17',
            assetIcon: '🗡️',
            gameIcon: '🎲'
        },
        {
            buyer: 'Juke Smith',
            asset: 'Game Format',
            game: 'GTA V',
            salePrice: '$6.00',
            platformFee: '$1.00',
            earnings: '$4.00',
            date: '08/16',
            assetIcon: '📋',
            gameIcon: '🎮'
        },
        {
            buyer: 'Augmenttopan',
            asset: 'Custom View',
            game: 'GTA V',
            salePrice: '$15.00',
            platformFee: '$2.00',
            earnings: '$4.00',
            date: '08/16',
            assetIcon: '👁️',
            gameIcon: '🎮'
        }
    ];

    const FilterDropdown = ({ placeholder, value, onChange }) => (
        <div className="relative">
            <select
                className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-4 text-neutral-200 appearance-none cursor-pointer hover:bg-neutral-700 transition-colors text-lg"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                    outline: 'none',
                    borderRadius: '0.5rem',
                    backgroundColor: '#262626',
                    color: '#e5e5e5',
                    padding: '1rem'
                }}
            >
                <option value="">{placeholder}</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
        </div>
    );

    return (
        <div className="flex-1 p-4 mt-8 sm:p-6 lg:p-10 bg-neutral-900 overflow-x-auto scrollbar-hide min-h-screen lg:ml-96">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-neutral-100 mt-16 md:mt-0">
                Sales & Transactions
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-10 mb-6 sm:mb-8 bg-neutral-800 p-10 rounded-xl border border-neutral-700">
                <div className="flex flex-col justify-center">
                    <div className="text-neutral-400 text-base sm:text-lg mb-3">Total Earnings</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100">$12,054.67</div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="text-neutral-400 text-base sm:text-lg mb-3">This Month</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100">$2,522.95</div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="text-neutral-400 text-base sm:text-lg mb-3">Pending Payouts</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100">$500.23</div>
                </div>

                <div className="bg-[#f1f1f1] text-neutral-900 px-6 py-4 sm:px-8 sm:py-5 rounded-2xl font-semibold hover:bg-[#ffffff] transition-colors text-lg sm:text-xl w-full sm:w-auto text-center flex items-center justify-center cursor-pointer">
                    Withdraw Funds
                </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 sm:mb-8">
                <div className="lg:col-span-1">
                    <FilterDropdown
                        placeholder="Buyer"
                        value={filters.buyer}
                        onChange={(value) => setFilters({ ...filters, buyer: value })}
                    />
                </div>
                <div className="lg:col-span-1">
                    <FilterDropdown
                        placeholder="Game"
                        value={filters.game}
                        onChange={(value) => setFilters({ ...filters, game: value })}
                    />
                </div>
                <div className="lg:col-span-1">
                    <FilterDropdown
                        placeholder="Asset"
                        value={filters.asset}
                        onChange={(value) => setFilters({ ...filters, asset: value })}
                    />
                </div>
                <div className="relative lg:col-span-1 ">
                    <div className="flex items-center bg-neutral-800 border border-neutral-600 rounded-lg  transition-colors">
                        <input
                            type="text"
                            placeholder="Date Range"
                            className="flex-1 bg-transparent h-[46px] px-4 py-4 text-neutral-200 placeholder-neutral-400 text-base appearance-none outline-none"
                            value={filters.dateRange}
                            onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                            style={{
                                WebkitAppearance: 'none',
                                MozAppearance: 'none',
                                appearance: 'none',
                                outline: 'none',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#e5e5e5'
                            }}
                        />
                        <div className="px-3">
                            <Search className="w-5 h-5 text-neutral-400" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="w-full bg-neutral-800 border border-neutral-600 rounded-lg px-4 py-4 transition-colors flex items-center justify-center gap-2">
                        <RotateCcw className="w-5 h-5 text-neutral-400" />
                        <span className="text-neutral-400 text-base">Reset</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden min-h-[500px]">
                <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="border-b border-neutral-700 bg-neutral-750">
                                <th className="text-left py-6 px-4 sm:px-6 text-neutral-400 font-medium text-base sm:text-lg">Buyer</th>
                                <th className="text-left py-6 px-4 sm:px-6 text-neutral-400 font-medium text-base sm:text-lg">Asset Purchased</th>
                                <th className="text-left py-6 px-4 sm:px-6 text-neutral-400 font-medium text-base sm:text-lg">Game</th>
                                <th className="text-left py-6 px-4 sm:px-6 text-neutral-400 font-medium text-base sm:text-lg">Sale Price</th>
                                <th className="text-left py-6 px-4 sm:px-6 text-neutral-400 font-medium text-base sm:text-lg">Platform Fee</th>
                                <th className="text-left py-6 px-4 sm:px-6 text-neutral-400 font-medium text-base sm:text-lg">Earnings</th>
                                <th className="text-left py-6 px-4 sm:px-6 text-neutral-400 font-medium text-base sm:text-lg">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index} className="border-b border-neutral-700 hover:bg-neutral-750 transition-colors">
                                    <td className="py-6 px-4 sm:px-6 text-neutral-200 text-base sm:text-lg font-medium">{transaction.buyer}</td>
                                    <td className="py-6 px-4 sm:px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-700 rounded-lg flex items-center justify-center text-xl sm:text-2xl">
                                                {transaction.assetIcon}
                                            </div>
                                            <span className="text-neutral-200 text-base sm:text-lg font-medium">{transaction.asset}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 sm:px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-700 rounded-full flex items-center justify-center text-lg sm:text-xl">
                                                {transaction.gameIcon}
                                            </div>
                                            <span className="text-neutral-200 text-base sm:text-lg font-medium">{transaction.game}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 sm:px-6 text-neutral-200 text-base sm:text-lg font-semibold">{transaction.salePrice}</td>
                                    <td className="py-6 px-4 sm:px-6 text-neutral-200 text-base sm:text-lg">{transaction.platformFee}</td>
                                    <td className="py-6 px-4 sm:px-6 text-green-400 text-base sm:text-lg font-semibold">{transaction.earnings}</td>
                                    <td className="py-6 px-4 sm:px-6 text-neutral-400 text-base sm:text-lg">{transaction.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesTransactions;
