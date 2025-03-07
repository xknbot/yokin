// components/CircleDiagonalGradient.js
import React from 'react';

const CircleDiagonalGradient2 = () => {
  return (
    <div className="h-4">
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-1/2 h-auto">
        <defs>
          <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="90%" style={{ stopColor: '4a4a4a' }} /> {/* gray-50 */}
            <stop offset="100%" style={{ stopColor: '#2C2C2C' }} /> {/* gray-700 */}
          </linearGradient>
        </defs>
        <circle cx="13" cy="13" r="13" fill="url(#diagonalGradient)" />
      </svg>
    </div>
  );
};

export default CircleDiagonalGradient2;