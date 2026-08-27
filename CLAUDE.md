# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Loyiha haqida
Repetitorlar bilan onlayn dars bron qilish va boshqarish platformasi.
O'quvchi repetitor tanlaydi, jadvalni ko'radi, dars vaqtini bron qiladi.

## Stack
- Frontend: Next.js (App Router), TypeScript, Tailwind CSS
- Backend: Next.js API routes
- Baza: Neon (serverless Postgres) + Prisma ORM — hali ulanmagan, keyingi modulda qo'shiladi
- Hosting/deploy: GitHub -> Vercel (avtomatik deploy, har push'da)
- Auth: Telegram/Google orqali kirish + SMS tasdiqlash (4-modulda qo'shiladi)

## Buyruqlar
```bash
npm install        # bog'liqliklarni o'rnatish
npm run dev         # dev server (Turbopack, http://localhost:3000)
npm run build        # production build
npm run start        # production serverni ishga tushirish (build'dan keyin)
npm run lint         # ESLint
npx tsc --noEmit      # TypeScript type-check (alohida script yo'q)
```
Hozircha test frameworki ulanmagan.

## Arxitektura
- App Router: `src/app/layout.tsx` (root layout, metadata) va `src/app/page.tsx` — bosh sahifa faqat `src/components/`dagi bo'lim komponentlarini (`Header`, `Hero`, `HowItWorks`, `ForTutors`, `Footer`) tartib bilan yig'adi. Yangi landing bo'limi qo'shilganda shu yig'ish naqshiga amal qil: bo'lim uchun alohida komponent yoz, so'ng `page.tsx`ga qo'sh.
- Import alias: `@/*` -> `./src/*` (`tsconfig.json`).
- `layout.tsx` va `page.tsx` App Router talabiga ko'ra `default export` bilan yakunlanadi, lekin ichkarida named function sifatida yoziladi (konvensiyaga moslash uchun).
- ESLint: `eslint.config.mjs` `eslint-config-next`ning flat config eksportini **to'g'ridan-to'g'ri** import qiladi (`import nextConfig from "eslint-config-next"`). `@eslint/eslintrc`ning `FlatCompat` orqali `.extends(...)` qilish bilan urinma — `eslint-config-next@16` allaqachon flat config formatida va bu ikkalasini aralashtirish `TypeError: Converting circular structure to JSON` xatosini beradi.
- Asosiy aksent rang — `emerald` (Tailwind). Yangi interaktiv elementlar (tugmalar, havolalar, belgilar) shu rangga mos bo'lishi kerak, boshqa rang tanlanmasa.
- `bot/` — grammY asosidagi Telegram bot (`bot/src/index.ts`), asosiy Next.js ilovadan **butunlay mustaqil**: o'z `package.json`, o'z `.env` (`BOT_TOKEN`, `BOOKING_URL`, `GEMINI_API_KEY`), o'z `.gitignore`i bor. Root buyruqlari (`npm run dev`/`build`) unga tegmaydi — ishga tushirish uchun `cd bot && npm install && npm run dev`.
- `bot/src/gemini.ts` — Gemini API bilan ishlaydigan yagona joy (`writeAnnouncement`, `editAnnouncement`). `/elon` buyrug'i Yozuvchi → Muharrir ketma-ketligida shu funksiyalarni chaqiradi (`bot/src/index.ts`dagi `runPipeline`). Yangi Gemini chaqiruvi kerak bo'lsa, shu faylga qo'sh — prompt/model tanlovi shu yerda markazlashgan.

## Konvensiyalar
- TypeScript strict mode
- Componentlar functional, named export
- Commit xabarlari: qisqa, imperativ ("add booking form", emas "added")
- Environment o'zgaruvchilar (`DATABASE_URL` va boshqalar) hech qachon kodga yozilmaydi — faqat `.env.local` va Vercel'ning Environment Variables bo'limida

## Muhim eslatmalar (Claude uchun)
- Bu loyihada o'z VPS yo'q — hosting Vercel'da, baza Neon'da. Deploy/server sozlash bo'yicha tavsiyalar shu ikkalasiga mos bo'lishi kerak (masalan Docker/Caddy emas, `vercel.json` va Vercel env sozlamalari)
- Bron (booking) mantig'ida bitta vaqt oralig'i ikki foydalanuvchiga bir vaqtda berilib ketmasligi kritik — shu joyda har doim atomik tranzaksiya yoki DB darajasidagi cheklov taklif qil

## Holat
Loyiha boshlang'ich bosqichda — 1-modul: landing sahifa va Vercel'ga deploy.
