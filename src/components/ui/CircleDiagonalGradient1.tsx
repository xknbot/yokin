// components/CircleDiagonalGradient.js
import React from 'react';

const CircleDiagonalGradient1 = () => {
  return (
    <div className="h-4">
      <svg width="200" height="200" viewBox="0 0 200 200" className="w-1/2 h-auto">
        <defs>
          <linearGradient id="diagonalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFFFFF' }} /> {/* gray-50 */}
            <stop offset="100%" style={{ stopColor: '#2C2C2C' }} /> {/* gray-700 */}
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="20" fill="url(#diagonalGradient1)" />
      </svg>
    </div>
  );
};

export default CircleDiagonalGradient1;