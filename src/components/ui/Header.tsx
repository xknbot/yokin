'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const Header = () => {

  const router = useRouter();

  const backToVault = () => {
  if (router) {
    router.push("/vaults");
  }
  };
  
  return (
    <header className="text-gray-400 p-4 flex items-center justify-between">
      {/* Nút Back ở góc trái */}
      <button onClick={backToVault} className="text-xs font-medium hover:text-gray-300 hover:cursor-pointer hover:underline relative left-[350px] bottom-[65px]">
        &lt; Back
      </button>

      {/* Phần trung tâm: Logo và tiêu đề */}
      <div className="flex flex-col items-center relative right-[30px]">
        {/* Logo ZK */}
        <div className="flex items-center justify-center mb-1">
          <Image src='/zklend-logo.png' alt='zklendlogo' width={100} height={100 } />
        </div>
        
        {/* Tiêu đề */}
        <h1 className="text-[32px] text-white">Prize USDC</h1>
        <p className="text-[14px] text-gray-400 mb-10">ZKlend</p>
      </div>

      {/* Placeholder cho phần bên phải (có thể thêm sau nếu cần) */}
      <div></div>
    </header>
  );
};

export default Header;