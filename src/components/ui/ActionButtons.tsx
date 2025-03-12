'use client'; // Đánh dấu là Client Component

import React from 'react';
import Button from "../../components/ui/Button";

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
    <div className="flex justify-center gap-2 mb-[48px] max-w-[380px] mx-auto">
      {/* Nút Deposit - Mở DepositModal khi nhấn */}
      <Button
        onClick={onOpenDepositModal}
        variant='fourth'
        size='large'
        className='w-full'
      >
        Deposit
      </Button>

      {/* Nút Withdraw - Mở WithdrawModal khi nhấn */}
         <Button
        onClick={onOpenWithdrawModal}
        variant='fourth'
        size='large'
        className='w-full'
      >
        Withdraw
      </Button>
    </div>
  );
};

export default ActionButtons;