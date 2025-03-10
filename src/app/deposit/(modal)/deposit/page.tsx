'use client'; // Client Component

import React, { useState } from 'react';
import Button from '@/components/layout/Button';
import '@/styles/Modal.module.css'; // Import custom CSS file
import { useRouter } from "next/navigation";




interface DepositModalProps {
  onClose: () => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ onClose }) => {

  const router = useRouter();


  const [depositAmount, setDepositAmount] = useState(0);
  const [totalDeposited, setTotalDeposited] = useState(10000); // Initial account balance

  const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9.]/g, '');
    if (numericValue === '') {
      setDepositAmount(0); 
    } else if (numericValue.length <= 15) {
      const parsedValue = parseFloat(numericValue) || 0;
      if (parsedValue <= totalDeposited) {
        setDepositAmount(parsedValue);
      } else {
        alert(`Deposit amount cannot exceed your current balance of $${totalDeposited.toFixed(4)} USDC`);
      }
    }
  };

  const handlePercentage = (percent: number) => {
    const calculatedAmount = (totalDeposited * (percent / 100)).toFixed(4);
    setDepositAmount(parseFloat(calculatedAmount));
  };

  const getEstimatedValue = () => {
    const amount = Number(depositAmount);
    return isNaN(amount) || amount <= 0 ? '0.0000' : amount.toFixed(4);
  };

  const handleDeposit = () => {
    if (depositAmount > 0 && depositAmount <= totalDeposited) {
      setTotalDeposited((prev) => prev - depositAmount); // Subtract deposited amount from balance
      setDepositAmount(0);
    }
  };
  const handleClose = () => {
    router.push("/deposit"); // Đóng modal bằng cách điều hướng về /deposit
  };

  return (
    // <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    //   {/* Overlay với sự kiện onClick để đóng modal */}
    //   <div onClick={onClose} className="absolute inset-0"></div>
    //   <div
    //     className="bg-[#111] p-6 rounded-[3px] border border-[#222] shadow-lg w-[387px] text-white relative"
    //     onClick={(e) => e.stopPropagation()} // Ngăn sự kiện lan truyền
    //   >
    //     <div className="flex justify-between items-center mb-4">
    //       <h2 className="text-[#757575] text-[20px] font-bold">Deposit</h2>
    //       <h2 className="text-[#757575] text-[20px] font-bold">{totalDeposited.toFixed(4)} USDC</h2>
    //     </div>
    //     <div className="mt-8">
    //       <input
    //         type="text"
    //         id="deposit"
    //         value={depositAmount > 0 ? depositAmount : ''}
    //         onChange={handleDepositChange}
    //         placeholder={depositAmount > 0 ? '' : '0'}
    //         className="w-full text-white text-[30px] bg-transparent focus:outline-none mt-2"
    //       />
    //       <p className="text-[#a1aaaa] text-[14px] mt-2">Est Value ($): {getEstimatedValue()}</p>
    //     </div>
    //     <div className="flex justify-between mt-8 mb-8 w-[50%]">
    //       {[25, 50, 75, 100].map((percent) => (
    //         <button
    //           key={percent}
    //           onClick={() => handlePercentage(percent)}
    //           className="bg-[#5a5a5a] text-white rounded-[3px] hover:bg-gray-600 flex-1 mr-1 text-[12px] py-1 px-2"
    //         >
    //           {percent}%
    //         </button>
    //       ))}
    //     </div>
    //     <div className="text-center">
    //       <Button
    //         label="Deposit"
    //         variant="third"
    //         className="w-full"
    //         onClick={handleDeposit}
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="modal-content">
      <div
        className="bg-[#111] p-6 rounded-[3px] border border-[#222] shadow-lg w-[387px] text-white relative"
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện lan truyền
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#757575] text-[20px] font-bold">Deposit</h2>
          <h2 className="text-[#757575] text-[20px] font-bold">
            {totalDeposited.toFixed(4)} USDC
          </h2>
        </div>
        <div className="mt-8">
          <input
            type="text"
            id="deposit"
            value={depositAmount > 0 ? depositAmount : ""}
            onChange={handleDepositChange}
            placeholder={depositAmount > 0 ? "" : "0"}
            className="w-full text-white text-[30px] bg-transparent focus:outline-none mt-2"
          />
          <p className="text-[#a1aaaa] text-[14px] mt-2">
            Est Value ($): {getEstimatedValue()}
          </p>
        </div>
        <div className="flex justify-between mt-8 mb-8 w-[50%]">
          {[25, 50, 75, 100].map((percent) => (
            <button
              key={percent}
              onClick={() => handlePercentage(percent)}
              className="bg-[#5a5a5a] text-white rounded-[3px] hover:bg-gray-600 flex-1 mr-1 text-[12px] py-1 px-2"
            >
              {percent}%
            </button>
          ))}
        </div>
        <div className="text-center">
          <Button
            label="Deposit"
            variant="third"
            className="w-full"
            onClick={handleDeposit}
          />
        </div>
      </div>
    </div>
  );
};

export default DepositModal;