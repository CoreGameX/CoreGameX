import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function FAQComponent() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const faqData = [
  {
    id: 1,
    question: "What is the Launchpad?",
    answer:
      "The Launchpad is a dedicated space where creators can list and showcase their game-ready assets before they go live on the full marketplace. It’s a pre-release zone to build visibility, get community feedback, and attract early interest.",
  },
  {
    id: 2,
    question: "When can I start uploading my assets?",
    answer:
      "Creators can begin uploading their assets to the Launchpad during the MVP phase. Once reviewed and approved, assets will appear as “Coming Soon” listings available for preview and wishlist by users.",
  },
  {
    id: 3,
    question: "Can users buy assets directly from the Launchpad?",
    answer:
      "Not yet. In the MVP phase, assets on Launchpad are for preview only. Purchasing and downloads will be enabled during the full marketplace rollout.",
  },
  {
    id: 4,
    question: "What kind of assets can I submit to the Launchpad?",
    answer:
      "You can upload compatible assets for supported games (currently: Roblox and Minecraft), including skins, 3D models, UI packs, or builds. Make sure they meet our format and quality guidelines.",
  },
  {
    id: 5,
    question: "How does Launchpad help me as a creator?",
    answer:
      "Launchpad gives early visibility to your assets, helping you build an audience, gain feedback, and get wishlisted before full release. This boosts your asset’s launch impact and discoverability.",
  },
];


  return (
    <div className=" bg-black text-white px-4 md:px-12 py-10 ">
      <div className="max-w-[90vw] md:max-w-[60vw] mx-auto">
        {/* Header */}
        <h1 className="text-neutral-100 text-4xl md:text-5xl font-bold text-center mb-16 md:mb-24 leading-tight">
          Frequently Asked Questions
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-4 md:space-y-5">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border border-neutral-600 transition-all duration-300 ${
                openItem === item.id ? "bg-neutral-900" : "bg-neutral-950"
              }`}
            >
              <div
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 md:px-10 py-6 flex justify-between items-center hover:bg-neutral-900 rounded-2xl transition-colors duration-200"
              >
                <span className=" text-2xl md:text-2xl font-semibold text-left text-neutral-200">
                  {item.id}. {item.question}
                </span>
                <span className="text-2xl md:text-3xl text-neutral-200">
                  {openItem === item.id ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {openItem === item.id && (
                <div className="px-6 md:px-10 pb-6 md:pb-8">
                  <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 md:mt-28">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Still have a question?
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl">
            Can’t find what you're looking for? Please{" "}
            <span className="text-white cursor-pointer hover:underline">
              chat to our friendly team
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
