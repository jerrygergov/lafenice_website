
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
const PORT = 5000;

// Middleware setup
setupMiddleware();
setupLogging();

// Initialize server
(async () => {
  const server = await registerRoutes(app);
  setupErrorHandling();
  await setupViteOrStatic(server);
  startServer(server);
})();

function setupMiddleware() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}

function setupLogging() {
  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let responseBody: Record<string, any> | undefined;

    const originalJson = res.json;
    res.json = function(body, ...args) {
      responseBody = body;
      return originalJson.apply(res, [body, ...args]);
    };

    res.on("finish", () => {
      if (!path.startsWith("/api")) return;
      
      const duration = Date.now() - start;
      let logMessage = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      
      if (responseBody) {
        logMessage += ` :: ${JSON.stringify(responseBody)}`;
      }

      log(logMessage.length > 80 ? `${logMessage.slice(0, 79)}…` : logMessage);
    });

    next();
  });
}

function setupErrorHandling() {
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
}

async function setupViteOrStatic(server) {
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
}

function startServer(server) {
  server.listen(PORT, "0.0.0.0", () => {
    log(`Server running on port ${PORT}`);
  });
}
