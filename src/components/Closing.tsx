"use client";

import styles from './Closing.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Closing() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    自分の人生と、<br />
                    ちゃんと向き合ってみる。
                </motion.h2>

                <motion.div
                    className={styles.buttonWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <a href="https://app.career-counseller.jp/" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                        味方くんを始める <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
