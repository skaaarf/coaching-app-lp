"use client";

import styles from './FAQ.module.css';
import { motion } from 'framer-motion';

export default function FAQ() {
    const faqs = [
        {
            q: "AIに相談内容は学習されますか？",
            a: "いいえ、個人の相談内容がAIの学習に使用されることはありません。プライバシーは厳重に保護されますので、安心してお話しください。"
        },
        {
            q: "本当に無料ですか？",
            a: "はい、すべての機能を完全無料でご利用いただけます。追加料金は一切かかりません。"
        }
    ];

    return (
        <section className={`section ${styles.section}`}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    よくある質問
                </motion.h2>

                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h3 className={styles.question}>
                                <span className={styles.qMark}>Q.</span> {faq.q}
                            </h3>
                            <p className={styles.answer}>{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
