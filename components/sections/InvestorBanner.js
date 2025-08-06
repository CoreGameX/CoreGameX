import { ArrowRight } from "lucide-react";

const InvestorBanner = ({ onContactClick }) => {
  return (
    <section className="bg-black min-h-screen p-8 md:p-64 text-white">
      <p className="text-lg text-gray-400 tracking-widest mb-12 md:mb-24 font-medium">
        [ INVESTORS ]
      </p>
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="/assets/images/about-section/investor.jpg"
            alt="Investor"
            className="h-[500px] object-contain brightness-150"
          />
        </div>

        <div className="space-y-8 text-left">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Invest in the Future<br /> of UGC Gaming
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
            We're on a mission to redefine how assets are created, shared, and monetized in the game world.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 bg-white px-12 border border-white text-black font-bold text-2xl rounded-2xl hover:bg-neutral-800 hover:text-white transition-all duration-300 shadow-lg"
            >
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorBanner;
