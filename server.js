import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Middleware
app.use(helmet()); // Set security headers
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '10kb' })); // Body parser with size limit
app.use(xss()); // Sanitize input

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api/contact', limiter);

// Validate contact form data
const validateContactForm = (data) => {
  const errors = {};
  
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Phone number is required';
  }
  
  if (!data.packageInterest) {
    errors.packageInterest = 'Please select your interest';
  }
  
  if (!data.message || data.message.trim() === '') {
    errors.message = 'Message is required';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

// Send confirmation email to user
const sendUserConfirmationEmail = async (userData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: userData.email,
    subject: 'Thank You for Contacting Gary Robinson Trading',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #1e3a8a; margin-bottom: 10px;">Thank You for Reaching Out</h1>
          <p style="color: #4b5563; font-size: 16px;">We've received your message and will get back to you shortly.</p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 10px;">Your Message Details:</h2>
          <p><strong>Name:</strong> ${userData.name}</p>
          <p><strong>Email:</strong> ${userData.email}</p>
          <p><strong>Phone:</strong> ${userData.phone}</p>
          <p><strong>Interest:</strong> ${userData.packageInterest}</p>
          <p><strong>Message:</strong> ${userData.message}</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="color: #4b5563; font-size: 14px;">We aim to respond to all inquiries within 24 hours.</p>
          <p style="color: #4b5563; font-size: 14px;">If you have any urgent questions, please call us at +44 20 7123 4567.</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
          <p style="color: #6b7280; font-size: 12px;">© ${new Date().getFullYear()} Gary Robinson Trading. All rights reserved.</p>
        </div>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

// Send notification email to admin
const sendAdminNotificationEmail = async (userData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Contact Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #1e3a8a; margin-bottom: 10px;">New Contact Form Submission</h1>
          <p style="color: #4b5563; font-size: 16px;">A new contact form has been submitted on the website.</p>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 10px;">Contact Details:</h2>
          <p><strong>Name:</strong> ${userData.name}</p>
          <p><strong>Email:</strong> ${userData.email}</p>
          <p><strong>Phone:</strong> ${userData.phone}</p>
          <p><strong>Interest:</strong> ${userData.packageInterest}</p>
          <p><strong>Message:</strong> ${userData.message}</p>
          <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="mailto:${userData.email}" style="display: inline-block; background-color: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to ${userData.name}</a>
        </div>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    // Check honeypot field (if it's filled, it's likely a bot)
    if (formData.honeypot) {
      // Return success to the bot but don't process the form
      return res.status(200).json({ success: true });
    }
    
    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.valid) {
      return res.status(400).json({ success: false, errors: validation.errors });
    }
    
    // Store in Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          package_interest: formData.packageInterest,
          message: formData.message,
          status: 'new',
          submitted_date: new Date().toISOString()
        }
      ]);
    
    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ success: false, error: 'Failed to store contact submission' });
    }
    
    // Send confirmation email to user
    await sendUserConfirmationEmail(formData);
    
    // Send notification email to admin
    await sendAdminNotificationEmail(formData);
    
    // Return success response
    return res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, error: 'An unexpected error occurred' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});