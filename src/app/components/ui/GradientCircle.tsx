import React from 'react';



const GradientCircle = () => {
  return (
    <svg
      width="10"
      height="10"
      className="w-5 h-5" // Tailwind để điều chỉnh kích thước và căn giữa
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: 'white' }} />
          <stop offset="100%" style={{ stopColor: 'gray' }} />
        </radialGradient>
      </defs>
      <circle
        cx="10"
        cy="10"
        r="10"
        fill="url(#gradient)" // Tailwind để thêm hiệu ứng hover
      />
    </svg>
  );
};

export default GradientCircle;