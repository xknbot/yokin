'use client'; // Client Component

import React, { useState } from 'react';
import '@/styles/Modal.module.css'; // Import custom CSS file (adjust path as needed)
import Button from '../components/ui/Button';

interface DepositModalProps {
  onClose: () => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ onClose }) => {

  const onClick = () => {
    // Logic to close the modal
    console.log("Modal closed");
    // Add your close logic here (e.g., set a state to hide the modal)
  };
  const [depositAmount, setDepositAmount] = useState(0);
  const maxUSDC = 0.0056; // Giá trị USDC tối đa

  const handlePercentage = (percent: number) => {
    const calculatedAmount = (maxUSDC * (percent / 100)).toFixed(4);
    setDepositAmount(parseFloat(calculatedAmount));
  };

  return (
    <div className='fixed w-full h-full top-0 left-0 z-9'>
      <div onClick={() => onClose()} className='absolute w-full h-full top-0 left-0 bg-black/20 backdrop-blur-[3px] '></div>
      
      <div
        className="absolute left-[40%] top-[30%] bg-[#111] p-6 rounded-[3px] border border-[#222] shadow-lg w-[387px] text-white z-10"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#757575] text-[20px] font-bold">Deposit</h2>
          <span className="text-[#757575] text-[20px] font-bold">{maxUSDC} USDC</span> {/* Added USDC amount */}
        </div>
        <div className="mt-8">
          <input
            type="number"
            value={depositAmount}
            readOnly
            className="w-full text-white text-[30px]"
          />
          <p className="text-[#a1aaaa] text-[14px]">Est Value ($): {depositAmount.toFixed(4)}</p>
        </div>
        <div className="flex justify-between mt-8 mb-8 w-[50%]">
          {[25, 50, 75, 100].map((percent) => (
            <button
              key={percent}
              onClick={() => handlePercentage(percent)}
              className=" bg-[#5a5a5a] text-white rounded-[3px] hover:bg-gray-600 flex-1 mr-1 text-xs py-1 px-2"
            >
              {percent}%
            </button>
          ))}
        </div>
        <div className='text-center'>
       <Button label="Deposit" variant="third" className='w-full'/>

        </div>
      </div>
    </div>
  );
};

export default DepositModal;
