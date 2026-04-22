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
      to: "careers@rx360.com",
      replyTo: email,
      subject: `New Career Inquiry from ${name}`,
      html: `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background-color:#faf8f6;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background-color:#6B2D5B;padding:24px 32px;">
            <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.01em;">Rx360 Careers</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Stay Connected. Stay Healthy.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 32px 8px;">
            <p style="margin:0;font-size:11px;font-weight:600;color:#8a7a82;text-transform:uppercase;letter-spacing:0.08em;">New Inquiry</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#1a1a2e;line-height:1.3;">${name} is interested in joining the team</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:14px 16px;background-color:#faf8f6;border-left:3px solid #6B2D5B;border-radius:6px;">
                  <p style="margin:0;font-size:11px;font-weight:600;color:#8a7a82;text-transform:uppercase;letter-spacing:0.05em;">Name</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#1a1a2e;font-weight:500;">${name}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:14px 16px;background-color:#faf8f6;border-left:3px solid #6B2D5B;border-radius:6px;">
                  <p style="margin:0;font-size:11px;font-weight:600;color:#8a7a82;text-transform:uppercase;letter-spacing:0.05em;">Email</p>
                  <p style="margin:4px 0 0;font-size:15px;"><a href="mailto:${email}" style="color:#6B2D5B;text-decoration:none;font-weight:500;">${email}</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        ${phone ? `<tr>
          <td style="padding:8px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:14px 16px;background-color:#faf8f6;border-left:3px solid #6B2D5B;border-radius:6px;">
                  <p style="margin:0;font-size:11px;font-weight:600;color:#8a7a82;text-transform:uppercase;letter-spacing:0.05em;">Phone</p>
                  <p style="margin:4px 0 0;font-size:15px;color:#1a1a2e;font-weight:500;">${phone}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>` : ""}
        <tr>
          <td style="padding:8px 32px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:14px 16px;background-color:#faf8f6;border-left:3px solid #6B2D5B;border-radius:6px;">
                  <p style="margin:0;font-size:11px;font-weight:600;color:#8a7a82;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
                  <p style="margin:8px 0 0;font-size:15px;color:#1a1a2e;line-height:1.55;white-space:pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color:#faf8f6;border-top:1px solid #efe9ec;padding:20px 32px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#8a7a82;">Submitted via the Rx360 Careers page</p>
            <p style="margin:4px 0 0;font-size:12px;color:#8a7a82;">&copy; ${new Date().getFullYear()} Rx360 &bull; <a href="https://rx360.com" style="color:#8a7a82;text-decoration:none;">rx360.com</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
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
