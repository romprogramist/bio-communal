import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(data: {
  name: string;
  phone: string;
  service: string;
  comment: string;
}) {
  await transporter.sendMail({
    from: `Био Коммуналь Сайт <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
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
