import React from 'react';
import Image from 'next/image';
import styles from '@/styles/VaultCard.module.css';
import BarChart from '../../components/ui/BarChart';
import { useRouter } from 'next/navigation';
import Button1 from '@/components/ui/Button';




type VaultCardProps = {
  logo: string;
  name: string;
  yieldSource: string;
  prize: string;
  apr: string;
  winChances: number;
  totalDeposits: string;
  totalDepositsFullNum: string;
};

const VaultCard: React.FC<VaultCardProps> = ({ logo, name, yieldSource, prize, apr, winChances, totalDeposits, totalDepositsFullNum }) => {
  // Giả sử winChances > 0 để hiển thị biểu đồ đơn giản (dùng emoji), nếu = 0 thì hiển thị dấu —
  const chartData = [15, 20, 25, 30, 35];
  const winChanceDisplay = winChances > 0 ? <BarChart data={chartData} width={100} height={55} /> : '—';
  const router = useRouter();

  const handleDepositClick = () => {
    router.push("/deposit")
  }
  return (
    <div className={styles.vaultCard}>
      {/* Logo và Tiêu đề */}
      <div className={styles.vaultInfo}>
        <Image
          src={logo}
          alt={`${name} Logo`}
          width={100}
          height={100}
          className={styles.logo}
        />
        <div>
          <span className={styles.vaultName}>{name}</span>
          <span className={styles.yieldSource}>{yieldSource}</span> 
        </div>
        
      </div>

      <div className={styles.prizeContainer}>
        <div>
          <span className={styles.upTo}>Up to</span>
          <span className={styles.prize}>{prize}</span>
        </div>
        <div>
          <span className={styles.apr}>{apr}</span>
          <span className={styles.inApr}>in APR</span>
        </div>
      </div>


      <span className={styles.winChances}>{winChanceDisplay}</span>

      <div className={styles.depositsContainer}>
        <span className={styles.totalDeposits}>{totalDeposits}</span>
        <span className={styles.totalDepositsFullNum}>{totalDepositsFullNum}</span>
      </div>


      <Button1 variant='third' size='medium' onClick={handleDepositClick}>
        Deposit
      </Button1>


      
    </div>
  );
};

export default VaultCard;