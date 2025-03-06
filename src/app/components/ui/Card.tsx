'use client';

import React from 'react';
import styles from '@/styles/Card.module.css';
import Button from '@/app/components/ui/Button';
import { IoLogoUsd } from 'react-icons/io'; // Biểu tượng USDC
import Image from 'next/image';
import Countdown from '@/app/components/ui/Countdown';

// Định nghĩa interface cho props
interface CardProps {
  title?: string;
  tvl: string;
  apy: string;
  yieldSource: string;
  endTime: Date | string; // Thời gian kết thúc (timestamp hoặc Date object)
  minimumDeposit?: string;
  icon?: React.ReactNode; // Cho phép truyền icon tùy chỉnh
  linkHref?: string; // Đường dẫn cho Link, mặc định là "/usdc"
  buttonText?: {
    openParticipation?: string; // Văn bản cho nút Open Participation
  };
  className?: string; // Thêm prop className để nhận class từ Prizes
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
  className, // Nhận className từ Prizes
}) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      {/* Header của card */}
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleContainer}>
          <Image
            src="/zklend-logo.png"
            width={80}
            height={80}
            alt="ZKlend Logo"
            className={styles.logoZklend}
          />
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.usdcContainer}>
          <h3>USDC</h3>
          <Image src="/usdc-logo.png" width={30} height={30} alt="USDC Logo" className={styles.usdcLogo} />
        </div>
      </div>
      {/* Thêm Countdown với endTime riêng cho mỗi card */}
      <Countdown endTime={endTime} />
      {/* Các chỉ số - hiển thị linh hoạt */}
      <div className={styles.stats}>
        {tvl && <p>Raffle TVL:</p>}
        {apy && <p>APY:</p>}
        {yieldSource && <p>Yield Source:</p>}
        {tvl && <p>{tvl}</p>}
        {apy && <p>{apy}</p>}
        {yieldSource && <p>{yieldSource}</p>}
      </div>


      <div className={styles.cardInfo}>
        <h2>{buttonText.openParticipation}</h2>
        <h2>Minimum {minimumDeposit}</h2>
      </div>


      <Button
        label= "Participate"
        variant="third"
        className={`${styles.participateButton}`}
      />
    </div>
  );
};



export default RaffleCard;