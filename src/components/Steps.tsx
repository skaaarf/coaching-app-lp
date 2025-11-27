"use client";

import styles from './Steps.module.css';
import { motion } from 'framer-motion';

export default function Steps() {
    const steps = [
        {
            num: 1,
            title: "Chat開始",
            desc: "アプリを開いて、今の悩みや考えていることをAIに話しかけてみましょう。"
        },
        {
            num: 2,
            title: "質問に答える",
            desc: "AIからの深掘り質問に答えていくことで、思考の整理が進みます。"
        },
        {
            num: 3,
            title: "自分の輪郭が見える",
            desc: "対話ログや分析結果から、あなたの価値観や強みが明確になります。"
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
                    3つのステップで始める旅
                </motion.h2>

                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.number}>{step.num}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
