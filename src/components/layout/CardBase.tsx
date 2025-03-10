import React from 'react';

// Định nghĩa interface cho các props của Card
interface CardBaseProps {
  width: string;
  height: string;
    bgColor: string;
    children: React.ReactNode;
}

// Functional component Card
const CardBase: React.FC<CardBaseProps> = ({ width, height, bgColor, children }) => {
  // Định nghĩa styles dựa trên props
  const cardStyle: React.CSSProperties = {
    width: width,
    height: height,
    backgroundColor: bgColor,
    borderRadius: '8px', // Bo góc để card trông mềm mại hơn
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Thêm bóng để tạo chiều sâu
    padding: '16px',
  };

  return (
    <div style={cardStyle}>
        {children}
    </div>
  );
};

export default CardBase;