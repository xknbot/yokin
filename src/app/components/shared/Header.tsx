"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter, usePathname } from "next/navigation";
import styles from "@/styles/Header.module.css";


const Header = () => {
    const router = useRouter();
    const pathName = usePathname();


    const tabItems = [
        { name: "Prizes", href: "/prizes" , value: "prize" },
        { name: "Vaults", href: "/vaults", value: "vaults" },
        { name: "Leaderboard", href:"/leaderboard", value: "leaderboard" },
        
    ];

    const isTabActive = (itemHref) => {
        if (pathName === itemHref) return true;
        if (itemHref === "/vaults" && pathName.startsWith("/deposit")) return true;
        return false;
    } 



    return (
        <div className={styles.header}>
            <div>
                <Link href={"/"}>
                    <Image src="/YOKIN.png" height={43} width={149} alt="logo"/>
                </Link>
            </div>

            <nav className={styles.tabNav}> 
                <ul className={styles.tabNavItem}>
                    {tabItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href}
                                className={isTabActive(item.href) ? styles.tabActive : ""}>
                                {item.name}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>

            <div>
                <Button label="Connect Wallet" />
            </div>
        </div>
    )
}

export default Header;