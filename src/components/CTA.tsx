import styles from './CTA.module.css';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2 className={styles.title}>あなたのキャリアを、<br />もっと自由に。</h2>
                    <p className={styles.description}>
                        みかたくんは、あなたのキャリア形成の頼れるパートナーです。<br />
                        まずは気軽に、AIと話してみませんか？
                    </p>
                    <a href="https://app.career-counseller.jp/" className={styles.button}>
                        無料で始める <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
