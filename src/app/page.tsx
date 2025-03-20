import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="border border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
            Next.js 스트리밍 SSR 데모
          </h2>
          <p className="text-blue-600 dark:text-blue-400 mb-4">
            이 프로젝트는 Next.js의 스트리밍 SSR 기능을 보여주는 데모입니다.
            서버 컴포넌트, Suspense, loading.js 등 Next.js App Router의 핵심
            기능을 확인해보세요.
          </p>
          <Link
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-block font-medium transition-colors"
          >
            대시보드 보기
          </Link>
        </div>
      </main>
    </div>
  );
}
