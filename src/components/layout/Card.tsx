'use client';

import React from 'react';
import styles from '@/styles/Card.module.css';
import Image from 'next/image';
import Countdown from '@/components/feature/Countdown'; // Đảm bảo đường dẫn đúng

import Button from '@/components/ui/Button';

interface CardProps {
  logoUrl?: string;
  currency?: string;
  currencyLogoUrl?: string;
  size?: 'small' | 'medium' | 'large';
  width?: string | number;
  height?: string | number;
  title?: string;
  tvl?: string;
  apy?: string;
  yieldSource?: string;
  endTime?: Date | string;
  minimumDeposit?: string;
  icon?: React.ReactNode;
  linkHref?: string;
  buttonText?: {
    openParticipation?: string;
  };
  className?: string;
  buttonLabel?: string;
  countdownWidth?: string | number;
  countdownHeight?: string | number;
  countdownTitleClassName?: string;
  cardInfoClassName?: string;
  cardBgColor?: string;
  usdcClassName?: string;
  cardTimeBoxClassName?: string;
  disabled?: boolean;
  logoSize?: number;
  usdcLogoSize?: number;

}

const RaffleCard: React.FC<CardProps> = ({
  logoUrl, // Giá trị mặc định nếu logoUrl không có,
  currency,
  currencyLogoUrl, // Giá trị mặc định nếu currencyLogoUrl không có,
  title = 'Zklend USDC Raffle',
  tvl,
  apy,
  yieldSource,
  endTime,
  minimumDeposit = '20 USDC',
  buttonText = {
    openParticipation: 'Open Participation',
  },
  className = '',
  buttonLabel = 'Participate',
  width = '496px',
  height = '642px',
  countdownWidth = '200px', // Mặc định như bạn muốn
  countdownHeight = 'auto',
  countdownTitleClassName = '',
  cardInfoClassName = '',
  cardBgColor = '',
  usdcClassName = '',
  cardTimeBoxClassName = '',
  disabled = false,
  logoSize,
  usdcLogoSize,

}) => {
  const cardWidth = typeof width === 'number' ? `${width}px` : width;
  const cardHeight = typeof height === 'number' ? `${height}px` : height;

  const defaultWidth = 496;
  const defaultHeight = 642;
  const widthValue = parseFloat(cardWidth) || defaultWidth;
  const heightValue = parseFloat(cardHeight) || defaultHeight;
  const widthScale = widthValue / defaultWidth;
  const heightScale = heightValue / defaultHeight;
  // Tính scale dựa trên tỷ lệ giữa width/height thực tế và kích thước mặc định
  const scale = Math.min(widthScale, heightScale);

  const finalLogoSize = logoSize !== undefined ? logoSize : 50 * scale;
  const finalUsdcLogoSize = usdcLogoSize !== undefined ? usdcLogoSize : 30 * scale;

  return (
    <div
      className={`${styles.card} ${className} ${cardBgColor}`}
      style={{
        width: cardWidth,
        height: cardHeight,
        '--scale': scale,
      } as React.CSSProperties}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleContainer}>
          {logoUrl && logoUrl !== "" ? ( // Kiểm tra logoUrl trước khi render
            <Image
              src={logoUrl}
              width={finalLogoSize}
              height={finalLogoSize}
              alt={`${title} Logo`}
              className={styles.logoZklend}
            />
          ) : (
            <div className={styles.logoPlaceholder}>No Logo</div> // Placeholder nếu không có logo
          )}
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.usdcContainer}>
          <h3 className={`text-[20px] mt-0.5 ${usdcClassName}`}>{currency}</h3>
          {currencyLogoUrl && currencyLogoUrl !== "" ? ( // Kiểm tra currencyLogoUrl trước khi render
            <Image
              src={currencyLogoUrl}
              width={finalUsdcLogoSize}
              height={finalUsdcLogoSize}
              alt={`${currency} Logo`}
              className={styles.usdcLogo}
            />
          ) : (
            <div className={styles.logoPlaceholder}>No Logo</div> // Placeholder nếu không có logo
          )}
        </div>
      </div>

      {/* Sửa lỗi cú pháp và truyền countdownClassName */}
      <Countdown
        endTime={endTime}
        width={countdownWidth}
        height={countdownHeight} // Truyền từ props thay vì hardcode
        titleClassName={countdownTitleClassName}
        timeBoxClassName={cardTimeBoxClassName}
      />

      <div className={styles.stats}>
       <p>Raffle TVL:</p>
      <p>APY:</p>
      <p>Yield Source:</p>
      <p>{tvl || "N/A"}</p>
      <p>{apy || "N/A"}</p>
      <p>{yieldSource || "N/A"}</p>
      </div>

      <div className={styles.cardInfo}>
        <h2 className={cardInfoClassName}>{buttonText.openParticipation}</h2>
        <h2 className={cardInfoClassName}>Minimum {minimumDeposit}</h2>
      </div>
      <Button variant='third' size='large' disabled={disabled}>
        {buttonLabel}
      </Button>

    </div>
  );
};

export default RaffleCard;