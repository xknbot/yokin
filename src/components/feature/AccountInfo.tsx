import React from 'react';
import { FaRegCopy } from 'react-icons/fa'; // Thêm import icon

interface AccountStatusProps {
  balance?: number | string;
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
  vaultOwner = '0x003D...SD5 ',
}) => {
  const renderItem = (label: string, value: string | number | React.ReactNode) => (
    <div className="flex justify-between items-center py-1">
      <span className="text-[14px] text-white">{label}</span>
      <svg style={{ flex: 1, margin: '10px 10px 0 10px' }} height="2" width="100%">
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="#757575"
          strokeWidth="1"
          strokeDasharray="10 5" // Dash 10px, gap 5px
        />
      </svg>
      <span className="text-[14px] font-medium text-white">
        {typeof value === 'string' || typeof value === 'number' ? String(value) : value}
      </span>
    </div>
  );

  // Split prizeToken and depositToken if they contain " | "
  const prizeParts = prizeToken.split(' | ');
  const depositParts = depositToken.split(' | ');

  const prizeTokenValue =
    prizeParts.length > 1 ? (
      <div className='flex'>
        {prizeParts[0]} <span style={{ color: 'gray' }}>{`| ${prizeParts[1]}`}</span>
        <FaRegCopy style={{ color: 'gray', marginLeft: '8px', cursor: 'pointer' }} /> {/* Thêm icon */}
      </div>
    ) : (
      prizeToken
    );

  const depositTokenValue =
    depositParts.length > 1 ? (
      <div className='flex'>
        {depositParts[0]} <span style={{ color: 'gray' }}>{`| ${depositParts[1]}`}</span>
        <FaRegCopy style={{ color: 'gray', marginLeft: '8px', cursor: 'pointer' }} /> {/* Thêm icon */}
      </div>
    ) : (
      depositToken
    );

  // Cập nhật vaultOwnerValue để thêm icon FaRegCopy
  const vaultOwnerValue = (
    <div className='flex'>
      <span style={{ color: 'gray' }}>{vaultOwner}</span>
      <FaRegCopy style={{ color: 'gray', marginLeft: '8px', cursor: 'pointer' }} /> {/* Thêm icon */}
    </div>
  );

  return (
    <div className="max-w-2xl flex flex-col gap-1 mx-auto">
      {renderItem('Your Balance:', balance)}
      {renderItem('Your Win Chance:', winChance)}
      {renderItem('Prize Token:', prizeTokenValue)}
      {renderItem('Deposit Token:', depositTokenValue)}
      {renderItem('Vault Owner:', vaultOwnerValue)}
    </div>
  );
};

export default AccountStatus;