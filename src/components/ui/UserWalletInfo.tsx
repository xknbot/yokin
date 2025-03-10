"use client"
import React from 'react';
import Image from 'next/image';


interface UserWalletInfoProps {
  walletAddress: string;
  referralCode: string;
  totalDeposited: string;
  onLogout: () => void;
}

const UserWalletInfo: React.FC<UserWalletInfoProps> = ({
  walletAddress = '0x0034...678',
  referralCode = '0xDYDD34',
  totalDeposited = '$32.8k',
  onLogout,
}) => {
  const handleCopyReferral = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied to clipboard!');
  };

  return (
    <div className="bg-[#111] border border-[#222] text-white rounded-lg p-6 w-full max-w-sm">
      {/* Wallet Address */}
      <div className="mb-4">
        <p className="text-[14px] text-[#fafafa]">{walletAddress}</p>
      </div>

      {/* Referral Code */}
      <div className="mb-6 flex items-center">
        <p className="text-[14px] text-[#757575]">Your referral code:</p>
        <div className="flex items-center">
          <span className="mr-2 text-[14px] text-[#fafafa] ml-1">{referralCode}</span>
          <button
            onClick={handleCopyReferral}
            className="w-5 h-5 rounded flex items-center justify-center hover:opacity-50"
          >
            <Image src="/content_copy.svg" alt="copyicon" height={20} width={20}/>
          </button>
        </div>
      </div>

      {/* Total Deposited Assets */}
      <div className="mb-6">
        <p className="text-[14px] text-[#757575]">Total Deposited Assets</p>
        <p className="text-[30px] font-bold mt-1 text-[#f3f3f3]">{totalDeposited}</p>
      </div>

      {/* Navigation Links */}
      <div className="space-y-4 mb-6">
        <a href="#" className="flex items-center text-gray-300 hover:text-white">
          <span className="w-5 h-5 mr-2">
            
            <Image src="/TickerIcon.png" alt="raffles" width={50} height={50}/>

          </span>
          <span className='text-[14px] text-[#f3f3f3]'>My raffles </span> 
          <span className="ml-auto">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </a>
        <div className="border-b border-[#767676]"></div>
        <a href="#" className="flex items-center text-gray-300 hover:text-white">
          <span className="w-5 h-5 mr-2">
            <Image src="/AccountBalanceWallet.svg" alt="walleticon" width={50} height={50}/>
          </span>
          <span className='text-[14px] text-[#f3f3f3]'>My transactions</span> 

          <span className="ml-auto">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </a>
      </div>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="w-full bg-[#823536] border border-[#FF5C5F] text-white text-[14px] py-2 rounded-md flex items-center justify-center hover:bg-red-800"
      >
        Log out
        <span className="ml-2">
          <Image src="/logout.png" alt="logouticon" width={20} height={20}/>
        </span>
      </button>
    </div>
  );
};

export default UserWalletInfo;