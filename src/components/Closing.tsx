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
                    迷うのは自然なこと。<br />
                    <span className={styles.underline}>でも、一人で<br className={styles.mobileBr} />抱え込む必要はない。</span><br />
                    <br />
                    あなたの<br className="mobileBr" /><span className={styles.highlight}>"本音"</span>と<span className={styles.highlight}>"未来"</span>を<br />
                    真剣に考えるAIコーチ
                </motion.h2>

                <motion.div
                    className={styles.buttonWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <a href="https://app.career-counseller.jp/" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }} target="_blank" rel="noopener noreferrer">
                        無料で使ってみる <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </motion.div>
            </div>
        </section >
    );
}
