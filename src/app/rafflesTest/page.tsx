
import React from 'react';
import MyRafflesData from '@/app/deposit/(modal)/raffle/page';


const RafCard = () => {

  const raffles = [
    {
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 ngày từ bây giờ
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
    },
    {
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
    },
    {
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
    },
    {
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
    },
  ];


  return (
    <div className="min-h-screen p-8">
      <MyRafflesData raffles={raffles} />
    </div>
  );
};

export default RafCard;