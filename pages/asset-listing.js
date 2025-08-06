import React, { useState } from 'react';
import {
  Upload,
  ChevronDown,
  Check,
  ArrowLeft,
  Package,
  Palette,
  Gift,
  User,
  Zap,
  Music,
  MoreHorizontal,
  Users,
  Crown,
  Sparkles,
  Award,
  FileText,
  Building,
  RefreshCw,
  Star,
  Brush,
  Code,
  Bot,
  X
} from 'lucide-react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

// Custom Dropdown Component
const CustomSelect = ({ value, onChange, options, placeholder = "Select option..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.name === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffffff] text-left flex items-center justify-between hover:bg-neutral-600 transition-colors text-xl"
      >
        <div className="flex items-center gap-3">
          {selectedOption?.icon && (
            <selectedOption.icon className="h-5 w-5 text-gray-400" />
          )}
          <span className={value ? 'text-white' : 'text-gray-400'}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-neutral-700 border border-neutral-600 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide">
          {options.map((option) => (
            <button
              key={option.name || option}
              type="button"
              onClick={() => {
                onChange(option.name || option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-4 text-left text-white hover:bg-neutral-600 transition-colors !rounded-none text-xl flex items-center gap-3"
            >
              {option.icon && <option.icon className="h-5 w-5 text-gray-400" />}
              {option.name || option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Multi-select Chips Component
const MultiSelectChips = ({ selectedValues, onChange, options, placeholder = "Select styles..." }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    const newValues = selectedValues.includes(option)
      ? selectedValues.filter(v => v !== option)
      : [...selectedValues, option];
    onChange(newValues);
  };

  const removeValue = (value) => {
    onChange(selectedValues.filter(v => v !== value));
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-h-[54px] px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffffff] hover:bg-neutral-600 transition-colors cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {selectedValues.length === 0 ? (
              <span className="text-gray-400 text-xl">{placeholder}</span>
            ) : (
              selectedValues.map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 p-4 bg-neutral-600 text-white rounded-lg text-lg border border-neutral-500 h-10 min-w-[100px] justify-center"
                >
                  <span className="truncate">{value}</span>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      removeValue(value);
                    }}
                    className="text-white p-1 flex-shrink-0"
                  >
                    <X className="h-6 w-6" />
                  </div>
                </span>
              ))
            )}
          </div>
          <ChevronDown className={`h-6 w-6 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-neutral-700 border border-neutral-600 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              className={`w-full px-4  text-left text-xl hover:bg-neutral-600 transition-colors !rounded-none flex items-center justify-between ${selectedValues.includes(option) ? 'text-white' : 'text-gray-300'
                }`}
            >
              {option}
              {selectedValues.includes(option) && (
                <Check className="h-5 w-5 text-white" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Toggle Switch Component
const ToggleSwitch = ({ checked, onChange, label }) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      className="flex items-center justify-between p-4 rounded-lg border border-neutral-600 hover:border-neutral-500 hover:bg-neutral-700 transition-all"
    >
      <label className="text-gray-300 text-xl cursor-pointer select-none">
        {label}
      </label>
      <div className={`relative inline-flex h-7 w-12 items-center rounded-full cursor-pointer transition-colors ${checked ? 'bg-[#ffffff]' : 'bg-neutral-600'}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full transition-transform ${checked ? 'translate-x-6 bg-neutral-900' : 'translate-x-1 bg-white'
            }`}
        />
      </div>
    </div>
  );
};

// Custom Radio Button Component with Icon, Name, and Tick structure
// const CustomRadio = ({ id, name, value, checked, onChange, icon: Icon, children }) => {
//   return (
//     <div
//       className="flex items-center justify-between p-5 rounded-lg border border-neutral-600 hover:border-neutral-500 hover:bg-neutral-700 transition-all cursor-pointer group"
//       onClick={() => onChange(value)}
//     >
//       <div className="flex items-center gap-3">
//         {Icon && <Icon className="h-6 w-6 text-gray-400 group-hover:text-gray-300" />}
//         <label htmlFor={id} className="text-gray-300 cursor-pointer select-none text-xl group-hover:text-white">
//           {children}
//         </label>
//       </div>
//       <div className={`w-6 h-6 rounded-full border-2 transition-colors ${checked
// ? 'border-[#ffffff] bg-[#ffffff]'
//         : 'border-neutral-500 bg-neutral-800 group-hover:border-neutral-400'
//         }`}>
//         {checked && (
//           <div className="flex items-center justify-center h-full">
//             <Check className="w-4 h-4 text-black" strokeWidth={3} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// Custom Checkbox Component with Icon, Name, and Tick structure
const CustomCheckbox = ({ id, checked, onChange, icon: Icon, children }) => {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-lg border border-neutral-600 hover:border-neutral-500 hover:bg-neutral-700 transition-all cursor-pointer group"
      onClick={() => onChange(!checked)}
    >
      <div className={`w-6 h-6 rounded border-2 transition-colors ${checked
        ? 'border-[#ffffff] bg-[#ffffff]'
        : 'border-neutral-500 bg-neutral-800 group-hover:border-neutral-400'
        }`}>
        {checked && (
          <Check className="w-5 h-5 text-black" strokeWidth={3} />
        )}
      </div>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-gray-300 leading-relaxed cursor-pointer select-none text-xl group-hover:text-white">
          {children}
        </label>
      </div>

    </div>
  );
};

export default function AssetListing() {
  const [selectedGames, setSelectedGames] = useState(['Minecraft']);
  const [assetType, setAssetType] = useState('3D Models');
  const [uploadType, setUploadType] = useState('ZIP');
  const [launchType, setLaunchType] = useState('Crowdfunded');
  const [licenseType, setLicenseType] = useState('Commercial');
  const [confirmRights, setConfirmRights] = useState(false);
  const [assetTitle, setAssetTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0.00');

  // New Traits state
  const [rarity, setRarity] = useState('Common');
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [modType, setModType] = useState('Skin');
  const [isAiGenerated, setIsAiGenerated] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const games = ['Roblox', 'Minecraft'];

  const assetTypes = [
    { name: "3D Models", icon: Package },
    { name: "Skins / Texture", icon: Palette },
    { name: "Props & Objects", icon: Gift },
    { name: "Avatar / Character", icon: User },
    { name: "Animation", icon: Zap },
    { name: "Sound / Music", icon: Music },
    { name: "Others", icon: MoreHorizontal }
  ];

  const uploadTypes = [
    { name: 'ZIP', icon: Package },
    { name: 'RAR', icon: Package },
    { name: 'Raw File', icon: FileText },
    { name: 'Game Format', icon: Gift }
  ];

  const launchTypeOptions = [
    { name: 'Crowdfunded', icon: Users },
    { name: 'Limited Edition', icon: Crown },
    { name: 'Premium Launch', icon: Sparkles },
    { name: 'Community Picks', icon: Award },
  ];

  // New Traits options
  const rarityOptions = [
    { name: 'Common', icon: Star },
    { name: 'Rare', icon: Star },
    { name: 'Epic', icon: Star },
    { name: 'Legendary', icon: Star }
  ];

  const styleOptions = [
    'Sci-fi', 'Fantasy', 'Cyberpunk', 'Medieval', 'Low-poly',
    'Pixel-art', 'Anime', 'Realistic', 'Cartoon', 'Horror',
    'Steampunk', 'Abstract', 'Minimalist'
  ];

  const modTypeOptions = [
    { name: 'Skin', icon: Palette },
    { name: 'Animation', icon: Zap },
    { name: 'Sound Pack', icon: Music },
    { name: 'Full Character', icon: User },
    { name: 'Props', icon: Gift },
    { name: 'World Object', icon: Package },
    { name: 'UI Pack', icon: Code }
  ];

  const licenseOptions = [
    { name: 'Commercial', icon: Building },
    { name: 'Resale', icon: RefreshCw }
  ];

  const gameIcons = {
    Roblox: <img className='h-8 w-8' src='/assets/images/games/roblox.png' alt="Roblox" />,
    Minecraft: <img className='h-8 w-8' src='/assets/images/games/minecraft.png' alt="Minecraft" />,
  };

  const toggleGame = (game) => {
    setSelectedGames((prev) =>
      prev.includes(game)
        ? prev.filter((g) => g !== game)
        : [...prev, game]
    );
  };

  return (
    <div className="min-h-screen max-w-screen mx-auto bg-neutral-900 text-white py-4 lg:py-8 px-6 lg:px-60 relative">
      <div className="mx-auto">
        <button
          onClick={() => {
            router.push('/profile')
          }}
          className="absolute p-2 bg-white text-black text-md rounded-2xl h-auto py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-lg hover:shadow-md hover:shadow-white/20"
        >
          <ArrowLeft size={16} />Back
        </button>
        <h1 className="text-4xl lg:text-6xl font-bold text-center my-10 bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-white">Publish Asset</h1>

        <div className="space-y-8">
          {/* Basic Info */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h2 className="text-2xl font-semibold mb-6 p-2">Basic Info</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-300 mb-2">
                    Asset Title
                  </label>
                  <input
                    type="text"
                    value={assetTitle}
                    onChange={(e) => setAssetTitle(e.target.value)}
                    className="w-full px-4 py-4 bg-neutral-700 border border-neutral-600 !rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] hover:bg-neutral-600 transition-colors text-xl"
                    placeholder="Enter asset title..."
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-4 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] resize-none hover:bg-neutral-600 transition-colors text-xl"
                    placeholder="Describe your asset..."
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-lg font-medium text-gray-300 mb-2">
                  Upload Thumbnail
                </label>
                <div className="h-[150px] lg:h-[270px] flex flex-col items-center justify-center border-2 border-dashed border-neutral-600 rounded-lg p-8 text-center hover:border-[#ffffff] transition-colors cursor-pointer group">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4 group-hover:text-[#ffffff] transition-colors" />
                  <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors">Click to upload or drag and drop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h2 className="text-2xl font-semibold mb-6">Upload Files</h2>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-300 mb-3">Game Selection</label>
              <div className="flex flex-wrap gap-3">
                {games.map((game) => (
                  <div
                    key={game}
                    onClick={() => toggleGame(game)}
                    className={`px-6 py-4 rounded-lg border flex gap-4 items-center text-xl transition-all cursor-pointer ${selectedGames.includes(game)
                      ? 'bg-[#ffffff] text-black border-[#ffffff] font-medium hover:bg-[#ffffff]'
                      : 'bg-neutral-700 text-gray-300 border-neutral-600 hover:border-neutral-500 hover:bg-neutral-600'
                      }`}
                  >
                    {gameIcons[game]}
                    {game}
                    {selectedGames.includes(game) && <Check className="h-5 w-5" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-dashed border-neutral-600 rounded-lg p-12 text-center hover:border-[#ffffff] transition-colors cursor-pointer group">
              <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4 group-hover:text-[#ffffff] transition-colors" />
              <p className="text-xl text-gray-300 mb-2 group-hover:text-white transition-colors">Drag and drop files here or click to browse</p>
              <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors">Supported formats: ZIP, RAR, 7Z, TAR</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 gap-8">
            {/* Compatibility & Metadata */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-semibold mb-6">Compatibility & Metadata</h2>
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-300 mb-2">Asset Type</label>
                <CustomSelect
                  value={assetType}
                  onChange={setAssetType}
                  options={assetTypes}
                  placeholder="Select asset type..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-300 mb-2">Launch Type</label>
                <CustomSelect
                  value={launchType}
                  onChange={setLaunchType}
                  options={launchTypeOptions}
                  placeholder="Select launch type..."
                />
              </div>
            </div>

            {/* Traits Section */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-semibold mb-6">Traits</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-300 mb-2">Rarity</label>
                  <CustomSelect
                    value={rarity}
                    onChange={setRarity}
                    options={rarityOptions}
                    placeholder="Select rarity..."
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-300 mb-2">Mod Type</label>
                  <CustomSelect
                    value={modType}
                    onChange={setModType}
                    options={modTypeOptions}
                    placeholder="Select mod type..."
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-lg font-medium text-gray-300 mb-2">Style</label>
                <MultiSelectChips
                  selectedValues={selectedStyles}
                  onChange={setSelectedStyles}
                  options={styleOptions}
                  placeholder="Select styles..."
                />
              </div>

              <div className="mt-6">
                <ToggleSwitch
                  checked={isAiGenerated}
                  onChange={setIsAiGenerated}
                  label="AI-Generated"
                />
              </div>
            </div>

            {/* License & Rights */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-semibold mb-6">License & Pricing</h2>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-300 mb-2">Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">$</span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 bg-neutral-700 border border-neutral-600 !rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] hover:bg-neutral-600 transition-colors text-xl"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium text-gray-300 mb-2">License Type</label>
                <CustomSelect
                  value={licenseType}
                  onChange={setLicenseType}
                  options={licenseOptions}
                  placeholder="Select license type..."
                />
              </div>
            </div>



            <div className="mb-8">
              <CustomCheckbox
                id="rights"
                checked={confirmRights}
                onChange={setConfirmRights}
                icon={Check}
              >
                I confirm I own the rights to this asset and have the right to distribute it.
              </CustomCheckbox>
            </div>

            <div className="flex gap-8 mb-12">
              <button className="flex-1 px-6 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg border border-neutral-600 transition-colors text-lg">Save as Draft</button>
              <button className="flex-1 px-6 py-3 bg-[#ffffff] hover:bg-gray-200 text-black rounded-lg transition-colors font-medium text-lg">Publish Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}