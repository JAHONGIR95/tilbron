import "dotenv/config";
import { Bot } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN topilmadi. bot/.env faylida BOT_TOKEN qiymatini bering.");
}

const BOOKING_URL = process.env.BOOKING_URL || "https://tilbron.vercel.app/";

const bot = new Bot(BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply(
    "Salom! Men TilBron botiman 🎓\n\n" +
      "TilBron — repetitorlar bilan onlayn dars bron qilish platformasi.\n\n" +
      "Repetitor haqida e'lon joylash uchun:\n" +
      "/elon <matn>\n\n" +
      "Masalan: /elon Matematika fanidan 5 yillik tajribaga ega repetitor."
  );
});

bot.command("elon", (ctx) => {
  const matn = ctx.match.trim();

  if (!matn) {
    ctx.reply("Matn kiritilmadi. Foydalanish: /elon <repetitor haqida matn>");
    return;
  }

  ctx.reply(`🎓 Yangi repetitor TilBron'da!\n${matn}\nBron qilish: ${BOOKING_URL}`);
});

bot.catch((err) => {
  console.error("Bot xatosi:", err);
});

bot.start();
console.log("TilBron bot ishga tushdi.");
