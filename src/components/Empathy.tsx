"use client";

import styles from './Empathy.module.css';
import { motion } from 'framer-motion';

export default function Empathy() {
    const items = [
        { icon: "🤔", text: "進路が決められない" },
        { icon: "💪", text: "自分の強みが分からない" },
        { icon: "🧭", text: "どれが正しいかわからない" },
    ];

    return (
        <section className={`section ${styles.section}`}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        こんな悩み、ありませんか？
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            <p className={styles.cardText}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
