import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { eq, sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod";

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

    return res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return res.status(400).json({ error: "Invalid email format" });
    }
    console.error("Error adding to waitlist:", error);
    return res.status(500).json({ error: "Failed to add email to waitlist" });
  }
}
