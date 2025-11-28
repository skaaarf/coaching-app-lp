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
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.badge}>進路に迷うあなたのための専任AIコーチ</span>
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    進む道を<br />一緒に見つけよう
                </motion.h1>

                <motion.div
                    className={styles.descriptionWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className={styles.description}>
                        誰に相談していいか分からなくても、焦らなくていい。<br />
                        AIがあなたの話を受け止め、これから進む道を一緒に探します。<br />
                        <br />
                        <span className={styles.message}>あなたは1人じゃない</span>
                    </p>
                </motion.div>

                <motion.ul
                    className={styles.valueList}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    <li>進路やキャリアの悩みを、いつでも相談できる</li>
                    <li>一緒に今までの人生を振り返って、何がしたいかが見つかる</li>
                    <li>先輩のキャリアからヒントを得られる</li>
                </motion.ul>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <a href="https://app.career-counseller.jp/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        無料で始める <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </a>
                    <p className={styles.subCta}>匿名でOK。今の気持ちをそのまま打ち込んでください。</p>
                </motion.div>
            </div>
        </section>
    );
}
