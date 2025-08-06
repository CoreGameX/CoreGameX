import { User, Palette, ChevronLeft, Gamepad2, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";

export default function UserTypeSelection({ handleUserTypeSelect, prevStep, selectedType }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const userTypes = [
    {
      id: "player",
      title: "Gamer",
      icon: User,
      description: "I'm looking for game assets to enhance my gaming experience",
      features: [
        { icon: Gamepad2, text: "Browse and purchase game assets" },
        { icon: Zap, text: "Access exclusive player content" },
        { icon: Users, text: "Join gaming communities" }
      ],
      gradient: "",
      accentColor: ""
    },
    {
      id: "creator",
      title: "Creator",
      icon: Palette,
      description: "I create and sell game assets for other users",
      features: [
        { icon: TrendingUp, text: "Upload and sell your assets" },
        { icon: TrendingUp, text: "Analytics and earnings tracking" },
        { icon: Users, text: "Creator community access" }
      ],
      gradient: "",
      accentColor: ""
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-white relative mt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="text-center mb-12">
        <div className="inline-block p-3 bg-neutral-800/50 rounded-full mb-4 backdrop-blur-sm border border-neutral-700/50">
          <Users className="w-6 h-6 text-neutral-400" />
        </div>
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
          Choose your role
        </h2>
        <p className="text-neutral-400 text-xl">Select the option that best describes you</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {userTypes.map((type) => {
          const IconComponent = type.icon;
          const isSelected = selectedType === type.id;
          const isHovered = hoveredCard === type.id;
          
          return (
            <div
              key={type.id}
              onClick={() => handleUserTypeSelect(type.id)}
              onMouseEnter={() => setHoveredCard(type.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative p-8  border-2 rounded-2xl cursor-pointer transition-all duration-300 group overflow-hidden ${
                isSelected
                  ? "border-white bg-neutral-800/80 shadow-2xl shadow-white/10 scale-105"
                  : "border-neutral-700/50 hover:border-neutral-500 hover:shadow-xl hover:shadow-neutral-900/20 hover:scale-102"
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Animated border effect */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                isSelected 
                  ? "bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse" 
                  : isHovered 
                    ? "bg-gradient-to-r from-neutral-600/20 via-transparent to-neutral-600/20"
                    : ""
              }`}></div>

              <div className="relative text-center">
                {/* Icon with enhanced styling */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform ${
                    isSelected
                      ? "bg-white text-black shadow-lg rotate-3 scale-110"
                      : isHovered
                        ? "bg-white text-black shadow-md rotate-2 scale-105"
                        : "bg-neutral-700/80 group-hover:bg-neutral-600 backdrop-blur-sm"
                  }`}
                >
                  <IconComponent size={36} className="transition-transform duration-300" />
                </div>

                {/* Title with gradient effect */}
                <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                  isSelected || isHovered 
                    ? "bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent" 
                    : ""
                }`}>
                  {type.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {type.description}
                </p>

                {/* Enhanced feature list */}
                <ul className="space-y-3">
                  {type.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <li 
                        key={index}
                        className={`flex items-center text-lg transition-all duration-300 delay-${index * 50} ${
                          isSelected || isHovered 
                            ? "text-neutral-300 translate-x-1" 
                            : "text-neutral-500"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${
                          isSelected 
                            ? "bg-white/20 text-white" 
                            : isHovered
                              ? "bg-neutral-600/50 text-neutral-300"
                              : "bg-neutral-700/50 text-neutral-500"
                        }`}>
                          <FeatureIcon size={12} />
                        </div>
                        <span className="flex-1">{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center animate-bounce">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Navigation */}
      <div className="flex justify-between items-center mt-12">
        <button
          onClick={prevStep}
          className="group flex items-center space-x-3 px-6 py-3 bg-neutral-800/50 border border-neutral-600/50 rounded-xl text-white hover:bg-neutral-700/80 hover:border-neutral-500 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back</span>
        </button>

        
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}