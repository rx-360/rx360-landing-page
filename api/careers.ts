import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { Resend } from "resend";

const careerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = careerSchema.parse(req.body);

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return res.status(500).json({ success: false, message: "Email service is not configured." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Rx360 Careers <noreply@rx360.com>",
      to: "meenakshi@wondermentapps.com",
      replyTo: email,
      subject: `New Career Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #1a1a2e;">
          <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 24px;">New Career Inquiry</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; width: 100px; vertical-align: top; color: #555;">Name</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; vertical-align: top; color: #555;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; font-weight: 600; vertical-align: top; color: #555;">Phone</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: 600; vertical-align: top; color: #555;">Message</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;" />
          <p style="font-size: 13px; color: #999;">Submitted via the Rx360 Careers page &bull; &copy; ${new Date().getFullYear()} Rx360</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Your message has been sent. We'll be in touch soon!" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: "Please check your form and try again." });
    }
    console.error("Careers form error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong. Please try again later." });
  }
}
