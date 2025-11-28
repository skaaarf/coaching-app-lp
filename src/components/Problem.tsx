"use client";

import styles from './Problem.module.css';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

                        <ul className={styles.blockList}>
                            <li>友達には気をつかう</li>
                            <li>家族には心配をかけたくない</li>
                            <li>先生はちょっと堅い</li>
                        </ul>
                        <p className={styles.blockClosing}>
                            だから、相談が後回しになってしまいます。
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.block}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className={styles.blockTitle}>ひとりだと気持ちを言葉にしにくい</h3>

                        <ul className={styles.blockList}>
                            <li>これまでの経験を振り返る機会が少ない</li>
                            <li>価値観を言葉にする練習をしたことがない</li>
                            <li>誰かと話すことで、初めて気づけることが多い</li>
                        </ul>
                        <p className={styles.blockClosing}>
                            ひとりで考えても、本音にたどり着けないことが多いんです。
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.block}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className={styles.blockTitle}>比べるための材料が足りない</h3>

                        <ul className={styles.blockList}>
                            <li>どんな働き方があるのか知らない</li>
                            <li>先輩がどんな道を歩んできたか知らない</li>
                            <li>自分の価値観と比べられない</li>
                        </ul>
                        <p className={styles.blockClosing}>
                            材料が揃っていなければ、選ぶのは難しくて当然です。
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
                        こんな状況では、誰だって迷ってしまいます。
                    </p>
                    <p className={styles.messageWrapper}>
                        <Sparkles size={24} className={styles.icon} />
                        <span className={styles.message}>そんなあなたの力になれたら</span>
                        <Sparkles size={24} className={styles.icon} />
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
