//This is component MyRaffles.tsx from @/app/components/ui/MyRaffles
'use client';

import React, { useState } from 'react';
import Card from '@/components/layout/Card'; // Tái sử dụng RaffleCard
import Button from '@/components/layout/Button'; // Tái sử dụng Button
import Carousel from "@/components/feature/Carousel";


// Định nghĩa interface cho props của Raffle
interface RafflesData {
  title: string;
  tvl: string;
  apy: string;
  yieldSource: string;
  endTime: Date | string;
  minimumDeposit: string;
  depositedAmount: string;
}

// Định nghĩa interface cho props của MyRaffles
interface MyRafflesDataProps {
  raffles: RafflesData[]; // Danh sách các raffles
}

const MyRafflesData: React.FC<MyRafflesDataProps> = ({ raffles }) => {
  const [activeTab, setActiveTab] = useState<'inProgress' | 'completed'>('inProgress');
    const [filter, setFilter] = useState<'all' | 'exclusive'>('all');
    const [currentIndex, setCurrentIndex] = useState(0); // Theo dõi vị trí hiện tại của carousel

    const cardsPerPage = 2; // Số lượng thẻ hiển thị trên mỗi "trang"

  // Hàm xử lý khi chuyển tab
  const handleTabChange = (tab: 'inProgress' | 'completed') => {
      setActiveTab(tab);
      setCurrentIndex(0);
  };

  // Hàm xử lý khi thay đổi bộ lọc
  const handleFilterChange = (filter: 'all' | 'exclusive') => {
      setFilter(filter);
      setCurrentIndex(0);
  };
    // Hàm xử lý khi nhấp vào nút Claim (giả lập)
  const handleClaim = () => {
    console.log('Claim button clicked for Completed tab');
    // Thêm logic xử lý thực tế ở đây (ví dụ: gửi request, cập nhật trạng thái, v.v.)
  };

  // Lọc dữ liệu dựa trên tab và bộ lọc (giả lập logic)
  const filteredRaffles = raffles.filter((raffle) => {
    const isInProgress = true; // Giả sử logic để xác định trạng thái raffle (có thể dựa vào endTime)
    const isExclusive = false; // Giả sử logic để xác định raffle có phải là exclusive hay không
    const matchesTab = activeTab === 'inProgress' ? isInProgress : !isInProgress;
    const matchesFilter = filter === 'all' || (filter === 'exclusive' && isExclusive);
    return matchesTab && matchesFilter;
  });
    
    // Tính toán số lượng "trang" dựa trên số thẻ và số thẻ mỗi trang
  const totalPages = Math.ceil(filteredRaffles.length / cardsPerPage);

  // Xử lý nút "Previous"
  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Xử lý nút "Next"
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  // Lấy các thẻ cần hiển thị dựa trên currentIndex
  const startIndex = currentIndex * cardsPerPage;
  const visibleRaffles = filteredRaffles.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="mx-auto w-[44%] h-auto p-5 text-white font-sans bg-[#111] rounded-lg border border-[#222]">
      {/* Breadcrumb Navigation */}
      <div className="text-[14px] text-gray-400 mb-2">
        <span className="cursor-pointer hover:underline"> &larr; Account</span>{' '}
        &gt; <span className="text-white ml-[10px]"> My Raffles</span>
      </div>

      {/* Tiêu đề và mô tả */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[20px] font-bold mb-2 mt-[48px]">My Raffles</h1>
          <p className="text-[14px] text-[#757575] mb-5">
            here you can see all raffles you’re currently participating in
          </p>
        </div>
        <div>
          {activeTab === 'completed' && (
                  <Button
                    label="Claim"
                    variant="fourth" // Có thể tùy chỉnh variant (ví dụ: 'primary' nếu muốn nổi bật)
                    onClick={handleClaim}
                    className="px-4 py-2 text-sm"
                  />
                )}
        </div>
      </div>

      {/* Tabs: In progress và Completed */}
      <div className="flex justify-between mb-4 text-[14px]">
        <div className="flex gap-2 font-bold">
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

      </div>  

      {/* Bộ lọc: ALL và EXCLUSIVE ONLY */}
      <div className="flex justify-between text-[14px] items-center">
        <div className="flex gap-2 font-bold">
            <Button
              label="All"
              variant={filter === 'all' ? 'primary' : 'fourth'}
              onClick={() => handleFilterChange('all')}
              className="px-4 py-2 text-sm"
            />
            <Button
              label="Exclusive Only"
              variant={filter === 'exclusive' ? 'primary' : 'fourth'}
              onClick={() => handleFilterChange('exclusive')}
              className="px-4 py-2 text-sm"
            />
        </div>
      </div>

      {/* Danh sách Raffle Cards */}
        <div className="">
              <Carousel />
            

        </div>


    </div>
    
  );
};

export default MyRafflesData;


