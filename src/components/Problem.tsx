"use client";

import styles from './Problem.module.css';
import { motion } from 'framer-motion';

export default function Problem() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>どうして、この悩みはずっと消えないのか。</h2>
                    <p className={styles.intro}>
                        あなたに問題があるわけではありません。<br />
                        この悩みには、ちゃんとした理由があります。
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.block}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className={styles.blockTitle}>話しにくいから、相談できない</h3>
                        <p className={styles.blockIntro}>
                            話したいのに、<br />
                            “ちょうどいい相手”がいません。
                        </p>
                        <ul className={styles.blockList}>
                            <li>友達には気をつかう</li>
                            <li>家族に心配かけたくない</li>
                            <li>先生はちょっと堅い</li>
                        </ul>
                        <p className={styles.blockClosing}>
                            だから、相談が後回しに。
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.block}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className={styles.blockTitle}>ひとりだと言葉にしにくい</h3>
                        <p className={styles.blockIntro}>
                            気持ちは、頭の中だけでは整理できません。
                        </p>
                        <ul className={styles.blockList}>
                            <li>振り返る機会が少ない</li>
                            <li>言語化する練習が足りない</li>
                            <li>話して初めて気づくことが多い</li>
                        </ul>
                        <p className={styles.blockClosing}>
                            ひとりでは本音にたどり着けません。
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.block}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className={styles.blockTitle}>比べる材料が足りない</h3>
                        <p className={styles.blockIntro}>
                            「分からない」のは、<br />
                            情報不足だけではありません。
                        </p>
                        <ul className={styles.blockList}>
                            <li>働き方を知らない</li>
                            <li>先輩の歩んだ道を知らない</li>
                            <li>自分の価値観と比べられない</li>
                        </ul>
                        <p className={styles.blockClosing}>
                            材料なしで選ぶのは難しいものです。
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.summary}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p>
                        <span className={styles.message}>そんなあなたの力になれたら</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
