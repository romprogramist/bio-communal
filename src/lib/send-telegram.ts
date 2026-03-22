export async function sendTelegram(data: {
  name: string;
  phone: string;
  service: string;
  comment: string;
}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return; // Skip if not configured

  const text = [
    "📋 *Новая заявка с сайта*",
    "",
    `👤 *Имя:* ${data.name}`,
    `📞 *Телефон:* ${data.phone}`,
    `🔧 *Услуга:* ${data.service}`,
    `💬 *Комментарий:* ${data.comment || "—"}`,
  ].join("\n");

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });
  } catch {
    // Best-effort: don't throw if Telegram fails
  }
}
