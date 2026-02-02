import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { waitlistEmails, type InsertWaitlistEmail, type WaitlistEmail } from "@shared/schema";
import { eq } from "drizzle-orm";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export interface IStorage {
  addWaitlistEmail(email: InsertWaitlistEmail): Promise<WaitlistEmail>;
  getWaitlistEmailByEmail(email: string): Promise<WaitlistEmail | undefined>;
}

export class DatabaseStorage implements IStorage {
  async addWaitlistEmail(insertEmail: InsertWaitlistEmail): Promise<WaitlistEmail> {
    const [email] = await db.insert(waitlistEmails).values(insertEmail).returning();
    return email;
  }

  async getWaitlistEmailByEmail(email: string): Promise<WaitlistEmail | undefined> {
    const [result] = await db.select().from(waitlistEmails).where(eq(waitlistEmails.email, email));
    return result;
  }
}

export const storage = new DatabaseStorage();
