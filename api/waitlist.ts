import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { eq, sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";
import { Resend } from "resend";

const waitlistEmails = pgTable("waitlist_emails", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

const insertWaitlistEmailSchema = z.object({
  email: z.string().email(),
});

function getDb() {
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 1,
  });
  return drizzle(pool);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const db = getDb();

  try {
    const { email } = insertWaitlistEmailSchema.parse(req.body);

    const [existing] = await db
      .select()
      .from(waitlistEmails)
      .where(eq(waitlistEmails.email, email));

    if (existing) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const [result] = await db
      .insert(waitlistEmails)
      .values({ email })
      .returning();

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Rx360 <noreply@rx360.com>",
          to: email,
          subject: "You're on the Rx360 list!",
          html: `<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 40px 24px; color: #1a1a2e;">
  <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Welcome to Rx360</h1>
  <p style="font-size: 16px; line-height: 1.6; color: #444;">Thanks for signing up. You're now on our list for launch updates.</p>
  <p style="font-size: 16px; line-height: 1.6; color: #444;">We're building a wellness ecosystem that helps you stay connected and stay healthy — on your terms.</p>
  <p style="font-size: 16px; line-height: 1.6; color: #444;">We'll be in touch with updates soon.</p>
  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;" />
  <p style="font-size: 13px; color: #999;">Stay Connected. Stay Healthy.<br/>&copy; ${new Date().getFullYear()} Rx360</p>
</div>`,
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }
    }

    return res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return res.status(400).json({ error: "Invalid email format" });
    }
    console.error("Error adding to waitlist:", error);
    return res.status(500).json({ error: "Failed to add email to waitlist" });
  }
}
