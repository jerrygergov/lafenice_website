
import type { Express } from "express";
import { createServer, type Server } from "http";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', handleContactForm);
  
  const httpServer = createServer(app);
  return httpServer;
}

async function handleContactForm(req, res) {
  try {
    const { name, email, message }: ContactFormData = req.body;
    
    // Log form submission for now
    console.log('Contact form submission:', { name, email, message });
    
    return res.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to process contact form submission' 
    });
  }
}
