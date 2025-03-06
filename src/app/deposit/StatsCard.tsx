import React, { useState, useEffect } from 'react';
import BarChart from '@/app/vaults/BarChart';
import Link from 'next/link';
import Countdown from '@/app/components/ui/Countdown';
import styles from "@/styles/DepositPage.module.css";



// Định nghĩa kiểu cho props
interface StatisticsDetailsProps {
  totalDeposited?: string; // Ví dụ: "$4.7M"
  totalDepositedAmount?: string; // Ví dụ: "4,234,456 USDC"
  winChanceAPR?: string; // Ví dụ: "9.2% APR"
  yieldSource?: string; // Ví dụ: "ZKlend"
  yieldSourceLink?: string; // Ví dụ: "zkp.zklend.com"
  timeLeft?: string; // Ví dụ: "4d : 19hr : 3m : 21s"
  participants?: number | string; // Ví dụ: "123"
}



const chartData = [15, 20, 25, 30, 35];

const StatisticsDetails: React.FC<StatisticsDetailsProps> = ({
  totalDeposited = '$4.7M',
  totalDepositedAmount = '4,234,456 USDC',
  winChanceAPR = '9.2% APR',
  yieldSource = 'ZKlend',
  yieldSourceLink = 'zkp.zklend.com',
  timeLeft = '4d : 19hr : 3m : 21s',
  participants = 123,
}) => {
  // Tính toán endTime dựa trên timeLeft
  const [endTime, setEndTime] = useState<Date | null>(null);

  useEffect(() => {
    if (!timeLeft) {
      setEndTime(null);
      return;
    }

    // Hàm parse timeLeft từ định dạng "4d : 19hr : 3m : 21s" thành giây
    const parseTimeLeft = (timeStr: string): number => {
      const parts = timeStr.split(' : ');
      let totalSeconds = 0;

      parts.forEach((part) => {
        const [value, unit] = [parseInt(part), part.slice(-2)];
        if (unit === 'd') totalSeconds += value * 24 * 3600; // Ngày sang giây
        else if (unit === 'hr') totalSeconds += value * 3600; // Giờ sang giây
        else if (unit === 'm') totalSeconds += value * 60; // Phút sang giây
        else if (unit === 's') totalSeconds += value; // Giây
      });

      return totalSeconds;
    };

    const secondsLeft = parseTimeLeft(timeLeft);
    if (isNaN(secondsLeft) || secondsLeft <= 0) {
      setEndTime(null);
      return;
    }

    // Tính endTime bằng cách cộng thời gian hiện tại với thời gian còn lại
    const now = new Date();
    const newEndTime = new Date(now.getTime() + secondsLeft * 1000);
    setEndTime(newEndTime);
  }, [timeLeft]);

    const barChart =  <BarChart data={chartData} width={100} height={55} />


  return (
    <div>
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-[32px] mb-5 text-white rounded-lg bg-[#0a0a0a]">
        {/* Total Deposited */}
        <div className="col-span-1 bg-[#1a1a1a] p-4 rounded-lg shadow-md">
          <h3 className="text-center text-[16px] font-bold mb-2 text-[#757575]">Total Deposited</h3>
          <p className={`${styles.textGradientCustom} text-center text-[30px] font-bold `}>{totalDeposited}</p>
          <p className="text-center text-[14px] text-[#757575] relative top-[20px]">{totalDepositedAmount}</p>
        </div>
        {/* Win Chance */}
        <div className="col-span-1 bg-[#1a1a1a] p-4 rounded-lg shadow-md">
          <h3 className="text-center text-[16px] font-bold mb-2 text-[#757575]">Win Chance</h3>
          <div className=" text-center items-center gap-2">
            <div className={styles.barChartContainer}>{barChart}</div>
            <span className="text-[14px] text-[#757575]">Prize Yield: {winChanceAPR}</span>
          </div>
        </div>
        {/* Yield Source */}
        <div className="col-span-1 bg-[#1a1a1a] p-4 rounded-lg shadow-md">
          <h3 className="text-center text-[16px] font-bold mb-2 text-[#757575]">Yield Source</h3>
          <p className="text-[30px] font-bold text-center">
            {yieldSource}</p>
          <p className="text-center">
            <Link
              href={`https://${yieldSourceLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative top-[7px] text-[14px] text-[#757575] hover:text-white underline"
            >
              {yieldSourceLink}
            </Link>
          </p>
        </div>
      </div>
      {/* Time left & Participants */}
      <div className="grid grid-cols-2 gap-4 mx-auto max-w-3xl  bg-[#0a0a0a] rounded-lg mb-[200px]">
        <div className="col-span-1 p-4 rounded-lg bg-[#1a1a1a]">
          <p className="text-center text-[16px] font-bold text-[#757575]">Time Left</p>
          <div className="relative left-[50px]">{endTime ? <Countdown endTime={endTime} /> : <p>Thời gian không hợp lệ</p>}
            </div>
        </div>
        <div className="col-span-1 p-4 rounded-lg bg-[#1a1a1a]">
          <h3 className="text-center text-[16px] font-bold mb-2 text-[#757575]">Participants</h3>
          <p className="text-[30px] text-white font-bold text-center relative top-[35px]">{participants}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDetails;