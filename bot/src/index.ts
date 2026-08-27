import "dotenv/config";
import { Bot, Context, InlineKeyboard, session, SessionFlavor } from "grammy";
import { editAnnouncement, writeAnnouncement } from "./gemini";

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN topilmadi. bot/.env faylida BOT_TOKEN qiymatini bering.");
}

const BOOKING_URL = process.env.BOOKING_URL || "https://tilbron.vercel.app/";

interface SessionData {
  pendingRawText?: string;
}

type MyContext = Context & SessionFlavor<SessionData>;

const bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(session({ initial: (): SessionData => ({}) }));

const reviewKeyboard = new InlineKeyboard()
  .text("✅ Tasdiqlash", "tasdiqlash")
  .text("✏️ Qayta yoz", "qayta_yoz");

async function runPipeline(rawText: string): Promise<string> {
  const draft = await writeAnnouncement(rawText);
  return editAnnouncement(rawText, draft);
}

bot.command("start", (ctx) => {
  ctx.reply(
    "Salom! Men TilBron botiman 🎓\n\n" +
      "TilBron — repetitorlar bilan onlayn dars bron qilish platformasi.\n\n" +
      "Repetitor haqida e'lon joylash uchun:\n" +
      "/elon <matn>\n\n" +
      "Masalan: /elon Matematika fanidan 5 yillik tajribaga ega repetitor."
  );
});

bot.command("elon", async (ctx) => {
  const matn = ctx.match.trim();

  if (!matn) {
    ctx.reply("Matn kiritilmadi. Foydalanish: /elon <repetitor haqida matn>");
    return;
  }

  ctx.session.pendingRawText = matn;

  await ctx.replyWithChatAction("typing");
  const yakuniyMatn = await runPipeline(matn);

  await ctx.reply(
    `🎓 Yangi repetitor TilBron'da!\n${yakuniyMatn}\nBron qilish: ${BOOKING_URL}`,
    { reply_markup: reviewKeyboard }
  );
});

bot.callbackQuery("tasdiqlash", async (ctx) => {
  await ctx.editMessageText("Tasdiqlandi, kanalga tayyor ✅");
  await ctx.answerCallbackQuery();
});

bot.callbackQuery("qayta_yoz", async (ctx) => {
  const matn = ctx.session.pendingRawText;

  if (!matn) {
    await ctx.answerCallbackQuery("Xomaki matn topilmadi, /elon bilan qaytadan boshlang.");
    return;
  }

  await ctx.answerCallbackQuery("Qayta yozilmoqda...");
  await ctx.replyWithChatAction("typing");
  const yakuniyMatn = await runPipeline(matn);

  await ctx.editMessageText(
    `🎓 Yangi repetitor TilBron'da!\n${yakuniyMatn}\nBron qilish: ${BOOKING_URL}`,
    { reply_markup: reviewKeyboard }
  );
});

bot.catch((err) => {
  console.error("Bot xatosi:", err);
});

bot.start();
console.log("TilBron bot ishga tushdi.");
