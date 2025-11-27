"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={styles.badge}>AIキャリアコーチング</span>
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    あなたの味方になって、<br />
                    人生を一緒に考えるAI
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    迷ったとき、振り返りたいとき、決めきれないとき。<br />
                    味方くんが対話であなたの考えを整理します。
                </motion.p>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <a href="https://app.career-counseller.jp/" className="btn btn-primary">
                        無料で相談してみる <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </motion.div>

                <motion.div
                    className={styles.mockupWrapper}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.phoneMockup}>
                        <div className={styles.screen}>
                            <Image
                                src="/og_image.png"
                                alt="Mikatakun App Screenshot"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
