"use client";

import styles from './FAQ.module.css';
import { motion } from 'framer-motion';

export default function FAQ() {
    const faqs = [
        {
            q: "AI進路くんはどんな人におすすめですか？",
            a: "進路選択に悩む高校生・大学生の方におすすめです。「何がしたいか分からない」「自分に合った仕事が分からない」「将来が不安」といった悩みを持つ方に特に役立ちます。"
        },
        {
            q: "本当に無料ですか？",
            a: "はい、すべての機能を完全無料でご利用いただけます。追加料金は一切かかりません。"
        },
        {
            q: "AIに相談内容は学習されますか？",
            a: "いいえ、個人の相談内容がAIの学習に使用されることはありません。プライバシーは厳重に保護されますので、安心してお話しください。"
        },
        {
            q: "どのような機能がありますか？",
            a: "AIとの対話型キャリア相談、価値観診断バトル、人生振り返り機能、キャリア辞典など、自己理解を深めて進路選択をサポートする機能を提供しています。"
        },
        {
            q: "スマートフォンでも使えますか？",
            a: "はい、スマートフォン、タブレット、パソコンなど、Webブラウザがあればどのデバイスからでもご利用いただけます。"
        },
        {
            q: "どのくらいの時間で使えますか？",
            a: "各機能は5〜15分程度で利用できます。隙間時間に気軽に使えるよう設計されていますので、自分のペースで進められます。"
        },
        {
            q: "進路が決まっていなくても使えますか？",
            a: "もちろんです。むしろ「何も決まっていない」「何から考えればいいか分からない」という方にこそ使っていただきたいアプリです。対話を通じて少しずつ自分を知ることができます。"
        },
        {
            q: "親や先生に見られることはありますか？",
            a: "いいえ、あなたの相談内容や診断結果は完全にプライベートです。誰にも見られることなく、安心してご自身の気持ちを整理できます。"
        }
    ];

    // JSON-LD構造化データ
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section className={`section ${styles.section}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    よくある質問
                </motion.h2>

                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <h3 className={styles.question}>
                                <span className={styles.qMark}>Q.</span> {faq.q}
                            </h3>
                            <p className={styles.answer}>{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
