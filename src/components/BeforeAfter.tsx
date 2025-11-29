"use client";

import styles from './BeforeAfter.module.css';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function BeforeAfter() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    「AI進路くん」で、<br />
                    あなたの悩みは自信に変わる
                </motion.h2>

                <div className={styles.comparison}>
                    <motion.div
                        className={`${styles.card} ${styles.before}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.cardTitle}>Before</h3>
                        <ul className={styles.list}>
                            <li>
                                <XCircle className={styles.iconBefore} size={20} />
                                <span>相談相手がいない</span>
                            </li>
                            <li>
                                <XCircle className={styles.iconBefore} size={20} />
                                <span>自分が何を大切にしたいか不明</span>
                            </li>
                            <li>
                                <XCircle className={styles.iconBefore} size={20} />
                                <span>周りと比べて焦る</span>
                            </li>
                            <li>
                                <XCircle className={styles.iconBefore} size={20} />
                                <span>進む方向が決まらない</span>
                            </li>
                        </ul>
                    </motion.div>

                    <div className={styles.arrow}>
                        <span>▶</span>
                    </div>

                    <motion.div
                        className={`${styles.card} ${styles.after}`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className={styles.cardTitle}>After</h3>
                        <ul className={styles.list}>
                            <li>
                                <CheckCircle2 className={styles.iconAfter} size={20} />
                                <span>相談できる味方ができる</span>
                            </li>
                            <li>
                                <CheckCircle2 className={styles.iconAfter} size={20} />
                                <span>自分の価値観・興味が明確になる</span>
                            </li>
                            <li>
                                <CheckCircle2 className={styles.iconAfter} size={20} />
                                <span>焦りが減り、行動が進む</span>
                            </li>
                            <li>
                                <CheckCircle2 className={styles.iconAfter} size={20} />
                                <span>進む方向が“自分の軸”で決められる</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
