import React from "react";

export function Skeleton({ className = "", variant = "default", ...props }) {
  const getVariantClasses = () => {
    switch (variant) {
      case "technovista":
        return "animate-pulse bg-gradient-to-r from-[#daa425]/20 via-[#f2ca46]/10 to-[#daa425]/20 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#f2ca46]/30 before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] rounded";
      default:
        return "animate-pulse bg-gray-700 rounded";
    }
  };

  return <div className={`${getVariantClasses()} ${className}`} {...props} />;
}
