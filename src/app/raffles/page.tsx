
import React from 'react';
import MyRaffles from '../../components/ui/MyRaffles';


const RafCard = () => {

  const raffles = [
    {
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 ngày từ bây giờ
      minimumDeposit: '20 USDC',
      depositedAmount: '20 USDC',
    },
    {
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20 USDC',
    },
  ];


  return (
    <div className="min-h-screen p-8">
        <MyRaffles raffles={raffles}/>
    </div>
  );
};

export default RafCard;