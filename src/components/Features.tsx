"use client";

import Image from 'next/image';
import styles from './Features.module.css';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            title: "いつでも、どんな悩みでも話せる。",
            description: (
                <>
                    将来のこと、勉強のこと、人間関係のこと。<br />
                    誰にも言えない不安も、AIが丁寧に受け止めてくれます。<br />
                    <br />
                    否定しない。急かさない。<br />
                    あなたの言葉を大切に、ゆっくり整理を助けてくれます。
                </>
            ),
            uiImage: "/feature_consult_ui_new.png",
            illustration: "/feature_consult_illustration.jpg"
        },
        {
            title: "人生の材料を集めて、“自分の物語”をつくる。",
            description: (
                <>
                    これまでの経験や、頑張ってきたこと。<br />
                    普段は忘れている大切なエピソードを、一緒に言語化します。<br />
                    <br />
                    あなたの選択や行動の“理由”が見えると、<br />
                    自分の軸が自然と浮かび上がってきます。
                </>
            ),
            uiImage: "/feature_reflection.png",
            illustration: "/feature_reflection_hand.png" // Placeholder
        },
        {
            title: "あなたが本当に大切にしているものが、言葉になる。",
            description: (
                <>
                    会話の中から、あなたの価値観・興味・こだわりが浮かび上がります。<br />
                    <br />
                    “何を大事にしたい？”<br />
                    “どんな時に心が動く？”<br />
                    <br />
                    この問いに答えが出ると、<br />
                    進路選択の“判断基準”が手に入ります。
                </>
            ),
            uiImage: "/feature_values.png",
            illustration: "/feature_reflection_hand.png" // Placeholder
        },
        {
            title: "先輩のストーリーから、未来のヒントを見つける。",
            description: (
                <>
                    あなたと似た価値観・経験を持つ先輩が、<br />
                    どんな選択をして、どんな道を歩んできたのか。<br />
                    <br />
                    一人ひとりのキャリアの“流れ”を見比べることで、<br />
                    自分の未来が、少しずつ形を帯びて見えてきます。
                </>
            ),
            uiImage: "/feature_career.png",
            illustration: "/feature_reflection_hand.png" // Placeholder
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
                        味方くんができること
                    </motion.h2>
                </div>

                <div className={styles.list}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.featureRow} ${index % 2 === 1 ? styles.reverse : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Visuals Column (UI + Illustration) */}
                            <div className={styles.visualsColumn}>
                                <div className={styles.visualsWrapper}>
                                    <div className={styles.uiImageContainer}>
                                        <Image
                                            src={feature.uiImage}
                                            alt={`${feature.title} UI`}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className={styles.illustrationContainer}>
                                        <Image
                                            src={feature.illustration}
                                            alt="Illustration"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Column */}
                            <div className={styles.textColumn}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <div className={styles.featureDescription}>{feature.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
