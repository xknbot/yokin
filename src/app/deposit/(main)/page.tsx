'use client'; // Đánh dấu là Client Component để sử dụng useRouter và useSearchParams

import React, { useMemo } from 'react';
import { useRouter, useSearchParams} from 'next/navigation';
import styles from '@/styles/DepositPage.module.css';
import Header from '@/components/ui/Header';
import ActionButtons from '@/components/ui/ActionButtons';
import AccountInfo from '@/components/feature/AccountInfo';
import StatisticsDetails from '../../../components/feature/StatsCard';

export default function DepositPage() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentModal = searchParams.get("modal");


  const handleOpenDepositModal = () => {
    router.push("/deposit?modal=deposit");
  };

  const handleOpenWithdrawModal = () => {
    router.push("/deposit?modal=withdraw");
  };



  // Memoize MainContent để tránh re-render không cần thiết
  const MainContent = useMemo(() => {
    return (
      <>
        <Header title="Prize USDC" subtitle="2x USDC" />
        <ActionButtons
          onOpenDepositModal={handleOpenDepositModal}
          onOpenWithdrawModal={handleOpenWithdrawModal}
          
        />
        <AccountInfo 
          balance="0"
          winChance="0"
          prizeToken="przUSDC | 0x03...505"
          depositToken="USDC | 0x03...505"
          vaultOwner="0x03...505 "
        />
        <StatisticsDetails 
          totalDeposited="$4.7M"
          totalDepositedAmount="4,234,456 USDC"
          winChanceAPR="9.2% APR"
          yieldSource="ZKlend"
          yieldSourceLink="zkp.zklend.com"
          timeLeft="4d : 19hr : 3m : 21s"
          participants={125}
          countdownTitleClassName='!hidden'
          countdownClassName='mx-auto w-fit'
        />
      </>
    );
  }, [handleOpenDepositModal, handleOpenWithdrawModal]);

  return (
    <div className={styles.depositPage}>
      {/* Nội dung chính */}
      {MainContent}


    </div>
  );
}