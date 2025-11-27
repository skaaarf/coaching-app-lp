import Link from 'next/link';
import styles from './Header.module.css';
import { MessageCircleHeart } from 'lucide-react';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <MessageCircleHeart size={32} />
                    <span>みかたくん</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="#features" className={styles.navLink}>特徴</Link>
                    <Link href="#about" className={styles.navLink}>みかたくんとは</Link>
                </nav>

                <a href="https://app.career-counseller.jp/" className={`btn btn-primary ${styles.ctaButton}`}>
                    アプリを開く
                </a>
            </div>
        </header>
    );
}
