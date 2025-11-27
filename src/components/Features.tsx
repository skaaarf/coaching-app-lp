"use client";

import styles from './Features.module.css';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            tag: "AI Dialogue",
            title: "AI対話での深い内省",
            description: "ただ話を聞くだけではありません。あなたの言葉の裏にある感情や価値観をAIが汲み取り、深掘りする質問を投げかけます。"
        },
        {
            tag: "Reflection",
            title: "過去の経験の棚卸し",
            description: "幼少期から現在までのエピソードを振り返り、あなたが大切にしてきたこと、夢中になったことの共通点を見つけ出します。"
        },
        {
            tag: "Values",
            title: "価値観分析",
            description: "対話データから、あなたの行動指針となる「価値観」をAIが分析。言葉にできなかった「自分らしさ」が明確になります。"
        },
        {
            tag: "Career Hypothesis",
            title: "キャリア選択の仮説生成",
            description: "あなたの強みや価値観に基づき、どのようなキャリアが向いているか、具体的な仮説をAIと一緒に考えます。"
        }
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
                        味方くんができること
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        自己理解の旅をサポートする機能
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <span className={styles.tag}>{feature.tag}</span>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
