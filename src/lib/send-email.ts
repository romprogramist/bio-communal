import { Resend } from "resend";

export async function sendEmail(data: {
  name: string;
  phone: string;
  service: string;
  comment: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: `Био Коммуналь Сайт <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
    to: "biokomm@mail.ru",
    subject: `Новая заявка: ${data.service}`,
    html: `
      <h2>Новая заявка с сайта</h2>
      <p><strong>Имя:</strong> ${data.name}</p>
      <p><strong>Телефон:</strong> ${data.phone}</p>
      <p><strong>Услуга:</strong> ${data.service}</p>
      <p><strong>Комментарий:</strong> ${data.comment || "—"}</p>
    `,
  });
}
