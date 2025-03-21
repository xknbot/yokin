import React, { useState, useEffect } from 'react';
import BarChart from '@/components/ui/BarChart';
import Link from 'next/link';
import Countdown from '@/components/feature/Countdown';
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
  countdownWidth?: string | number;
  countdownTitleClassName?: string;
  countdownClassName?: string;
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
  countdownWidth = '',
  countdownTitleClassName = '',
  countdownClassName='',
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
      <div className="grid grid-cols-3 gap-4 max-w-[956px] mx-auto mt-[32px] mb-5 text-white rounded-lg ">
        {/* Total Deposited */}
        <div className="col-span-1 bg-[#111] p-4 rounded-lg shadow-md border border-[#222]">
          <h3 className="text-center text-[16px] font-semibold mb-2 text-[#757575]">Total Deposited</h3>
          <p className={`${styles.textGradientCustom} text-center text-[30px] font-semibold pt-2`}>{totalDeposited}</p>
          <p className="text-center text-[14px] text-[#757575] relative top-[20px]">{totalDepositedAmount}</p>
        </div>
        {/* Win Chance */}
        <div className="col-span-1 bg-[#111] p-4 rounded-lg shadow-md border border-[#222]">
          <h3 className="text-center text-[16px] font-semibold mb-2 text-[#757575]">Win Chance</h3>
          <div className=" text-center pt-2">
            <div className={styles.barChartContainer}>{barChart}</div>
            <span className="text-[14px] text-[#757575]">Prize Yield: {winChanceAPR}</span>
          </div>
        </div>
        {/* Yield Source */}
        <div className="col-span-1 bg-[#111] p-4 rounded-lg shadow-md border border-[#222]">
          <h3 className="text-center text-[16px] font-semibold mb-2 text-[#757575]">Yield Source</h3>
          <p className="text-[30px] font-bold text-center pt-2">
            {yieldSource}</p>
          <p className="text-center">
            <Link
              href={`https://${yieldSourceLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative top-[18px] text-[14px] text-[#757575] hover:text-white underline"
            >
              {yieldSourceLink}
            </Link>
          </p>
        </div>
      </div>
      {/* Time left & Participants */}
      <div className="grid grid-cols-2 gap-4 mx-auto max-w-[956px] rounded-lg mb-[200px] h-[131px]">
        <div className="relative col-span-1 p-4 rounded-lg bg-[#111] border border-[#222]">
          <p className="text-center text-[16px] font-semibold text-[#757575]">Time Left</p>

          <Countdown endTime={endTime} width={countdownWidth}
            titleClassName={countdownTitleClassName} className={countdownClassName} />
  

        </div>
        <div className="col-span-1 p-4 rounded-lg bg-[#111] border border-[#222]">
          <h3 className="text-center text-[16px] font-semibold mb-2 text-[#757575]">Participants</h3>
          <p className="text-[30px] text-white font-semibold text-center relative top-1/3">{participants}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsDetails;