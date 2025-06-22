/*
  # Contact Submissions Table Schema
  
  1. New Table
    - `contact_submissions` - Store contact form submissions with all details
    
  2. Security
    - Enable RLS on the table
    - Add policy for public insert access
    - Add policy for admin access
    
  3. Features
    - Comprehensive fields for all contact form data
    - Status tracking for follow-up management
    - Timestamps for submission and response tracking
*/

-- Create custom type for contact status
CREATE TYPE contact_status_enum AS ENUM ('new', 'contacted', 'converted', 'closed');

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    package_interest VARCHAR(50),
    message TEXT NOT NULL,
    status contact_status_enum DEFAULT 'new',
    follow_up_date DATE,
    submitted_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    response_date TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submitted_date ON contact_submissions(submitted_date);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert access
CREATE POLICY "Anyone can submit contact forms" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Create policy for admin read access
CREATE POLICY "Admins can read all contact submissions" ON contact_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy for admin update access
CREATE POLICY "Admins can update contact submissions" ON contact_submissions
    FOR UPDATE USING (auth.role() = 'authenticated');