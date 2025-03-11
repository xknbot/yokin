'use client'
import React, { useState, useEffect } from 'react';
import Card from "@/components/layout/Card";

const Carousel: React.FC = () => {
    // Danh sách các card với type
    const cards: string[] = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    const totalCards: number = cards.length;

    // Hằng số kích thước
    const cardWidth: number = 363; // Chiều rộng mỗi card
    const cardHeight: number = 477; // Chiều cao mỗi card
    const cardSpacing: number = 16; // Khoảng cách giữa 2 card
    const viewportWidth: number = cardWidth * 2 + cardSpacing; // 742px

    // State cho chỉ số hiện tại
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Hàm tính toán offset
    const calculateOffset = (): number => {
        return -currentIndex * (cardWidth + cardSpacing / 2);
    };

    // Hàm chuyển sang cặp tiếp theo
    const nextPair = (): void => {
        setCurrentIndex((prevIndex: number) =>
            prevIndex + 1 >= totalCards - 1 ? 0 : prevIndex + 1
        );
    };

    // Hàm chuyển về cặp trước đó
    const previousPair = (): void => {
        setCurrentIndex((prevIndex: number) =>
            prevIndex - 1 < 0 ? totalCards - 2 : prevIndex - 1
        );
    };


    // Tính offset
    const offset: number = calculateOffset();

      const raffleData = [
  { id: 1, endTime: new Date("2025-03-15T00:00:00"), tvl: "21k USDC", apy: "6%", yieldSource: "ZKlend" },
  { id: 2, endTime: new Date("2025-03-15T00:00:00"), tvl: "21k USDC", apy: "7%", yieldSource: "ZKlend" },
  { id: 3, endTime: new Date("2025-03-15T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
    ];

    return (

        <div className="relative w-[745px] h-auto">
            <div className="flex justify-end gap-4 relative bottom-4">
                <button
                className=" text-[#A1A1AA] hover:text-white "
                onClick={previousPair}
            >
                &lt;
            </button>
            <button
                className=" text-[#a1a1aa] hover:text-white "
                onClick={nextPair}
            >
                &gt;
            </button>
            </div>
            <div className="relative max-w-[742px] overflow-hidden" style={{ height: `${cardHeight}px` }}>
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-[16px] absolute"
                    style={{ transform: `translateX(${offset}px)` }}
                >
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            {...raffleData[2]}
                            width={363}
                            height={477}
                            countdownWidth="170px" // Tùy chỉnh width của Countdown trong Carousel
                            countdownHeight="100px" // Tùy chỉnh height của Countdown trong Carousel
                            buttonLabel="Deposited Amount: 20 USDC"
                            cardInfoClassName="!bg-[#1e1e1e]"
                            cardBgColor="!bg-[#111]"
                            countdownTitleClassName="text-[14px] "
                            usdcClassName="text-[5px]"
                            cardTimeBoxClassName="!bg-[#1e1e1e]"
                            


                        />

                    ))}
                </div>
            
            </div>
        </div>
    );
};

export default Carousel;