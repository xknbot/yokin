import React from "react";
import Image from "next/image";

type VaultHeaderProps = {
  title: string;
  filterOptions: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  imageMap: { [key: string]: string };
};

const VaultHeader: React.FC<VaultHeaderProps> = ({
  title,
  filterOptions,
  selectedFilter,
  onFilterChange,
  imageMap,
}) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
      <div className="flex justify-between bg-[#111] border border-[#2c2c2c] max-w-[1000px] mx-auto rounded h-[40px] p-1">
        {filterOptions.map((option, index) => (
          <button
            key={option}
            className={`flex items-center justify-center px-4 rounded text-sm w-full m-0.5 ${
              selectedFilter === option
                ? "bg-white text-black"
                : "bg-[#111111] text-[#757575]"
            } ${index === 5 ? "w-[24px] min-w-[24px] max-w-[24px]" : "w-full"}`} // Custom width for index 5
            onClick={() => onFilterChange(option)}
          >
            <div className="flex items-center justify-center">
              {index !== 5 && ( // Skip image for index 5
                <Image
                  src={imageMap[option] || "/prize-weth.png"} // Fallback image
                  alt={`${option} icon`}
                  className={`mr-2 ${index === 0 ? "w-10 h-4" : "w-4 h-4"}`} // Tailwind classes for styling
                  width={index === 0 ? 40 : 16} // Dynamic width
                  height={index === 0 ? 40 : 16} // Dynamic height
                />
              )}
              {option}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VaultHeader;