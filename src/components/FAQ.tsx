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
            q: "どれくらいで効果を実感できますか？",
            a: "個人差はありますが、1回の対話（約15分）でも「頭がスッキリした」と感じる方が多いです。継続的に使うことで、より深い自己理解につながります。"
        },
        {
            q: "課金はいつでも解約できますか？",
            a: "はい、いつでも解約可能です。契約期間の縛りもありません。"
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
