"use client";

import styles from './Empathy.module.css';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Scale } from 'lucide-react';

export default function Empathy() {
    const worries = [
        {
            icon: <MessageCircle size={48} strokeWidth={1.5} />,
            title: "相談できる相手がいない",
            points: []
        },
        {
            icon: <Sparkles size={48} strokeWidth={1.5} />,
            title: "自分の本音がわからない",
            points: []
        },
        {
            icon: <Scale size={48} strokeWidth={1.5} />,
            title: "未来の選択肢を比べられない",
            points: []
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        進路のことで<br className={styles.mobileBr} />こんな不安<br className={styles.mobileBr} />ありませんか？
                    </motion.h2>
                    <motion.p
                        className={styles.intro}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        周りにも同じように<br className="mobileBr" />悩んでいる人は多いのに、<br />
                        なぜか自分だけが<br className="mobileBr" />取り残された気持ちに<br className="mobileBr" />なることがあります。
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {worries.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            {item.points.length > 0 && (
                                <ul className={styles.pointList}>
                                    {item.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.footer}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                </motion.div>
            </div>
        </section>
    );
}
