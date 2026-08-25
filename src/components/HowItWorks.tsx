const steps = [
  {
    number: "1",
    title: "Repetitor tanla",
    description: "Fan, narx va reyting bo'yicha o'zingizga mos repetitorni toping.",
  },
  {
    number: "2",
    title: "Vaqt tanla",
    description: "Repetitorning bo'sh jadvalidan qulay dars vaqtini belgilang.",
  },
  {
    number: "3",
    title: "Bron qil",
    description: "Bir necha bosish bilan darsni bron qiling va tasdiqni oling.",
  },
];

export function HowItWorks() {
  return (
    <section id="qanday-ishlaydi" className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Qanday ishlaydi
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
