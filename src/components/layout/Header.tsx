"use client";
import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import styles from "@/styles/Header.module.css";
import { useState, useEffect } from "react";


const Header = () => {
    const pathName = usePathname() || ""; // Fallback nếu pathName là null
    const [activeTab, setActiveTab] = useState<string | null>(null);


    const tabItems = [
        { name: "Prizes", href: "/prizes", value: "prize" },
        { name: "Vaults", href: "/vaults", value: "vaults" },
        { name: "Leaderboard", href: "/leaderboard", value: "leaderboard" },
        
    ];

    useEffect(() => {
    const isTabActive = (itemHref: string) => {
        if (!pathName) return false; // Tránh lỗi khi pathName là null
      if (pathName === itemHref) return true;
      if (itemHref === "/vaults" && pathName.startsWith("/deposit")) return true;
      return false;
    };

    const active = tabItems.find((item) => isTabActive(item.href));
    setActiveTab(active ? active.href : null);
  }, [pathName]);



    return (
        <div className="sticky flex justify-around items-center top-0 z-10 py-5 px-0 max-w-full h-18 bg-[#000]">
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
                                className={activeTab === item.href ? styles.tabActive : ""}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div>
                <Button> 
                    Connect Wallet
                </Button>
                
        
            </div>
        </div>

    )
}

export default Header;



