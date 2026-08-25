import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
            T
          </span>
          <span className="text-lg font-bold text-slate-900">TilBron</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <a
            href="#qanday-ishlaydi"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Qanday ishlaydi
          </a>
          <a
            href="#repetitorlar"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Repetitorlar
          </a>
        </nav>

        <a
          href="#qanday-ishlaydi"
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
        >
          Repetitor topish
        </a>
      </div>
    </header>
  );
}
