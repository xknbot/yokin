'use client';
import React, { useState } from 'react';
import Card from "@/components/layout/Card";
import styles from '@/styles/Carousel.module.css';

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

interface CarouselProps {
  raffles: RafflesData[];
}

const Carousel: React.FC<CarouselProps> = ({ raffles }) => {
  const totalCards = raffles.length;
  const cardWidth = 363;
  const cardHeight = 477;
  const cardSpacing = 16;
  const viewportWidth = cardWidth * 2 + cardSpacing;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const calculateOffset = (): number => {
    return -currentIndex * (cardWidth + cardSpacing / 2);
  };

  const nextPair = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalCards - 1 ? 0 : prevIndex + 1
    );
  };

  const previousPair = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalCards - 2 : prevIndex - 1
    );
  };

  const offset = calculateOffset();

  return (
    <div className="relative w-[745px] h-auto">
      <div className="flex justify-end gap-4 relative bottom-5">
        <button
          className="text-[#A1A1AA] hover:text-white"
          onClick={previousPair}
          disabled={totalCards <= 1}
        >
          &lt;
        </button>
        <button
          className="text-[#a1a1aa] hover:text-white"
          onClick={nextPair}
          disabled={totalCards <= 1}
        >
          &gt;
        </button>
      </div>
      <div className="relative max-w-[742px] overflow-hidden" style={{ height: `${cardHeight}px` }}>
        <div
          className="flex transition-transform duration-500 ease-in-out gap-[16px] absolute"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {raffles.length > 0 ? (
            raffles.map((raffle) => (
              <Card
                key={raffle.id} // Đảm bảo key duy nhất
                title={raffle.title}
                tvl={raffle.tvl}
                apy={raffle.apy}
                yieldSource={raffle.yieldSource}
                endTime={raffle.endTime}
                minimumDeposit={raffle.minimumDeposit}
                width={363}
                height={477}
                countdownWidth="170px"
                countdownHeight="100px"
                buttonLabel={`Deposited Amount: ${raffle.depositedAmount} USDC`}
                cardInfoClassName="!bg-[#1e1e1e]"
                cardBgColor="!bg-[#111]"
                countdownTitleClassName="text-[14px]"
                usdcClassName="!text-[14px]"
                cardTimeBoxClassName="!bg-[#1e1e1e]"
                disabled={parseFloat(raffle.depositedAmount) > 0}
                className={parseFloat(raffle.depositedAmount) > 0 ? styles.disabledCard : ''}
              />
            ))
          ) : (
            <p className="text-white">There is no raffle to show.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;