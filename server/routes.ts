import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // For now, just log the message since we don't have a real email service
      console.log('Contact form submission:', { name, email, message });
      
      // In a real implementation, you would send an email here
      // using a service like SendGrid or AWS SES
      
      res.json({ success: true });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
