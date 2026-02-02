import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEmailSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEmailSchema.parse(req.body);
      
      const existing = await storage.getWaitlistEmailByEmail(validatedData.email);
      if (existing) {
        return res.status(409).json({ error: "Email already registered" });
      }

      const result = await storage.addWaitlistEmail(validatedData);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid email format" });
      }
      console.error("Error adding to waitlist:", error);
      res.status(500).json({ error: "Failed to add email to waitlist" });
    }
  });

  return httpServer;
}
