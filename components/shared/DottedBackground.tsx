import React from "react";

export const DottedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-black">
        {/* Adjusted number of dots to 30 and size to smaller range */}
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 2 + 1; // Size between 1px and 3px
          const glow = Math.random() > 0.8; // 20% chance for dots to glow
          return (
            <div
              key={i}
              className={`absolute rounded-full ${
                glow ? "bg-white glow-effect" : "bg-gray-400"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3, // Slightly increased minimum opacity
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
