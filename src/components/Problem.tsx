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
                    <h2 className={styles.title}>なぜ、悩みが続いてしまうのか。</h2>
                    <p className={styles.intro}>
                        それは“情報不足”ではなく、“話せる相手がいないこと”と<br className={styles.desktopBreak} />
                        “自分の軸が分からないこと”が原因です。
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
                        <h3 className={styles.blockTitle}>① 相談できる相手がいない</h3>
                        <p className={styles.blockText}>
                            悩みを話したい気持ちはあるのに、<br />
                            相談できる相手が周りにいません。
                        </p>
                        <ul className={styles.blockList}>
                            <li>友達は同じ立場で、逆に気を使ってしまう</li>
                            <li>家族には、言いづらいことが多い</li>
                            <li>大学の相談窓口は、距離があって行きづらい</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className={styles.block}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className={styles.blockTitle}>② 自分が何を大切にしたいか分からない</h3>
                        <p className={styles.blockText}>
                            やりたいことが分からない。<br />
                            興味や価値観が曖昧で、うまく言葉にできない。
                        </p>
                        <ul className={styles.blockList}>
                            <li>頑張ってきたことを思い出せない</li>
                            <li>なぜそれを選んだのか説明できない</li>
                            <li>判断基準がなく、選択肢の比較ができない</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className={styles.block}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className={styles.blockTitle}>③ その結果、迷い・焦り・停滞が続く</h3>
                        <p className={styles.blockText}>
                            考えようとするほど不安が大きくなり、<br />
                            進路のことを後回しにしてしまう。
                        </p>
                        <ul className={styles.blockList}>
                            <li>周りと比べて焦る</li>
                            <li>自信が持てない</li>
                            <li>何から始めたらいいか分からない</li>
                        </ul>
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
                        悩みが続くのは、あなたのせいではありません。<br />
                        理由が分からないまま、ひとりで抱えてきただけです。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
