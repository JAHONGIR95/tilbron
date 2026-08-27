import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY topilmadi. bot/.env faylida GEMINI_API_KEY qiymatini bering.");
}

const MODEL = "gemini-3.6-flash";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function writeAnnouncement(rawText: string): Promise<string> {
  const prompt = `Siz repetitorlik platformasi uchun ijtimoiy tarmoq post yozuvchisiz.
Quyidagi xomaki ma'lumot asosida 2-3 jumladan iborat, jozibali va samimiy ohangdagi e'lon matni yozing.
Faqat berilgan faktlardan foydalaning, hech narsani o'ylab topmang.
Faqat tayyor matnni qaytaring, boshqa hech qanday izoh yoki sarlavha yozmang.

Xomaki ma'lumot:
${rawText}`;

  const response = await ai.models.generateContent({ model: MODEL, contents: prompt });
  return response.text!.trim();
}

export async function editAnnouncement(rawText: string, draft: string): Promise<string> {
  const prompt = `Siz muharrirsiz. Quyida asl xomaki ma'lumot va undan yozilgan e'lon qoralamasi berilgan.
Tekshiring:
1. Qoralama 300 belgidan oshmasin.
2. Qoralamada asl ma'lumotga zid yoki unda yo'q, o'ylab topilgan faktlar bo'lmasin.
Agar kerak bo'lsa, qoralamani qisqartiring yoki tuzating.
Faqat yakuniy, tayyor matnni qaytaring — tirnoqsiz, izohsiz.

Asl ma'lumot:
${rawText}

Qoralama:
${draft}`;

  const response = await ai.models.generateContent({ model: MODEL, contents: prompt });
  return response.text!.trim();
}
