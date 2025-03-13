'use client';

import React, { useState } from 'react';
import Carousel from "@/components/feature/Carousel";
import Button from "@/components/ui/Button";

interface RafflesData {
  id: number;
  title: string;
  tvl: string;
  apy: string;
  yieldSource: string;
  endTime: Date | string;
  minimumDeposit: string;
  depositedAmount: string;
  isExclusive: boolean;
}

interface MyRafflesDataProps {
  raffles: RafflesData[];
}

const MyRafflesData: React.FC<MyRafflesDataProps> = ({ }) => {
  const raffles = [
    { id: 1, title: "ZkLend USDC Raffle", endTime: new Date("2025-03-05T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend", minimumDeposit: "20 USDC", depositedAmount: "20", isExclusive: false },
    { id: 2, title: "ZkLend USDC Raffle", endTime: new Date("2025-03-10T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend", minimumDeposit: "20 USDC", depositedAmount: "20", isExclusive: true },
    { id: 3, title: "ZkLend USDC Raffle", endTime: new Date("2025-03-30T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend", minimumDeposit: "20 USDC", depositedAmount: "20", isExclusive: false },
    { id: 4, title: "ZkLend USDC Raffle", endTime: new Date("2025-03-28T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend", minimumDeposit: "20 USDC", depositedAmount: "20", isExclusive: false },
    { id: 5, title: "ZkLend USDC Raffle", endTime: new Date("2025-03-27T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend", minimumDeposit: "20 USDC", depositedAmount: "20", isExclusive: false },
  ];

  const [activeTab, setActiveTab] = useState<'inProgress' | 'completed'>('inProgress');
  const [filter, setFilter] = useState<'all' | 'exclusive'>('all');

  const handleTabChange = (tab: 'inProgress' | 'completed') => {
    setActiveTab(tab);
  };

  const handleFilterChange = (filter: 'all' | 'exclusive') => {
    setFilter(filter);
  };

  const handleClaim = () => {
    console.log('Đã nhấn nút Claim cho tab Completed');
  };

  const filteredRaffles = raffles.filter((raffle) => {
    const endTimeDate = typeof raffle.endTime === 'string' ? new Date(raffle.endTime) : raffle.endTime;
    const isInProgress = endTimeDate > new Date();
    const matchesTab = activeTab === 'inProgress' ? isInProgress : !isInProgress;
    const matchesFilter = filter === 'all' || (filter === 'exclusive' && raffle.isExclusive);
    console.log(`Raffle ${raffle.id}: endTime=${endTimeDate}, isInProgress=${isInProgress}, matchesTab=${matchesTab}, matchesFilter=${matchesFilter}`);
    return matchesTab && matchesFilter;
  });

  console.log('Filtered Raffles:', filteredRaffles);

  return (
    <div className="mx-auto w-[44%] h-auto p-5 text-white font-sans bg-[#111] rounded-lg border border-[#222]">
      <div className="text-[14px] text-gray-400 mb-2">
        <span className="cursor-pointer hover:underline"> ← Account</span> 
       &nbsp; &gt; <span className="text-white ml-[10px]">My Raffles</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[20px] font-semibold mb-2 mt-[48px]">My Raffles</h1>
          <p className="text-[14px] text-[#757575] mb-5">
            here you can see all raffles you’re currently participating in
          </p>
        </div>
        {activeTab === 'completed' && (
          <Button variant="fourth" onClick={handleClaim} size="large">
            Claim
          </Button>
        )}
      </div>
      <div className="flex justify-between mb-4 text-[14px] bg-[#1e1e1e] max-w-fit py-1 rounded-sm">
        <div className="flex gap-1 font-semibold text-sm text-[#767676]">
          <Button
            variant={activeTab === 'inProgress' ? 'fifth' : ''}
            onClick={() => handleTabChange('inProgress')}
            size="large"
          >
            In progress
          </Button>
          <Button
            variant={activeTab === 'completed' ? 'fifth' : ''}
            onClick={() => handleTabChange('completed')}
            size="large"
          >
            Completed
          </Button>
        </div>
      </div>
      <div className="flex justify-between text-[14px] items-center mb-2">
        <div className="flex gap-2 font-semibold text-sm">
          <Button
            variant={filter === 'all' ? 'fifth' : ''}
            onClick={() => handleFilterChange('all')}
            size="small"
            className="text-[#767676] bg-[#1e1e1e]"
          >
            All
          </Button>
          <Button
            variant={filter === 'exclusive' ? 'fifth' : ''}
            onClick={() => handleFilterChange('exclusive')}
            size="small"
            className="text-[#767676] bg-[#1e1e1e]"
          >
            Exclusive Only
          </Button>
        </div>
      </div>
      <div>
        <Carousel raffles={filteredRaffles} />
      </div>
    </div>
  );
};



export default MyRafflesData;