"use client";

import styles from './Problem.module.css';
import { motion } from 'framer-motion';

export default function Problem() {
    return (
        <section className={`section ${styles.section}`}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>
                        情報は多いのに、<br />
                        自分の答えは見つからない
                    </h2>
                    <p className={styles.description}>
                        自己分析は、<span className={styles.highlight}>「良い質問」</span>が大事。<br />
                        でも、自分ひとりではなかなか深く考えられないものです。
                    </p>

                    <motion.div
                        className={styles.gap}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        でも、味方くんならできる。
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
