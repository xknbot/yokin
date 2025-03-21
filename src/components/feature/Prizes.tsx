'use client'

import { useState, useEffect } from 'react';
import "../../styles/globals.css";
import Card from "../layout/Card"; 
import Button from "@/components/ui/Button";


const Prizes = () => {

    const [raffleData, setRaffleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

        
    const mockFetch = () => {
    setLoading(true);
    setError(null); // Reset lỗi khi thử lại
    try {
        const data = [{ id: 1, logoUrl: "/zklend-logo.png", title: "Zklend USDC Raffle", currency: "USDC", currencyLogoUrl: "/usdc-logo.png", endTime: new Date("2025-03-30T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
            { id: 2, logoUrl: "/zklend-logo.png", title: "Zklend USDC Raffle", currency: "USDC", currencyLogoUrl: "/usdc-logo.png", endTime: new Date("2025-03-30T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
          { id: 3, logoUrl: "/zklend-logo.png", title: "Zklend USDC Raffle", currency: "USDC", currencyLogoUrl: "/usdc-logo.png", endTime: new Date("2025-03-30T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
      ];
      if (!data.length) throw new Error("No data to display");
      setRaffleData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
        
  useEffect(() => {
    mockFetch();
  }, []);


    
    if (loading) return (
  <div className="flex justify-center items-center min-h-screen">
    <div className="text-[var(--color-white-2)] text-[24px] animate-pulse">Loading...</div>
  </div>
);

if (error) return (
  <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
    <div className="text-[var(--color-red-2)] text-[24px] p-4 border border-[var(--color-red-2)] rounded-md">
      Error: {error}
        </div>
        <Button variant="secondary" size="medium" onClick={mockFetch}>
        Try again
      </Button>
  </div>
);

if (!raffleData.length) return (
  <div className="flex justify-center items-center min-h-screen">
    <div className="text-[var(--color-gray-1)] text-[24px]">There`&apos;`s no prize to display.</div>
  </div>
);

    
    return (
        <div className="p-5 min-h-full"> 
            <div className="mt-[69px] mb-[72px] h-[98px] text-center" >
                <h1 className="text-[32px] font-semibold mb-6 leading-[38px] text-[var(--color-white-2)]">Keep your deposit. Win up to thousands of Benjamin</h1>
                <Button variant="secondary" size="medium">Deposit to win</Button>
            </div>

            <div className="max-w-full mx-auto">
                <h2 className="text-center text-[32px] bg-gradient-to-r from-[var(--color-green-2)] from-45% via-[var(--color-yellow-2)] via-50% to-[var(--color-pink-2)] to-60% bg-clip-text text-transparent mb-8 font-semibold ">Current prizes</h2>
                <div className="relative flex justify-center gap-5 mb-5 text-nowrap">
                    {raffleData.map((raffle) => (
                      <Card key={raffle.id} {...raffle}  />
          ))}

                
                </div>
            </div>

        </div>
        
        

    )
}

export default Prizes;