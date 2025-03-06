'use client'; // Đánh dấu là Client Component để sử dụng useRouter và useSearchParams

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@/styles/DepositPage.module.css';
import Header from '@/app/deposit/Header';
import ActionButtons from './ActionButtons';
import AccountInfo from '@/app/deposit/AccountInfo';
import StatisticsDetails from './StatsCard';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';


export default function DepositPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modal = searchParams.get('modal'); // Kiểm tra query param 'modal'

  // Hàm đóng modal bằng cách xóa query param
  const closeModal = () => {
    router.push('/deposit'); // Xóa query param để đóng modal
  };

  return (
    <div className={styles.depositPage}>
      {/* Slot cho nội dung chính */}
      <slot name="main">
        <MainContent onCloseModal={closeModal} />
      </slot>
      {/* Slot cho modal, chỉ hiển thị nếu modal=open */}
      {modal === 'open' && (
        <slot name="modal">
          <ModalContent onClose={closeModal} />
        </slot>
      )}
    </div>
  );
}

// Props để truyền hàm đóng modal
interface MainContentProps {
  onCloseModal: () => void;
}

// Nội dung chính
function MainContent({ onCloseModal }: MainContentProps) {
  return (
    <>
      <Header title="Prize USDC" subtitle="2x USDC" />
      <ActionButtons />
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
}

// Nội dung modal
interface ModalContentProps {
  onClose: () => void;
}

function ModalContent({ onClose }: ModalContentProps) {
  const searchParams = useSearchParams();
  const modalType = searchParams.get('type'); // Kiểm tra loại modal (deposit hoặc withdraw)

  return (
    <>
      {modalType === 'deposit' && <DepositModal onClose={onClose} />}
      {modalType === 'withdraw' && <WithdrawModal onClose={onClose} />}
    </>
  );
}