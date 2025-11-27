import Link from 'next/link';
import styles from './Footer.module.css';
import { MessageCircleHeart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <MessageCircleHeart size={24} />
                            <span>みかたくん</span>
                        </Link>
                        <p className={styles.tagline}>対話とゲームでキャリアを考える</p>
                    </div>

                    <div className={styles.links}>
                        {/* <Link href="#" className={styles.link}>お問い合わせ</Link> */}
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} みかたくん. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
