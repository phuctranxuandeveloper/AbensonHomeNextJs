import ArrowDown from '@/components/ui/icons/ArrowDown';
import styles from '@/components/layout/header.module.css';
import Search from '@/components/ui/icons/Search';
import User from '@/components/ui/icons/User';
import Location from '@/components/ui/icons/Location';
import Cart from '@/components/ui/icons/Cart';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <div className={styles.logoContainer}>
                    <span className={styles.logoTitle}>abensonHOME</span>
                    <span className={styles.iconArrowLeft}>
                        <ArrowDown />
                    </span>
                </div>
                <div className={styles.searchBarContainer}>
                    <div className={styles.searchForm}>
                        <input type="text" placeholder='Find everything for your home' />
                        <span className={styles.iconSearch}>
                            <Search />
                        </span>
                    </div>
                </div>
                <div className={styles.rightBarContainer}>
                    <span className={styles.iconUser}>
                        <User />
                    </span>
                    <span className={styles.iconLocation}>
                        <Location />
                    </span>
                    <span className={styles.iconCart}>
                        <Cart />
                    </span>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottomHeader}>
                <ul>
                    <li><Link href="/">Sofas</Link></li>
                    <li><Link href="/">Living Room</Link></li>
                    <li><Link href="/">Dining</Link></li>
                    <li><Link href="/">Bedroom</Link></li>
                    <li><Link href="/">Mattress</Link></li>
                    <li><Link href="/">Kitchen</Link></li>
                    <li><Link href="/">Office</Link></li>
                    <li><Link href="/">Home Decor</Link></li>
                    <li><Link href="/">Brands</Link></li>
                </ul>
            </div>
        </header>
    )
}