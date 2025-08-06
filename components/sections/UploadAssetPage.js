import React, { useState } from 'react';
import { Upload, ChevronDown, Check, ArrowLeft } from 'lucide-react';
import { FaCube, FaCubes } from 'react-icons/fa';
import Link from 'next/link';

// Custom Dropdown Component
const CustomSelect = ({ value, onChange, options, placeholder = "Select option..." }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffffff] text-left flex items-center justify-between hover:bg-neutral-600 transition-colors text-lg"
      >
        <span className={value ? 'text-white' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-neutral-700 border border-neutral-600 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-white hover:bg-neutral-600 transition-colors first:rounded-t-lg last:rounded-b-lg text-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Custom Radio Button Component
const CustomRadio = ({ id, name, value, checked, onChange, children }) => {
  return (
    <div className="flex items-center cursor-pointer text-lg" onClick={() => onChange(value)}>
      <div className="relative">
        <div className={`w-5 h-5 rounded-full border-2 transition-colors ${checked
          ? 'border-[#ffffff] bg-[#ffffff]'
          : 'border-neutral-500 bg-neutral-800 hover:border-neutral-400'
          }`}>
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
          )}
        </div>
      </div>
      <label htmlFor={id} className="ml-3 text-gray-300 cursor-pointer select-none">
        {children}
      </label>
    </div>
  );
};

// Custom Checkbox Component
const CustomCheckbox = ({ id, checked, onChange, children }) => {
  return (
    <div className="flex items-start cursor-pointer text-lg" onClick={() => onChange(!checked)}>
      <div className="relative mt-1">
        <div className={`w-4 h-4 rounded border-2 transition-colors ${checked
          ? 'border-[#ffffff] bg-[#ffffff]'
          : 'border-neutral-500 bg-neutral-800 hover:border-neutral-400'
          }`}>
          {checked && (
            <Check className="w-3 h-3 text-black absolute inset-0 m-auto" strokeWidth={3} />
          )}
        </div>
      </div>
      <label htmlFor={id} className="ml-3 text-gray-300 leading-relaxed cursor-pointer select-none">
        {children}
      </label>
    </div>
  );
};

