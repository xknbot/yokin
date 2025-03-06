'use client'; // Đánh dấu là Client Component

import React from 'react';
import Button from '@/app/components/ui/Button'; // Giả sử bạn đã có component Button
import { useRouter } from 'next/navigation';

interface ActionButtonsProps {
  onCloseModal?: () => void; // Thêm prop để đóng modal từ main content
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onCloseModal }) => {
  const router = useRouter();

  // Hàm mở modal Deposit
  const handleDepositClick = () => {
    router.push('/deposit?modal=open&type=deposit'); // Mở modal Deposit
  };

  // Hàm mở modal Withdraw
  const handleWithdrawClick = () => {
    router.push('/deposit?modal=open&type=withdraw'); // Mở modal Withdraw
  };

  return (
    <div className="flex justify-center gap-2 mb-[48px]">
      {/* Nút Deposit - Mở DepositModal khi nhấn */}
      <Button
        onClick={handleDepositClick}
        label="Deposit"
        variant="fourth"
      />

      {/* Nút Withdraw - Mở WithdrawModal khi nhấn */}
      <Button
        onClick={handleWithdrawClick}
        label="Withdraw"
        variant="fourth"
      />
    </div>
  );
};

export default ActionButtons;