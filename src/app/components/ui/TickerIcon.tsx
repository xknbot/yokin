import React from 'react';

const TicketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ticket shape with rounded edges and cutouts */}
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V8H4V6ZM4 8V16H20V8H4ZM4 16V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Star inside the ticket */}
      <path
        d="M12 7.5L13.5 10.5H16.5L14 12L15 15L12 13.5L9 15L10 12L7.5 10.5H10.5L12 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TicketIcon;