export default function UploadAssetPage() {
  const [selectedGames, setSelectedGames] = useState(['Minecraft']);
  const [assetType, setAssetType] = useState('Model');
  const [uploadType, setUploadType] = useState('ZIP');
  const [gameCompatibility, setGameCompatibility] = useState('ZIP');
  const [licenseType, setLicenseType] = useState('resale');
  const [confirmRights, setConfirmRights] = useState(false);
  const [assetTitle, setAssetTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0.00');

  const games = ['Roblox', 'Minecraft'];
  const assetTypes = ['Model', 'Texture', 'Map', 'Pack', 'Script'];
  const uploadTypes = ['ZIP', 'RAR', 'Raw File', 'Game Format'];
  const compatibilityOptions = ['ZIP', 'Unity Package', 'Unreal Engine', 'Blender File'];

  const gameIcons = {
    Roblox: <img className='h-8 w-8' src='/assets/images/games/roblox.png' />,
    Minecraft: <img className='h-8 w-8' src='/assets/images/games/minecraft.png' />,
  };

  const toggleGame = (game) => {
    setSelectedGames((prev) =>
      prev.includes(game)
        ? prev.filter((g) => g !== game)
        : [...prev, game]
    );
  };

  return (
    <div className="min-h-screen max-w-screen mx-auto bg-neutral-900 text-white p-4 sm:p-6 lg:p-8 relative">
      <div className="mx-auto">
        <Link href={"/"} className='absolute p-2'>
                <button className="bg-white text-black text-md  rounded-2xl h-auto py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-lg hover:shadow-md hover:shadow-white/20">
                  <ArrowLeft size={16}/>Back
                </button>
              </Link>
        <h1 className="text-4xl lg:text-6xl font-bold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-white">Publish Asset</h1>

        <div className="space-y-8">
          {/* Basic Info */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h2 className="text-2xl font-semibold mb-6 p-2">Basic Info</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-base font-medium text-gray-300 mb-2">
                    Asset Title
                  </label>
                  <input
                    type="text"
                    value={assetTitle}
                    onChange={(e) => setAssetTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] hover:bg-neutral-600 transition-colors text-lg"
                    placeholder="Enter asset title..."
                  />
                </div>

                <div>
                  <label className="block text-base font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] resize-none hover:bg-neutral-600 transition-colors text-lg"
                    placeholder="Describe your asset..."
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-base font-medium text-gray-300 mb-2">
                  Upload Thumbnail
                </label>
                <div className="h-[150px] lg:h-[250px] flex flex-col items-center justify-center border-2 border-dashed border-neutral-600 rounded-lg p-8 text-center hover:border-[#ffffff] transition-colors cursor-pointer group">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4 group-hover:text-[#ffffff] transition-colors" />
                  <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors">Click to upload or drag and drop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h2 className="text-2xl font-semibold mb-6">Upload Files</h2>
            <div className="mb-6">
              <label className="block text-base font-medium text-gray-300 mb-3">Game Selection</label>
              <div className="flex flex-wrap gap-3">
                {games.map((game) => (
                  <div
                    key={game}
                    onClick={() => toggleGame(game)}
                    className={`px-6 py-4 rounded-lg border flex gap-4 items-center text-lg transition-all ${selectedGames.includes(game)
                      ? 'bg-[#ffffff] text-black border-[#ffffff] font-medium hover:bg-[#ffffff]'
                      : 'bg-neutral-700 text-gray-300 border-neutral-600 hover:border-neutral-500 hover:bg-neutral-600'
                      }`}
                  >
                    {selectedGames.includes(game) && <Check className="inline mr-2 h-4 w-4" />}
                    {gameIcons[game]}
                    {game}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-base font-medium text-gray-300 mb-2">Upload Type</label>
              <CustomSelect
                value={uploadType}
                onChange={setUploadType}
                options={uploadTypes}
                placeholder="Select upload type..."
              />
            </div>

            <div className="border-2 border-dashed border-neutral-600 rounded-lg p-12 text-center hover:border-[#ffffff] transition-colors cursor-pointer group">
              <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4 group-hover:text-[#ffffff] transition-colors" />
              <p className="text-lg text-gray-300 mb-2 group-hover:text-white transition-colors">Drag and drop files here or click to browse</p>
              <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors">Supported formats: ZIP, RAR, 7Z, TAR</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 gap-8">
            {/* Compatibility & Metadata */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-semibold mb-6">Compatibility & Metadata</h2>
              <div className="mb-6">
                <label className="block text-base font-medium text-gray-300 mb-2">Asset Type</label>
                <CustomSelect
                  value={assetType}
                  onChange={setAssetType}
                  options={assetTypes}
                  placeholder="Select asset type..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium text-gray-300 mb-2">Launch Type</label>
                <CustomSelect
                  value={gameCompatibility}
                  onChange={setGameCompatibility}
                  options={compatibilityOptions}
                  placeholder="Select compatibility..."
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-300 mb-2">Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full pl-8 pr-4 py-3  border border-neutral-600 !rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] hover:bg-neutral-600 transition-colors text-lg"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            {/* License & Rights */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-semibold mb-6">License & Pricing</h2>

              <div className="space-y-4 mb-6">
                <CustomRadio id="license" name="licenseType" value="license" checked={licenseType === 'license'} onChange={setLicenseType}>License</CustomRadio>
                <CustomRadio id="commercial" name="licenseType" value="commercial" checked={licenseType === 'commercial'} onChange={setLicenseType}>Commercial</CustomRadio>
                <CustomRadio id="resale" name="licenseType" value="resale" checked={licenseType === 'resale'} onChange={setLicenseType}>Resale</CustomRadio>
              </div>

              <div className="mb-8">
                <CustomCheckbox id="rights" checked={confirmRights} onChange={setConfirmRights}>
                  I confirm I own the rights to this asset and have the right to distribute it.
                </CustomCheckbox>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg border border-neutral-600 transition-colors text-lg">Save as Draft</button>
                <button className="flex-1 px-6 py-3 bg-[#ffffff] hover:bg-[#ffffff] text-black hover:text-neutral-700 rounded-lg transition-colors font-medium text-lg">Publish Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
