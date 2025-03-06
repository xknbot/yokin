'use client'; // Đánh dấu là Client Component

import React, { useState } from 'react';

interface WithdrawModalProps {
  onClose: () => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onClose }) => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const maxUSDC = 0.0056; // Giá trị USDC tối đa (giả định)

  const handlePercentage = (percent: number) => {
    const calculatedAmount = (maxUSDC * (percent / 100)).toFixed(4);
    setWithdrawAmount(parseFloat(calculatedAmount));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose} // Đóng modal khi nhấn ngoài
    >
      <div
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-[300px] text-center"
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện click lan ra ngoài
      >
        <h2 className="text-xl mb-4">Withdraw</h2>
        <p className="text-gray-400">This is Withdraw Modal</p>
        <div className="mt-4">
          <input
            type="number"
            value={withdrawAmount}
            readOnly
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-2 text-center"
          />
          <p className="text-gray-400">Est Value ($): {withdrawAmount.toFixed(4)}</p>
        </div>
        <div className="flex justify-between mt-4 mb-4">
          {[25, 50, 75, 100].map((percent) => (
            <button
              key={percent}
              onClick={() => handlePercentage(percent)}
              className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 flex-1 mx-1"
            >
              {percent}%
            </button>
          ))}
        </div>
        <button
          onClick={onClose} // Đóng modal khi nhấn nút
          className="w-full py-2 bg-white text-gray-900 rounded hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WithdrawModal;