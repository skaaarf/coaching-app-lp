"use client";

import styles from './Plans.module.css';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Plans() {
    const plans = [
        {
            name: "Free",
            price: "¥0",
            features: ["基本チャット機能", "1日3回まで", "簡易ログ保存"]
        },
        {
            name: "Pro",
            price: "¥980",
            popular: true,
            features: ["無制限チャット", "振り返り機能", "AI深掘りモード", "ログ無期限保存"]
        },
        {
            name: "Premium",
            price: "¥2,980",
            features: ["Proの全機能", "価値観ワーク", "人生マップ生成", "優先サポート"]
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
                    プラン
                </motion.h2>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {plan.popular && <span className={styles.badge}>人気</span>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.price}>{plan.price}<span style={{ fontSize: '1rem', fontWeight: 400, color: '#888' }}>/月</span></div>
                            <ul className={styles.features}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.feature}>
                                        <Check size={16} className={styles.check} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`btn ${plan.popular ? 'btn-primary' : ''}`} style={{ width: '100%', background: plan.popular ? '' : '#F5F5F7' }}>
                                選択する
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
