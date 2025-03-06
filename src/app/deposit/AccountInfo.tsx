import React from 'react';

interface AccountStatusProps {
  balance?: number | string; // Có thể là số hoặc chuỗi
  winChance?: number | string;
  prizeToken?: string;
  depositToken?: string;
  vaultOwner?: string;
}

const AccountStatus: React.FC<AccountStatusProps> = ({ 
  balance = 0, 
  winChance = 0, 
  prizeToken = 'USD', 
  depositToken = 'USDC', 
  vaultOwner = '0x003D...SD5' 
}) => {
  const renderItem = (label: string, value: string | number | React.ReactNode) => (
    <div className="flex justify-between items-end py-1">
      <span className="text-[14px] text-white w-[150px]">{label}</span>
      <div className="w-md h-px border-[#757575] border border-dashed mb-1"></div> {/* Dòng ngang xám */}
      <span className="text-[14px] font-medium text-white">{typeof value === 'string' ? value : String(value)
      }</span>
    </div>
  );

  return (
    <div className="max-w-2xl flex flex-col gap-1 mx-auto">
      {renderItem('Your Balance:', balance)}
      {renderItem('Your Win Chance:', winChance)}
      {renderItem('Prize Token:', prizeToken)}
      {renderItem('Deposit Token:', depositToken)}
      {renderItem('Vault Owner:', vaultOwner)}
    </div>
  );
};

export default AccountStatus;