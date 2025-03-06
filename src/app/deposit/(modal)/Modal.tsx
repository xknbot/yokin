'use client'; // Đánh dấu là Client Component

import React from 'react';
import { useSearchParams } from 'next/navigation';
import DepositModal from '../DepositModal';
import WithdrawModal from '../WithdrawModal';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const searchParams = useSearchParams();
  const modalType = searchParams.get('type'); // Kiểm tra loại modal (deposit hoặc withdraw)

  return (
    <>
      {modalType === 'deposit' && <DepositModal onClose={onClose} />}
      {modalType === 'withdraw' && <WithdrawModal onClose={onClose} />}
    </>
  );
};

export default Modal;