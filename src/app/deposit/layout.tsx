"use client";

import { useEffect, ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const DepositModal = dynamic(() => import("@/app/deposit/(modal)/deposit/page"), {
  ssr: false,
});
const WithdrawModal = dynamic(() => import("@/app/deposit/(modal)/withdraw/page"), {
  ssr: false,
});

export default function DepositLayout({
  children, // Nội dung từ (main)/page.tsx
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalType = searchParams.get("modal"); // Lấy query param 'modal'

  useEffect(() => {
    if (!modalType) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.push("/deposit"); // Đóng modal bằng cách xóa query param
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [modalType, router]);

  return (
    <div className="layout">
      {children} {/* Giữ nội dung chính */}
     {modalType === "deposit" && (
        <div
          className="modal-overlay"
          onClick={() => router.push("/deposit")}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Render slot @deposit */}
            <DepositModal/>
          </div>
        </div>
      )}
      {modalType === "withdraw" && (
        <div
          className="modal-overlay"
          onClick={() => router.push("/deposit")}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Render slot @withdraw */}
            <WithdrawModal/>
            
          </div>
        </div>
      )}
    </div>
  );
}