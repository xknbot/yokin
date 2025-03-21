import React from 'react';
import VaultCard from './VaultCard';
import styles from "@/styles/VaultCard.module.css";

type Vault = {
  id: number;
  logo: string;
  name: string;
  yieldSource: string;
  prize: string;
  apr: string;
  winChances: number; // Số liệu cơ hội thắng (có thể dùng để hiển thị biểu đồ)
  totalDeposits: string;
  totalDepositsFullNum: string;
};

type VaultListProps = {
  vaults: Vault[];
};

const VaultList: React.FC<VaultListProps> = ({ vaults }) => {
  return (
    <div className="rounded-lg bg-[#000] border border-[#2c2c2c] text-white p-4 max-w-[75vw] mx-auto">
      {/* Header của danh sách */}
      <div className={`${styles.header} flex items-center justify-between mb-4 text-sm text-gray-400`}>
        <span className="basis-3/10" >Prize Vaults</span>
        <span className="basis-2/10">Prizes</span>
        <span className="basis-2/10">Win Chances</span>
        <span className="basis-2/10">Total Deposits</span>
        <span className="basis-3/10">Manage</span>
      </div>

      {/* Danh sách các vault */}
      <div className="space-y-2">
        {vaults.map((vault) => (
          <VaultCard
            key={vault.id}
            logo={vault.logo}
            name={vault.name}
            yieldSource={vault.yieldSource}
            prize={vault.prize}
            apr={vault.apr}
            winChances={vault.winChances}
            totalDeposits={vault.totalDeposits}
            totalDepositsFullNum={vault.totalDepositsFullNum}
          />
        ))}
      </div>
    </div>
  );
};

export default VaultList;