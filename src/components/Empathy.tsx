"use client";

import styles from './Empathy.module.css';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Scale } from 'lucide-react';

export default function Empathy() {
    const worries = [
        {
            icon: <MessageCircle size={48} strokeWidth={1.5} />,
            title: "相談できる相手がいない",
            points: [
                "誰に相談していいか分からない",
                "周りの人には言いづらい"
            ]
        },
        {
            icon: <Sparkles size={48} strokeWidth={1.5} />,
            title: "自分の本音が分からない",
            points: [
                "そもそも自分が何をしたいのか分からない",
                "興味や価値観が曖昧"
            ]
        },
        {
            icon: <Scale size={48} strokeWidth={1.5} />,
            title: "未来の選択肢が比較できない",
            points: [
                "将来の選択肢をどう比べていいか分からない",
                "どれも不安で、決めるのが怖い"
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        こんな気持ち、ありませんか？
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {worries.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            {/* <h3 className={styles.cardTitle}>{item.title}</h3> */}
                            <ul className={styles.pointList}>
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
