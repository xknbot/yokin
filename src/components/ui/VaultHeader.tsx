import React from "react";

type VaultHeaderProps = {
  title: string;
  filterOptions: string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
};

const VaultHeader: React.FC<VaultHeaderProps> = ({
  title,
  filterOptions,
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
      <div className="flex justify-between border border-[#1a1a1a] w-[60%] mx-auto p-1 rounded h-[40px]">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`px-4 rounded text-sm w-full ${
              selectedFilter === option
                ? "bg-white text-black"
                : "bg-[#111111] text-[#757575]"
            }`}
            onClick={() => onFilterChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VaultHeader;