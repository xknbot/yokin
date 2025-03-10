'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Countdown.module.css';

interface CountdownProps {
  endTime: Date | string; // Thời gian kết thúc (timestamp hoặc Date object)
}

const Countdown: React.FC<CountdownProps> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Chuyển endTime thành Date object và xử lý giá trị hợp lệ
    const endDate = new Date(endTime);
    const isValidEndTime = !isNaN(endDate.getTime());
    const endTimestamp = isValidEndTime ? endDate.getTime() : Date.now() + 24 * 60 * 60 * 1000; // Mặc định 1 ngày nếu không hợp lệ

    const updateCountdown = () => {
      const now = Date.now();
      const difference = endTimestamp - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Cập nhật ngay lập tức
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup timer khi component unmount
    return () => clearInterval(timer);
  }, [endTime]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={styles.countdown}>
      <div className={styles.timer}>
        <div className={styles.timeBox}>
          <span className={styles.number}>{days}</span>
          <span className={styles.unit}>d</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.timeBox}>
          <span className={styles.number}>{hours}</span>
          <span className={styles.unit}>hr</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.timeBox}>
          <span className={styles.number}>{minutes}</span>
          <span className={styles.unit}>m</span>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.timeBox}>
          <span className={styles.number}>{seconds}</span>
          <span className={styles.unit}>s</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;