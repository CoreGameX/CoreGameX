import Link from 'next/link';
import React from 'react';

const Analytics = () => {
    const assets = [
        { id: 1, name: 'Asset 1', downloads: 567, earnings: 645.0, status: 'Published' },
        { id: 2, name: 'Asset 2', downloads: 415, earnings: 220.0, status: 'Published' },
        { id: 3, name: 'Asset 3', downloads: 298, earnings: 180.0, status: 'Published' },
        { id: 4, name: 'Asset 4', downloads: 220, earnings: 70.0, status: 'Published' },
    ];

    return (
        <div className="flex-1 p-6 md:p-12 bg-neutral-900 overflow-x-auto text-lg md:text-xl lg:ml-96">
            {/* Header */}
            <div className="relative flex justify-center items-start mb-10 mt-12">
                <h1 className= "text-3xl md:text-5xl font-bold text-neutral-100 text-center">
                    Welcome Back{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bbbbbb] to-[#ffffff]">
                        John Doe!
                    </span>
                </h1>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { label: 'Total Earnings', value: '$1,245.00' },
                    { label: 'Total Downloads', value: '3,573' },
                    { label: 'Total Listed Assets', value: '12' },
                    { label: 'Followers', value: '1,589' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700"
                    >
                        <p className="text-md text-neutral-400 mb-2">{item.label}</p>
                        <p className="text-3xl font-extrabold text-neutral-100">{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Asset Table */}
            <div className="bg-neutral-800 rounded-2xl border border-neutral-700 overflow-hidden">
                <div className="p-6 border-b border-neutral-700">
                    <h2 className="text-2xl font-bold text-neutral-100">My Assets</h2>
                </div>

                <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full min-w-[600px]">
                        <thead className="bg-neutral-700">
                            <tr>
                                {['Asset', 'Status', 'Downloads', 'Earnings', 'Actions'].map((header) => (
                                    <th
                                        key={header}
                                        className="px-6 py-3 text-left text-base font-bold text-neutral-100"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {assets.map((asset, index) => (
                                <tr
                                    key={asset.id}
                                    className="border-b border-neutral-700 hover:bg-neutral-750 transition"
                                >
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-10 h-10 rounded-lg ${index === 0
                                                        ? 'bg-amber-800'
                                                        : index === 1
                                                            ? 'bg-amber-900'
                                                            : index === 2
                                                                ? 'bg-amber-700'
                                                                : 'bg-neutral-600'
                                                    }`}
                                            ></div>
                                            <span className="font-medium text-neutral-100 text-base">
                                                {asset.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3">
                                        <span className="px-4 py-1 bg-green-300/10 text-green-300/90 rounded-full text-sm font-semibold">
                                            {asset.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-neutral-100 font-semibold text-base">
                                        {asset.downloads}
                                    </td>
                                    <td className="px-6 py-3 text-neutral-100 font-semibold text-base">
                                        ${asset.earnings.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-3">
                                        <div className="flex gap-3 text-blue-500 font-semibold text-sm">
                                            <a className="cursor-pointer hover:text-blue-400">Edit</a>
                                            <a className="cursor-pointer hover:text-blue-400">Update</a>
                                            <a className="cursor-pointer hover:text-blue-400">Delete</a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Back to Home Button */}
            <div className="flex justify-center mt-10 md:mt-12">
                <Link
                    href="/"
                    className="w-full py-[20px] px-6 bg-gradient-to-r from-[#ffffff] to-[#999999] text-neutral-900 text-xl font-semibold rounded-xl shadow-lg hover:brightness-110 hover:text-black transition duration-200 ease-in-out text-center"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Analytics;
