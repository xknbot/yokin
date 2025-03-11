module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Đường dẫn đến các file của bạn
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#4CAF50', // Xanh lá
        customYellow: '#FFEB3B', // Vàng
        customPink: '#F48FB1', // Hồng
      },
      scrollbar: {
        hide: {
          /* Không cần định nghĩa cụ thể, Tailwind sẽ tự xử lý */
        },
      },
    },
  },
  plugins: [],
}
