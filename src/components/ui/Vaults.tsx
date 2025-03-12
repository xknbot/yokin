'use client';

import React, { useState } from "react";
import VaultHeader from "./VaultHeader";
import VaultList from "./VaultList";

type Vault = {
  id: number;
  logo: string;
  name: string;
  yieldSource: string;
  prize: string;
  apr: string;
  winChances: number;
  totalDeposits: string;
  totalDepositsFullNum: string;
};

const mockVaults: Vault[] = [
  {
    id: 1,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 2,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 3,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 4,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 5,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 6,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 7,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 8,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 9,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  {
    id: 10,
    logo: "/zklend-logo.png",
    name: "Prize USDC",
    yieldSource: "Zklend",
    prize: "$12,345",
    apr: "+9.25%",
    winChances: 3,
    totalDeposits: "$4.7M",
    totalDepositsFullNum: "4,732,456 USDC",
  },
  // Thêm vault khác nếu cần
];

const Vaults: React.FC = () => {
  const imageMap = {
    "All assets": "/all-assets.png",
    "PrizeUSDC": "/prize-usdc.png",
    "PrizeAleo": "/prize-aleo.png",
    "PrizeWETH": "/prize-weth.png",
    "ZKlendUSDC": "/prize-weth.png",
  };

  const [selectedFilter, setSelectedFilter] = useState("All assets");
  const filterOptions = ["All assets", "PrizeUSDC","PrizeAleo", "PrizeWETH", "ZklendUSDC", ">"];

  return (
    <div className="bg-[#000] min-h-screen p-10">
      <VaultHeader
        title="Deposit tokens. Win prizes. No loss."
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        imageMap={imageMap} // Pass imageMap as a prop
      />
      <VaultList vaults={mockVaults} />
      
    </div>
  );
};

export default Vaults;