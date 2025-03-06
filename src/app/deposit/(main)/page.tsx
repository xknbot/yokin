'use client'; // Đánh dấu là Client Component

import React from 'react';
import styles from '@/styles/DepositPage.module.css';
import Header from '../Header';
import ActionButtons from '../ActionButtons';
import AccountInfo from '../AccountInfo';
import StatisticsDetails from '../StatsCard';

interface MainContentProps {
  onCloseModal: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ onCloseModal }) => {
  return (
    <div className={styles.depositPage}>
      <Header title="Prize USDC" subtitle="2x USDC" />
      <ActionButtons onCloseModal={onCloseModal} />
      <AccountInfo 
        balance="0"
        winChance="0"
        prizeToken="przUSDC | 0x03...505"
        depositToken="USDC | 0x03...505"
        vaultOwner="0x03...505"
      />
      <StatisticsDetails 
        totalDeposited="$4.7M"
        totalDepositedAmount="4,234,456 USDC"
        winChanceAPR="9.2% APR"
        yieldSource="ZKlend"
        yieldSourceLink="zkp.zklend.com"
        timeLeft="4d : 19hr : 3m : 21s"
        participants={123}
      />
    </div>
  );
};

export default MainContent;