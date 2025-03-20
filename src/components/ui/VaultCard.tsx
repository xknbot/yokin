import React from 'react';
import Image from 'next/image';
import styles from '@/styles/VaultCard.module.css';
import BarChart from '../../components/ui/BarChart';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';




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
  const winChanceDisplay = winChances > 0 ? <BarChart data={chartData} width={90} height={35} /> : '—';
  const router = useRouter();

  const handleDepositClick = () => {
    router.push("/deposit")
  }
  return (
    <div className={styles.vaultCard}>
      {/* Logo và Tiêu đề */}
      <div className={styles.vaultInfo}>
        <div className={styles.vaultLogo}>
          <Image
            src={logo}
            alt={`${name} Logo`}
            width={50}
            height={50}
            className={styles.logo}
          />
        </div>
        <div className={styles.vaultTitle}>
          <span className={styles.vaultName}>{name}</span>
          <span className={styles.yieldSource}>{yieldSource}</span> 
        </div>
        
      </div>

      <div className={styles.prizeContainer}>
        <div className={styles.prizeAmount} >
          <p className={styles.upTo}>Up to</p>
          <p className={styles.prize}>{prize}</p>
        </div>
        <div className={styles.prizeApr}>
          <p className={styles.apr}>{apr}</p>
          <p className={styles.inApr}>in APR</p>
        </div>
      </div>


      <div className={`${styles.vaultProgress} ${styles.winChances}`}>
        {winChanceDisplay}
      </div>

      <div className={styles.depositsContainer}>
        <span className={styles.totalDeposits}>{totalDeposits}</span>
        <span className={styles.totalDepositsFullNum}>{totalDepositsFullNum}</span>
      </div>


      <div className={styles.depositButton}>
        <Button variant='third' size='medium' onClick={handleDepositClick}>
          Deposit
        </Button>
      </div>


      
    </div>
  );
};

export default VaultCard;