import React, { useState, useEffect } from 'react';
import styles from '@/styles/Countdown.module.css';

interface CountdownProps {
  endTime: Date | string; // Thời gian kết thúc (timestamp hoặc Date object)
}

const Countdown: React.FC<CountdownProps> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const endTimestamp = new Date(endTime).getTime() / 1000; // Chuyển thành giây
    const updateCountdown = () => {
      const now = Date.now() / 1000; // Thời gian hiện tại tính bằng giây
      const newTimeLeft = Math.max(0, Math.floor(endTimestamp - now));
      setTimeLeft(newTimeLeft);

      // Dừng cập nhật khi thời gian kết thúc
      if (newTimeLeft <= 0) {
        return;
      }
    };

    updateCountdown(); // Cập nhật ngay lập tức
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup timer khi component unmount
    return () => clearInterval(timer);
  }, [endTime]);

  // Hàm định dạng thời gian còn lại
  const formatTimeLeft = (timeLeftInSeconds: number) => {
    const days = Math.floor(timeLeftInSeconds / (24 * 3600));
    const hours = Math.floor((timeLeftInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((timeLeftInSeconds % 3600) / 60);
    const seconds = Math.floor(timeLeftInSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTimeLeft(timeLeft);

  // Không hiển thị nếu thời gian đã kết thúc
  if (timeLeft <= 0) {
    return null;
  }

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