"use client";

import styles from './Plans.module.css';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export default function Plans() {
    const features = [
        "AIとの無制限チャット",
        "過去の振り返り・分析",
        "価値観の発見ワーク",
        "キャリア仮説の生成",
        "ログの無期限保存"
    ];

    return (
        <section className={`section ${styles.section}`}>
            <div className={styles.container}>
                <motion.div
                    className={styles.freeCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.badge}>
                        <Sparkles size={16} /> 完全無料
                    </div>
                    <h2 className={styles.title}>
                        すべての機能が、<br />
                        無料で使えます。
                    </h2>
                    <p className={styles.description}>
                        学生の皆さんに、将来のことをもっと自由に考えてほしいから。<br />
                        みかたくんは、課金なしですべての機能を開放しています。
                    </p>

                    <ul className={styles.features}>
                        {features.map((feature, i) => (
                            <li key={i} className={styles.feature}>
                                <div className={styles.checkWrapper}>
                                    <Check size={20} color="white" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
