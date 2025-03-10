'use client'; // Đánh dấu là Client Component

import React from 'react';
import Button from '@/components/layout/Button'; // Giả sử bạn đã có component Button

interface ActionButtonsProps {
  onOpenDepositModal: () => void;
  onOpenWithdrawModal: () => void;
  onCloseModal?: () => void; // Optional prop để đóng modal nếu cần
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onOpenDepositModal,
  onOpenWithdrawModal,
}) => {

  return (
    <div className="flex justify-center gap-2 mb-[48px]">
      {/* Nút Deposit - Mở DepositModal khi nhấn */}
      <Button
        onClick={onOpenDepositModal}
        label="Deposit"
        variant="fourth"
      />

      {/* Nút Withdraw - Mở WithdrawModal khi nhấn */}
      <Button
        onClick={onOpenWithdrawModal}
        label="Withdraw"
        variant="fourth"
      />
    </div>
  );
};

export default ActionButtons;