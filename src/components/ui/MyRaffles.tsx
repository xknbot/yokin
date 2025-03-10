//This is component MyRaffles.tsx from @/app/components/ui/MyRaffles
'use client';

import React, { useState } from 'react';
import RaffleCard from '@/components/layout/Card'; // Tái sử dụng RaffleCard
import Button from '@/components/layout/Button'; // Tái sử dụng Button
import Image from 'next/image';

// Định nghĩa interface cho props của Raffle
interface Raffle {
  title: string;
  tvl: string;
  apy: string;
  yieldSource: string;
  endTime: Date | string;
  minimumDeposit: string;
  depositedAmount: string;
}

// Định nghĩa interface cho props của MyRaffles
interface MyRafflesProps {
  raffles: Raffle[]; // Danh sách các raffles
}

const MyRaffles: React.FC<MyRafflesProps> = ({ raffles }) => {
  const [activeTab, setActiveTab] = useState<'inProgress' | 'completed'>('inProgress');
  const [filter, setFilter] = useState<'all' | 'exclusive'>('all');

  // Hàm xử lý khi chuyển tab
  const handleTabChange = (tab: 'inProgress' | 'completed') => {
    setActiveTab(tab);
  };

  // Hàm xử lý khi thay đổi bộ lọc
  const handleFilterChange = (filter: 'all' | 'exclusive') => {
    setFilter(filter);
  };

  // Lọc dữ liệu dựa trên tab và bộ lọc (giả lập logic)
  const filteredRaffles = raffles.filter((raffle) => {
    const isInProgress = true; // Giả sử logic để xác định trạng thái raffle (có thể dựa vào endTime)
    const isExclusive = false; // Giả sử logic để xác định raffle có phải là exclusive hay không
    const matchesTab = activeTab === 'inProgress' ? isInProgress : !isInProgress;
    const matchesFilter = filter === 'all' || (filter === 'exclusive' && isExclusive);
    return matchesTab && matchesFilter;
  });

  return (
    <div className="p-5 text-white font-sans">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-400 mb-2">
        <span className="cursor-pointer hover:underline">Account</span>{' '}
        <span>My Raffles</span>
      </div>

      {/* Tiêu đề và mô tả */}
      <h1 className="text-2xl font-bold mb-2">My Raffles</h1>
      <p className="text-sm text-gray-400 mb-5">
        here you can see all raffles you’re currently participating in
      </p>

      {/* Tabs: In progress và Completed */}
      <div className="flex gap-2 mb-4">
        <Button
          label="In progress"
          variant={activeTab === 'inProgress' ? 'primary' : 'fourth'}
          onClick={() => handleTabChange('inProgress')}
          className="px-4 py-2 text-sm"
        />
        <Button
          label="Completed"
          variant={activeTab === 'completed' ? 'primary' : 'fourth'}
          onClick={() => handleTabChange('completed')}
          className="px-4 py-2 text-sm"
        />
      </div>

      {/* Bộ lọc: ALL và EXCLUSIVE ONLY */}
      <div className="flex gap-2 mb-5">
        <Button
          label="ALL"
          variant={filter === 'all' ? 'primary' : 'fourth'}
          onClick={() => handleFilterChange('all')}
          className="px-4 py-2 text-sm"
        />
        <Button
          label="EXCLUSIVE ONLY"
          variant={filter === 'exclusive' ? 'primary' : 'fourth'}
          onClick={() => handleFilterChange('exclusive')}
          className="px-4 py-2 text-sm"
        />
      </div>

      {/* Danh sách Raffle Cards */}
      <div className="flex items-center gap-2">

        {/* Danh sách các thẻ raffle */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">
          {filteredRaffles.map((raffle, index) => (
            <div key={index} className="min-w-[300px] relative">
              <RaffleCard
                title={raffle.title}
                tvl={raffle.tvl}
                apy={raffle.apy}
                yieldSource={raffle.yieldSource}
                endTime={raffle.endTime}
                minimumDeposit={raffle.minimumDeposit}
                buttonText={{ openParticipation: 'Open Participation' }}
              />
              <div className="bg-white text-black text-center py-2 rounded-b-lg text-sm font-bold">
                Deposited amount: {raffle.depositedAmount}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default MyRaffles;


