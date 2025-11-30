"use client";

import Image from 'next/image';
import styles from './Features.module.css';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            title: "悩みを相談する",
            description: (
                <>
                    いつでも、素直に話せる相手がいる。<br />
                    友達や家族には言いにくいことも、<br />
                    ここなら気をつかわずに話せます。<br />
                    <br />
                    AIがあなたのペースに合わせて、<br />
                    ゆっくり気持ちを整理してくれます。
                </>
            ),
            uiImage: "/feature_consult_ui_latest.png",
            illustration: "/feature_consult_illustration_v2.jpg"
        },
        {
            title: "自分を見つめ直す",
            description: (
                <>
                    これまでの経験を、<br />
                    もう一度ちゃんと見つめる。<br />
                    <br />
                    部活、勉強、行事、アルバイト…。<br />
                    気づかないうちに積み重ねてきたことは、<br />
                    たくさんあります。<br />
                    <br />
                    振り返るほど、<br />
                    あなたの“らしさ”が見えてきます。
                </>
            ),
            uiImage: "/feature_reflection_ui.png",
            illustration: "/feature_reflection_illustration_v2.jpg"
        },
        {
            title: "自分の特性に気づく",
            description: (
                <>
                    本当の気持ちや、<br />
                    大事にしたいことが分かってくる。<br />
                    <br />
                    会話の中から、あなたの興味や<br />
                    考え方のパターンが浮かび上がります。<br />
                    <br />
                    それが、進路を選ぶときの<br />
                    “判断の軸”になります。
                </>
            ),
            uiImage: "/feature_values_ui.png",
            illustration: "/feature_values_illustration_v2.jpg"
        },
        {
            title: "キャリアを知る",
            description: (
                <>
                    自分に近い先輩の道を知ると、<br />
                    未来が見えやすくなる。<br />
                    <br />
                    あなたと似た経験の先輩が、<br />
                    どんな道を歩んできたのか。<br />
                    <br />
                    リアルなストーリーに触れると、<br />
                    未来のイメージがぐっと広がります。
                </>
            ),
            uiImage: "/feature_career_ui.png",
            illustration: "/feature_career_illustration_v2.jpg"
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
                        AI進路くんと<br className="mobileBr" />できること
                    </motion.h2>
                </div>

                <div className={styles.list}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={styles.featureRow}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Left Column: UI Image */}
                            <div className={styles.uiColumn}>
                                <div className={styles.uiImageContainer}>
                                    <Image
                                        src={feature.uiImage}
                                        alt={`${feature.title} UI`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>

                            {/* Right Column: Illustration + Text */}
                            <div className={styles.contentColumn}>
                                <div className={styles.textWrapper}>
                                    <div className={styles.illustrationContainer}>
                                        <Image
                                            src={feature.illustration}
                                            alt="Illustration"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <div className={styles.featureDescription}>{feature.description}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
