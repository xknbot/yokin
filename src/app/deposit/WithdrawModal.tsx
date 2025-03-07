'use client'; // Client Component

import React, { useState } from 'react';
import Button from '../components/ui/Button';
import '@/styles/Modal.module.css'; // Import custom CSS file (nếu cần)

interface WithdrawModalProps {
  onClose: () => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onClose }) => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [balance, setBalance] = useState(10000);
  const [errorMessage, setErrorMessage] = useState('');
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [totalDeposited, setTotalDeposited] = useState(10000); // Giả định số tiền đã deposit

  const handleWithdrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9.]/g, '');
    if (numericValue === '' || !isNaN(numericValue)) {
      setWithdrawAmount(numericValue);
      setErrorMessage('');
    }
  };

  const handleWithdraw = () => {
    const amount = Number(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setErrorMessage('Please enter a valid amount greater than 0.');
      return;
    }
    if (amount > balance) {
      setErrorMessage(`Insufficient balance. Your balance is $${balance.toFixed(2)}`);
      return;
    }
    setBalance(prevBalance => prevBalance - amount);
    setTotalWithdrawn(prev => prev + amount);
    setTotalDeposited(prev => prev - amount); // Giảm số tiền đã deposit
    setWithdrawAmount('');
    setErrorMessage(`Withdrawal successful! New balance: $${(balance - amount).toFixed(2)}. Total withdrawn: $${(totalWithdrawn + amount).toFixed(2)}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Overlay với sự kiện onClick để đóng modal */}
      <div onClick={onClose} className="absolute inset-0"></div>
      <div
        className="bg-[#111] p-6 rounded-[3px] border border-[#222] shadow-lg w-[387px] text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#757575] text-[20px] font-bold">Withdraw</h2>
          <h2 className="text-[#757575] text-[20px] font-bold">{totalWithdrawn.toFixed(4)} USDC</h2>
        </div>
        <div className="mt-8">
          <label htmlFor="withdraw" className="text-[#a1a1aa] text-[14px]">Deposited Amount: {totalDeposited.toFixed(4)} USDC</label>
          <input
            type="text"
            id="withdraw"
            value={withdrawAmount}
            onChange={handleWithdrawChange}
            placeholder="0"
            className="w-full text-white text-[30px] bg-transparent focus:outline-none mt-2"
          />
          <p className="text-[#a1aaaa] text-[14px] mt-2">
            Est Value ($): 0
          </p>
        </div>
        <div className="flex justify-between mt-8 mb-8 w-[50%]">
          {[25, 50, 75, 100].map((percent) => (
            <button
              key={percent}
              onClick={() => {
                const calculatedAmount = (totalDeposited * (percent / 100)).toFixed(2);
                setWithdrawAmount(calculatedAmount);
              }}
              className="bg-[#5a5a5a] text-white rounded-[3px] hover:bg-gray-600 flex-1 mr-1 text-[12px] py-1 px-2"
            >
              {percent}%
            </button>
          ))}
        </div>
        <div className="text-center">
          <Button
            label="Withdraw"
            variant="third"
            className="w-full"
            onClick={handleWithdraw}
          />
        </div>
        {errorMessage && (
          <p className="text-green-600 text-[14px] mt-2 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default WithdrawModal;