export function Hero() {
  return (
    <section className="px-6 py-24 sm:py-32 text-center bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-600/25">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-white"
            aria-hidden="true"
          >
            <path
              d="M12 3 2 8l10 5 8-4.09V16h1.5V8L12 3Z"
              fill="currentColor"
            />
            <path
              d="M6 10.5V15c0 1.5 2.7 3.5 6 3.5s6-2 6-3.5v-4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          O&apos;z repetitoringni top, darsni bugun bron qil
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          O&apos;zingizga mos repetitorni tanlang, jadvalni ko&apos;ring va
          bir necha bosishda dars vaqtini bron qiling.
        </p>
        <div className="mt-10">
          <a
            href="#qanday-ishlaydi"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            Repetitor topish
          </a>
        </div>
        <blockquote className="mx-auto mt-14 max-w-md border-t border-slate-200 pt-6">
          <p className="text-sm italic text-slate-500">
            &ldquo;Bilimga qilingan sarmoya har doim eng yuqori foyda
            keltiradi.&rdquo;
          </p>
          <cite className="mt-2 block text-xs font-medium not-italic text-slate-400">
            — Benjamin Franklin
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
