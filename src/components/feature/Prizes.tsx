'use client'

import "../../styles/globals.css";
import Button from "../layout/Button";
import styles from "@/styles/Prizes.module.css";
import Card from "../layout/Card"; 
import Button1 from "@/components/ui/Button1";


const Prizes = () => {



    const raffleData = [
  { id: 1, endTime: new Date("2025-03-15T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
  { id: 2, endTime: new Date("2025-03-15T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
  { id: 3, endTime: new Date("2025-03-15T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
    ];
    
    return (
        <div className="p-5 min-h-full"> 
            <div className="mt-[69px] mb-[72px] h-[98px] text-center" >
                <h1 className="text-[32px] font-semibold mb-6 leading-[38px] text-[var(--color-white-2)]">Keep your deposit. Win up to thousands of Benjamin</h1>
                <Button1 variant="secondary" size="medium">
                    Deposit to win
                    </Button1>
            </div>

            <div className="max-w-full mx-auto">
                <h2 className="text-center text-[32px] bg-gradient-to-r from-[var(--color-green-2)] from-45% via-[var(--color-yellow-2)] via-50% to-[var(--color-pink-2)] to-60% bg-clip-text text-transparent mb-8 font-semibold ">Current prizes</h2>
                <div className="relative flex justify-center gap-5 mb-5 text-nowrap">
                {/* <div className="absolute inset-0 top-0 left-0 w-full h-full z-10 bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(255,255,255,1),rgba(0,0,0,1))] mix-blend-overlay"></div> */}
                <Card key={raffleData[0].id} {...raffleData[0]} />
                <Card key={raffleData[1].id} {...raffleData[1]} />
                <Card key={raffleData[2].id} {...raffleData[2]} />
                </div>
            </div>

        </div>
        
        

    )
}

export default Prizes;