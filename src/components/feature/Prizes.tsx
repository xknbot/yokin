import Button from "../layout/Button";
import styles from "@/styles/Prizes.module.css";
import Card from "../layout/Card"; 



const Prizes = () => {



    const raffleData = [
  { id: 1, endTime: new Date("2025-03-10T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
  { id: 2, endTime: new Date("2025-03-09T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
  { id: 3, endTime: new Date("2025-03-09T00:00:00"), tvl: "21k USDC", apy: "14.6%", yieldSource: "ZKlend" },
    ];
    
    return (
        <div className={styles.container}> 
            <div className={styles.banner }>
                <h1>Keep your deposit. Win up to thousands of Benjamin</h1>
                <Button label="Deposit to win" variant="secondary"/>
            </div>

            <div className={styles.currentPrizesContainer}>
                <h2 className={styles.title}>Current prizes</h2>
                <div className={styles.cardsRow}>
                <Card key={raffleData[0].id} {...raffleData[0]} className={styles.left} />
                <Card key={raffleData[1].id} {...raffleData[1]} className={styles.center} />
                <Card key={raffleData[2].id} {...raffleData[2]} className={styles.right} />
                </div>
            </div>

        </div>
        
        

    )
}

export default Prizes;