import React, { useState, useEffect } from 'react';
import styles from './RaffleCard.module.css';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Countdown from '@/components/feature/Countdown'; // Đảm bảo đường dẫn đúng

// Định nghĩa kiểu dữ liệu cho props
interface RaffleCardProps {
  logo: string;
  prizeText: string;
  platformText: string;
  prizeAmount: string;
  aprPercentage: string;
  progress: number; // Dùng cho bar chart
  totalValue: string;
  detailedAmount: string;
  buttonText: string;
  customWidth?: string;
  customHeight?: string;
  buttonVariant?: 'primary' | 'secondary' | 'third' | 'fourth' | 'fifth';
  buttonSize?: 'small' | 'medium' | 'large';
  buttonDisabled?: boolean;
  buttonLoading?: boolean;
  endTime?: Date | string; // Từ File 2
  width?: string | number; // Tùy chỉnh width từ File 2
  height?: string | number; // Tùy chỉnh height từ File 2
  countdownWidth?: string | number; // Tùy chỉnh width của Countdown
  countdownHeight?: string | number; // Tùy chỉnh height của Countdown
  countdownTitleClassName?: string; // Tùy chỉnh className của Countdown
  cardInfoClassName?: string; // Tùy chỉnh className của cardInfo
  cardBgColor?: string; // Tùy chỉnh màu nền từ File 2
  usdcClassName?: string; // Tùy chỉnh className của USDC
  cardTimeBoxClassName?: string; // Tùy chỉnh className của timeBox
  disabled?: boolean; // Kết hợp disabled từ File 2
}

const RaffleCard: React.FC<RaffleCardProps> = ({
  logo,
  prizeText,
  platformText,
  prizeAmount,
  aprPercentage,
  progress,
  totalValue,
  detailedAmount,
  buttonText,
  customWidth = '496px', // Mặc định từ File 2
  customHeight = '642px', // Mặc định từ File 2
  buttonVariant = 'primary',
  buttonSize = 'medium',
  buttonDisabled = false,
  buttonLoading = false,
  endTime,
  width = '496px', // Tùy chỉnh width
  height = '642px', // Tùy chỉnh height
  countdownWidth = '200px', // Tùy chỉnh width của Countdown
  countdownHeight = 'auto', // Tùy chỉnh height của Countdown
  countdownTitleClassName = '',
  cardInfoClassName = '',
  cardBgColor = '',
  usdcClassName = '',
  cardTimeBoxClassName = '',
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const response = await fetch('/api/raffles/123');
        const data = await response.json();
        // Gán dữ liệu từ API nếu cần (ví dụ: progress, totalValue)
      };
      fetchData();
    } catch (err) {
      setError('Không thể tải dữ liệu raffle');
    } finally {
      setIsLoading(false);
    }

    const interval = setInterval(() => {
      fetch('/api/raffles/123')
        .then((res) => res.json())
        .then((data) => {
          // Cập nhật state nếu cần
        });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const safeProgress = Math.min(Math.max(progress, 0), 100);
  let whiteBarCount: number;
  if (safeProgress >= 100 || safeProgress > 80) whiteBarCount = 5;
  else if (safeProgress > 60) whiteBarCount = 4;
  else if (safeProgress > 40) whiteBarCount = 3;
  else if (safeProgress > 20) whiteBarCount = 2;
  else whiteBarCount = 1;

  // Chuyển width và height thành string nếu là number
  const cardWidth = typeof width === 'number' ? `${width}px` : width;
  const cardHeight = typeof height === 'number' ? `${height}px` : height;
  const defaultWidth = 496;
  const defaultHeight = 642;
  const widthValue = parseFloat(cardWidth) || defaultWidth;
  const heightValue = parseFloat(cardHeight) || defaultHeight;
  const scale = Math.min(widthValue / defaultWidth, heightValue / defaultHeight); // Tính scale dựa trên width và height

  return (
    <div
      className={`${styles.raffleCard} ${cardBgColor}`}
      style={{
        width: customWidth || cardWidth,
        height: customHeight || cardHeight,
        '--scale': scale, // Áp dụng scale cho CSS
      } as React.CSSProperties}
    >
      {/* Card Header */}
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleContainer}>
          <Image
            src={logo}
            alt="Raffle Logo"
            width={80} // Kích thước cơ bản, scale sẽ áp dụng trong CSS
            height={80}
            className={styles.logoZklend}
          />
          <h3 className={styles.cardTitle}>{platformText}</h3>
        </div>
        <div className={styles.usdcContainer}>
          <h3 className={`text-[1rem] mr-0.25 mt-0.125 ${usdcClassName}`}>{prizeText}</h3>
          <Image
            src="/usdc-logo.png"
            alt="USDC Logo"
            width={30} // Kích thước cơ bản
            height={30}
            className={styles.usdcLogo}
          />
        </div>
      </div>

      {/* Countdown */}
      <Countdown
        endTime={endTime}
        width={countdownWidth}
        height={countdownHeight}
        titleClassName={countdownTitleClassName}
        timeBoxClassName={cardTimeBoxClassName}
      />

      {/* Stats */}
      <div className={styles.stats}>
        {tvl && <p>Raffle TVL:</p>}
        {apy && <p>APY:</p>}
        {yieldSource && <p>Yield Source:</p>}
        {tvl && <p>{totalValue}</p>}
        {apy && <p>{aprPercentage}</p>}
        {yieldSource && <p>{detailedAmount}</p>}
      </div>

      {/* Card Info */}
      <div className={`${styles.cardInfo} ${cardInfoClassName}`}>
        <h2>{buttonText.openParticipation || 'Open Participation'}</h2>
        <h2>Minimum {minimumDeposit}</h2>
      </div>

      {/* Button Container */}
      <div className={styles.buttonContainer}>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          disabled={buttonDisabled || disabled}
          loading={buttonLoading}
        >
          {buttonText}
        </Button>
      </div>

      {isLoading && <div>Đang tải...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default RaffleCard;