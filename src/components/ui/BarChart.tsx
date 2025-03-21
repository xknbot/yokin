import React from 'react';
import styles from '@/styles/BarChart.module.css';

interface BarChartProps {
  data: number[]; // Mảng chứa độ cao của các cột
  height?: number; // Chiều cao tổng của biểu đồ (tùy chọn)
  width?: number; // Chiều rộng tổng của biểu đồ (tùy chọn)
}

const BarChart: React.FC<BarChartProps> = ({ data, height, width }) => {
  // Tính toán chiều rộng của từng cột dựa trên tổng chiều rộng và số lượng cột
  const barWidth = width / data.length - 10; // Giảm 10px để giữ khoảng cách

  return (
    <div 
      className={styles.barChartContainer} 
      style={{ height: `${height}px`, width: `${width}px` }} // Thiết lập kích thước container
    >
      {data.map((barHeight, index) => (
        <div
          key={index}
          className={`${styles.bar} ${styles[`bar${index + 1}`]}`}
          style={{ 
            height: `${barHeight}px`, 
            width: `${barWidth}px` // Thiết lập chiều rộng động cho từng cột
          }}
        />
      ))}
    </div>
  );
};

export default BarChart;