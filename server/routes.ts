import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // This topic tracking app uses localStorage for client-side persistence
  // No API routes needed for this application

  const httpServer = createServer(app);

  return httpServer;
}
