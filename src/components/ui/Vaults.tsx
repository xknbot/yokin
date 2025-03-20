'use client';

import React, { useState, useEffect } from "react";
import VaultHeader from "./VaultHeader";
import VaultList from "./VaultList";
import Button from "@/components/ui/Button";


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
  const [vaults, setVaults] = useState<Vault[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const imageMap = {
    "All assets": "/all-assets.png",
    "PrizeUSDC": "/prize-usdc.png",
    "PrizeAleo": "/prize-aleo.png",
    "PrizeWETH": "/prize-weth.png",
    "ZKlendUSDC": "/prize-weth.png",
  };

  const [selectedFilter, setSelectedFilter] = useState("All assets");
  const filterOptions = ["All assets", "PrizeUSDC", "PrizeAleo", "PrizeWETH", "ZklendUSDC", ">"];
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Giả lập fetch API với mockdata
      await new Promise(resolve => setTimeout(resolve, 1000)); // Giả lập độ trễ 1 giây
      const data = mockVaults;

      // Kiểm tra dữ liệu
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Data empty or invalid');
      }

      // Lọc dữ liệu theo selectedFilter (nếu cần)
      let filteredData = data;
      if (selectedFilter !== "All assets") {
        filteredData = data.filter(vault => {
          if (selectedFilter === "PrizeUSDC" && vault.name === "Prize USDC") return true;
          if (selectedFilter === "PrizeAleo" && vault.name === "Prize Aleo") return true;
          if (selectedFilter === "PrizeWETH" && vault.name === "Prize WETH") return true;
          if (selectedFilter === "ZklendUSDC" && vault.name === "ZKlend USDC") return true;
          return false;
        });
      }

      setVaults(filteredData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Error occurs when taking data');
      } else {
        setError('Error occurs when taking data');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedFilter]); // Gọi lại fetchData khi selectedFilter thay đổi

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-[var(--color-white-2)] text-[24px] animate-pulse">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <div className="text-[var(--color-red-2)] text-[24px] p-4 border border-[var(--color-red-2)] rounded-md">
        Error: {error}
      </div>
      <Button variant="secondary" size="medium" onClick={fetchData}>
        Try again
      </Button>
    </div>
  );

  if (!vaults.length) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-[var(--color-gray-1)] text-[24px]">There&apos;s no vault to dislay.</div>
    </div>
  );

  return (
    <div className="bg-[#000] min-h-screen p-10">
      <VaultHeader
        title="Deposit tokens. Win prizes. No loss."
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        imageMap={imageMap} // Pass imageMap as a prop
      />
      <VaultList vaults={vaults} />
      
    </div>
  );
};

export default Vaults;