'use client'; // Đánh dấu là Client Component để sử dụng useRouter và useSearchParams

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@/styles/DepositPage.module.css';
import Header from '@/app/deposit/Header';
import ActionButtons from './ActionButtons';
import AccountInfo from '@/app/deposit/AccountInfo';
import StatisticsDetails from './StatsCard';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';

export default function DepositPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal'); // Kiểm tra query param 'modal'
  const modalType = searchParams.get('type'); // Kiểm tra loại modal

  // State để quản lý modal
  const [isModalOpen, setIsModalOpen] = useState(modal === 'open');
  const [localModalType, setLocalModalType] = useState<'deposit' | 'withdraw' | null>(
    modal === 'open' ? (modalType as 'deposit' | 'withdraw' | null) : null
  );

  // Đồng bộ state với query param khi URL thay đổi
  useEffect(() => {
    setIsModalOpen(modal === 'open');
    setLocalModalType(modal === 'open' ? (modalType as 'deposit' | 'withdraw' | null) : null);
  }, [modal, modalType]);

  // Hàm mở modal
  const openModal = (type: 'deposit' | 'withdraw') => {
    router.push(`/deposit?modal=open&type=${type}`);
    setIsModalOpen(true);
    setLocalModalType(type);
  };

  // Hàm đóng modal
  const closeModal = () => {
    router.push('/deposit'); // Xóa query param để đóng modal
    setIsModalOpen(false);
    setLocalModalType(null);
  };

  // Memoize MainContent để tránh re-render không cần thiết
  const MainContent = useMemo(() => {
    return (
      <>
        <Header title="Prize USDC" subtitle="2x USDC" />
        <ActionButtons
          onOpenDepositModal={() => openModal('deposit')}
          onOpenWithdrawModal={() => openModal('withdraw')}
          onCloseModal={closeModal} // Truyền hàm đóng modal nếu cần
        />
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
      </>
    );
  }, []);

  return (
    <div className={styles.depositPage}>
      {/* Nội dung chính */}
      {MainContent}

      {/* Modal chỉ hiển thị khi isModalOpen là true */}
      {isModalOpen && localModalType && (
        <>
          {localModalType === 'deposit' && <DepositModal onClose={closeModal} />}
          {localModalType === 'withdraw' && <WithdrawModal onClose={closeModal} />}
        </>
      )}
    </div>
  );
}