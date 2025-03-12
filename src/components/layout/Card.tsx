'use client';

import React from 'react';
import styles from '@/styles/Card.module.css';
import Image from 'next/image';
import Countdown from '@/components/feature/Countdown'; // Đảm bảo đường dẫn đúng
import Button from '@/components/layout/Button';
import Button1 from '@/components/ui/Button1';

interface CardProps {
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
  

}

const RaffleCard: React.FC<CardProps> = ({
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
  cardTimeBoxClassName='',

}) => {
  const cardWidth = typeof width === 'number' ? `${width}px` : width;
  const cardHeight = typeof height === 'number' ? `${height}px` : height;

  const defaultWidth = 496;
  const defaultHeight = 642;
  const widthValue = parseFloat(cardWidth) || defaultWidth;
  const heightValue = parseFloat(cardHeight) || defaultHeight;
  const widthScale = widthValue / defaultWidth;
  const heightScale = heightValue / defaultHeight;
  const scale = Math.min(widthScale, heightScale);

  const logoSize = 80 * scale;
  const usdcLogoSize = 30 * scale;

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
          <Image
            src="/zklend-logo.png"
            width={logoSize}
            height={logoSize}
            alt="ZKlend Logo"
            className={styles.logoZklend}
          />
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.usdcContainer}>
          <h3 className={`text-[20px] mr-1 mt-0.5 ${usdcClassName}`}>USDC</h3>
          <Image
            src="/usdc-logo.png"
            width={usdcLogoSize}
            height={usdcLogoSize}
            alt="USDC Logo"
            className={styles.usdcLogo}
          />
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
        {tvl && <p>Raffle TVL:</p>}
        {apy && <p>APY:</p>}
        {yieldSource && <p>Yield Source:</p>}
        {tvl && <p>{tvl}</p>}
        {apy && <p>{apy}</p>}
        {yieldSource && <p>{yieldSource}</p>}
      </div>

      <div className={styles.cardInfo}>
        <h2 className={cardInfoClassName}>{buttonText.openParticipation}</h2>
        <h2 className={cardInfoClassName}>Minimum {minimumDeposit}</h2>
      </div>
      <Button1 variant='third' size='large' >
        Participate
      </Button1>

    </div>
  );
};

export default RaffleCard;