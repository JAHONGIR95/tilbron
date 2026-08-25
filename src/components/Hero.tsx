export function Hero() {
  return (
    <section className="px-6 py-24 sm:py-32 text-center bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Repetitor top, dars bron qil
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
