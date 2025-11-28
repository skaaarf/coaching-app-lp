import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ページが見つかりません - みかたくん',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">ページが見つかりません</h2>
                <p className="text-gray-600 mb-8">
                    お探しのページは削除されたか、URLが変更された可能性があります。
                </p>
                <Link
                    href="/"
                    className="inline-block bg-[#465DAA] text-white px-8 py-3 rounded-full font-bold hover:bg-[#384A88] transition-colors"
                >
                    トップページに戻る
                </Link>
            </div>
        </div>
    );
}
