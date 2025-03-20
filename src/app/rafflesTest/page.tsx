
import React from 'react';
import MyRafflesData from '@/app/deposit/(modal)/raffle/page';


const RafCard = () => {

  const raffles = [
    {
      id: 1,
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 4 ngày từ bây giờ
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: '/zklend-logo.png', // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
    {
      id: 2,
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: '/zklend-logo.png', // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
    {
      id: 3,
      title: 'ZkLend USDC Raffle',
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: "/zklend-logo.png", // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
    {
      id: 4,
      title: 'ZkLend USDC Raffle',  
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: '/zklend-logo.png', // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
    {
      id: 5,
      title: 'ZkLend USDC Raffle',  
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: '/zklend-logo.png', // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
    {
      id: 6,
      title: 'ZkLend USDC Raffle',  
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 0 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: '/zklend-logo.png', // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
    {
      id: 7,
      title: 'ZkLend USDC Raffle',  
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: '/zklend-logo.png', // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
    {
      id: 8,
      title: 'ZkLend USDC Raffle',  
      tvl: '21.6K USDC',
      apy: '14.6%',
      yieldSource: 'ZkLend',
      endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      minimumDeposit: '20 USDC',
      depositedAmount: '20',
      logoUrl: '/zklend-logo.png', // Thêm logoUrl
      currency: 'USDC', // Thêm currency
      currencyLogoUrl: '/usdc-logo.png', // Thêm currencyLogoUrl
    },
  ];


  return (
    <div className="min-h-screen p-8">
      <MyRafflesData raffles={raffles} />
    </div>
  );
};

export default RafCard;