const faqItems = [
  {
    question: "TilBron qanday ishlaydi?",
    answer:
      "Repetitorni tanlaysiz, uning bo'sh jadvalini ko'rasiz va bir necha bosishda dars vaqtini bron qilasiz.",
  },
  {
    question: "Xizmat pullikmi?",
    answer:
      "TilBron orqali repetitor topish va dars bron qilish bepul. Dars narxini har bir repetitor o'zi belgilaydi.",
  },
  {
    question: "Repetitor sifatida qanday qo'shilaman?",
    answer:
      "Pastdagi \"Repetitorsan?\" bo'limidagi \"Qo'shil\" tugmasi orqali ariza qoldirasiz, so'ng jamoamiz siz bilan bog'lanadi.",
  },
  {
    question: "Bron qilingan darsni bekor qilsam bo'ladimi?",
    answer:
      "Ha, darsni boshlanishidan oldin bekor qilish yoki vaqtini o'zgartirish imkoniyati bo'ladi.",
  },
  {
    question: "Ro'yxatdan o'tish uchun nima kerak?",
    answer:
      "Telegram yoki Google hisobingiz orqali kirasiz, so'ng telefon raqamingizni SMS orqali tasdiqlaysiz. Bu funksiya hozir ishlab chiqilmoqda va tez orada qo'shiladi.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Ko&apos;p so&apos;raladigan savollar
        </h2>
        <div className="mt-10 divide-y divide-slate-200 border-t border-b border-slate-200">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
                {item.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 shrink-0 text-emerald-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
