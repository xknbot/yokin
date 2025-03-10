
import React from 'react';
import Link from 'next/link'; // Sử dụng Link từ Next.js cho điều hướng
import styles from '@/styles/Footer.module.css'; // CSS Module cho styling
import { FaDiscord, FaTelegram } from 'react-icons/fa'; 
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className={styles.footer}> 
            <div className={styles.blockInfo}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="#8BD34C" xmlns="http://www.w3.org/2000/svg" className={styles.greenCircle}>
                    <circle cx="6" cy="6" r="6" />
                </svg>
                <span className={styles.currentBlock}>Current block: 30,003</span>
            </div>

            <div className={styles.footerLinks}>
                <Link href="https://twitter.com/yokin" target="_blank" className={styles.socialLink}>
                    <RiTwitterXLine />
                    <span className={styles.socialLabel}>Twitter</span>
                </Link>
                <Link href="https://discord.com/yokin" target="_blank" className={styles.socialLink}>
                    <FaDiscord />
                    <span className={styles.socialLabel}>Discord</span>
                </Link>
                <Link href="https://t.me/yokin" target="_blank" className={styles.socialLink}>
                    <FaTelegram />
                    <span className={styles.socialLabel}>Telegram</span>
                </Link>
                <Link href="/document" className={styles.documentLink}>
                    Document
                </Link>
            </div>
        </footer>
    )
}

export default Footer;