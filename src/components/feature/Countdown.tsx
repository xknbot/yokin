'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Countdown.module.css';

interface CountdownProps {
  endTime: Date | string; // Thời gian kết thúc (timestamp hoặc Date object)
  width?: string | number; // Chiều rộng tùy chỉnh (chuỗi hoặc số)
  height?: string | number; // Chiều cao tùy chỉnh (chuỗi hoặc số)
  className?: string;
  titleClassName?: string;
  timeBoxClassName?: string;
}

const Countdown: React.FC<CountdownProps> = ({
  endTime,
  width = '100%', // Mặc định full width của parent
  height = 'auto', // Mặc định tự động theo nội dung
  className,
  titleClassName = '',
  timeBoxClassName='',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date(endTime);
    const isValidEndTime = !isNaN(endDate.getTime());
    const endTimestamp = isValidEndTime ? endDate.getTime() : Date.now() + 24 * 60 * 60 * 1000;

    const updateCountdown = () => {
      const now = Date.now();
      const difference = endTimestamp - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  // Xử lý width và height
  const countdownWidth = typeof width === 'number' ? `${width}px` : width;
  const countdownHeight = typeof height === 'number' ? `${height}px` : height;

  // Tính tỷ lệ scale dựa trên kích thước mặc định (giả định 200px width làm base)
  const defaultWidth = 200; // Giả định kích thước mặc định để scale
  const widthValue = parseFloat(countdownWidth) || defaultWidth;
  const scale = widthValue / defaultWidth;

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      <h2 className={`text-left ${titleClassName || 'text-[18px]'}`}>Time left</h2>
      <div
        className={`${styles.countdown} ${className}`}
        style={{
          width: countdownWidth,
          height: countdownHeight,
          '--scale': scale, // Truyền scale vào CSS
        } as React.CSSProperties}
      >
        <div className={styles.timer}>
          <div className={`${styles.timeBox} ${timeBoxClassName}`}>
            <span className={styles.number}>{days}</span>
            <span className={styles.unit}>d</span>
          </div>
          <span className={styles.colon}>:</span>
          <div className={`${styles.timeBox} ${timeBoxClassName}`}>
            <span className={styles.number}>{hours}</span>
            <span className={styles.unit}>hr</span>
          </div>
          <span className={styles.colon}>:</span>
          <div className={`${styles.timeBox} ${timeBoxClassName}`}>
            <span className={styles.number}>{minutes}</span>
            <span className={styles.unit}>m</span>
          </div>
          <span className={styles.colon}>:</span>
          <div className={`${styles.timeBox} ${timeBoxClassName}`}>
            <span className={styles.number}>{seconds}</span>
            <span className={styles.unit}>s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;