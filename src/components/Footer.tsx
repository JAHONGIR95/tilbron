export function Footer() {
  return (
    <footer className="px-6 py-10 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row">
        <span>&copy; {new Date().getFullYear()} TilBron</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-700">
            Biz haqimizda
          </a>
          <a href="#" className="hover:text-slate-700">
            Aloqa
          </a>
        </div>
      </div>
    </footer>
  );
}
