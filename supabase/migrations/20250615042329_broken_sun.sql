/*
  # Gary Robinson Trading Database Schema
  
  1. New Tables
    - `clients` - Customer information and registration data
    - `courses` - Available trading courses with pricing and details
    - `mentorship` - Mentorship program offerings
    - `bookings` - Session scheduling and management
    - `payments` - Payment processing and transaction records
    - `contact_submissions` - Contact form submissions
    - `user_sessions` - User login session tracking
    - `newsletter_subscribers` - Email newsletter subscriptions
    - `trading_performance` - Student trading performance metrics

  2. Security
    - Enable RLS on all tables
    - Add policies for public access to courses and mentorship
    - Add policies for authenticated users to access their own data
    - Add policies for public contact form and newsletter submissions

  3. Features
    - Comprehensive indexing for performance
    - JSONB columns for flexible data storage
    - Proper foreign key relationships
    - Sample data for testing
    - Useful views for common queries
*/

-- Create custom types for enums
DO $$ BEGIN
    CREATE TYPE payment_status_enum AS ENUM ('pending', 'completed', 'failed', 'refunded');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE client_status_enum AS ENUM ('active', 'inactive', 'suspended');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE course_level_enum AS ENUM ('beginner', 'intermediate', 'advanced', 'elite');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE billing_period_enum AS ENUM ('monthly', 'quarterly', 'annually');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE session_type_enum AS ENUM ('consultation', 'mentorship', 'group_call', 'trading_room');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE booking_status_enum AS ENUM ('scheduled', 'completed', 'cancelled', 'no_show');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_method_enum AS ENUM ('stripe', 'paypal', 'bank_transfer');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE payment_type_enum AS ENUM ('course', 'mentorship', 'consultation');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE contact_status_enum AS ENUM ('new', 'contacted', 'converted', 'closed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE subscription_status_enum AS ENUM ('active', 'unsubscribed', 'bounced');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    package_selected VARCHAR(50),
    registration_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE,
    status client_status_enum DEFAULT 'active',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    duration_weeks INTEGER,
    level course_level_enum NOT NULL,
    features JSONB,
    outcomes JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Mentorship programs table
CREATE TABLE IF NOT EXISTS mentorship (
    id SERIAL PRIMARY KEY,
    program_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    billing_period billing_period_enum NOT NULL,
    features JSONB,
    benefits JSONB,
    max_students INTEGER DEFAULT 50,
    current_students INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    session_date TIMESTAMP WITH TIME ZONE NOT NULL,
    session_type session_type_enum NOT NULL,
    duration_minutes INTEGER DEFAULT 60,
    status booking_status_enum DEFAULT 'scheduled',
    meeting_link VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    transaction_id VARCHAR(100) UNIQUE,
    stripe_payment_intent_id VARCHAR(100),
    payment_method payment_method_enum DEFAULT 'stripe',
    payment_type payment_type_enum NOT NULL,
    item_id INTEGER, -- References course_id or mentorship_id
    payment_status payment_status_enum DEFAULT 'pending',
    payment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    refund_date TIMESTAMP WITH TIME ZONE,
    refund_amount DECIMAL(10,2) DEFAULT 0.00,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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

-- User sessions table (for tracking login sessions)
CREATE TABLE IF NOT EXISTS user_sessions (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    ip_address INET,
    user_agent TEXT,
    login_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    name VARCHAR(100),
    subscription_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status subscription_status_enum DEFAULT 'active',
    source VARCHAR(50) DEFAULT 'website',
    preferences JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Trading performance table (for tracking student results)
CREATE TABLE IF NOT EXISTS trading_performance (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    month_year DATE NOT NULL,
    total_trades INTEGER DEFAULT 0,
    winning_trades INTEGER DEFAULT 0,
    losing_trades INTEGER DEFAULT 0,
    total_pips DECIMAL(10,2) DEFAULT 0.00,
    total_profit_loss DECIMAL(12,2) DEFAULT 0.00,
    win_rate DECIMAL(5,2) DEFAULT 0.00,
    risk_reward_ratio DECIMAL(5,2) DEFAULT 0.00,
    max_drawdown DECIMAL(5,2) DEFAULT 0.00,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(client_id, month_year)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
CREATE INDEX IF NOT EXISTS idx_clients_package ON clients(package_selected);
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);
CREATE INDEX IF NOT EXISTS idx_clients_registration_date ON clients(registration_date);

CREATE INDEX IF NOT EXISTS idx_courses_level ON courses(level);
CREATE INDEX IF NOT EXISTS idx_courses_active ON courses(is_active);

CREATE INDEX IF NOT EXISTS idx_mentorship_billing ON mentorship(billing_period);
CREATE INDEX IF NOT EXISTS idx_mentorship_active ON mentorship(is_active);

CREATE INDEX IF NOT EXISTS idx_bookings_client ON bookings(client_id);
CREATE INDEX IF NOT EXISTS idx_bookings_session_date ON bookings(session_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);

CREATE INDEX IF NOT EXISTS idx_payments_client ON payments(client_id);
CREATE INDEX IF NOT EXISTS idx_payments_transaction ON payments(transaction_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_payments_payment_date ON payments(payment_date);

CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submitted_date ON contact_submissions(submitted_date);

CREATE INDEX IF NOT EXISTS idx_sessions_client ON user_sessions(client_id);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON user_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_sessions_active ON user_sessions(is_active);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);

CREATE INDEX IF NOT EXISTS idx_performance_client ON trading_performance(client_id);
CREATE INDEX IF NOT EXISTS idx_performance_month_year ON trading_performance(month_year);

-- Enable Row Level Security
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE trading_performance ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to courses and mentorship
CREATE POLICY "Courses are publicly readable" ON courses
    FOR SELECT USING (is_active = true);

CREATE POLICY "Mentorship programs are publicly readable" ON mentorship
    FOR SELECT USING (is_active = true);

-- Create policies for contact submissions (public insert)
CREATE POLICY "Anyone can submit contact forms" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Create policies for newsletter subscriptions (public insert)
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

-- Create policies for authenticated users to manage their own data
CREATE POLICY "Users can read own client data" ON clients
    FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own client data" ON clients
    FOR UPDATE USING (auth.uid()::text = id::text);

CREATE POLICY "Users can read own bookings" ON bookings
    FOR SELECT USING (auth.uid()::text = client_id::text);

CREATE POLICY "Users can insert own bookings" ON bookings
    FOR INSERT WITH CHECK (auth.uid()::text = client_id::text);

CREATE POLICY "Users can read own payments" ON payments
    FOR SELECT USING (auth.uid()::text = client_id::text);

CREATE POLICY "Users can read own sessions" ON user_sessions
    FOR SELECT USING (auth.uid()::text = client_id::text);

CREATE POLICY "Users can read own performance" ON trading_performance
    FOR SELECT USING (auth.uid()::text = client_id::text);

-- Insert sample courses
INSERT INTO courses (course_name, description, price, original_price, duration_weeks, level, features, outcomes) VALUES
('Beginner Package', 'Perfect for new traders looking to build a solid foundation across all markets', 997.00, 1297.00, 8, 'beginner', 
 '["Forex, Futures & Crypto Fundamentals", "50+ Video Lessons (20+ Hours)", "Trading Psychology Masterclass", "Risk Management Framework", "Basic Technical Analysis", "Trading Plan Templates", "Private Community Access", "Email Support", "Certificate of Completion"]'::jsonb,
 '["Understand market mechanics", "Execute your first profitable trades", "Develop proper risk management", "Build trading confidence"]'::jsonb),

('Advanced Package', 'For experienced traders ready to take their performance to the next level', 1997.00, 2497.00, 12, 'advanced',
 '["Everything in Beginner Package", "Advanced Technical Analysis", "3 Proprietary Trading Strategies", "Market Structure & Order Flow", "Multi-Timeframe Analysis", "Advanced Risk Management", "Live Trading Sessions (4 per month)", "Weekly Group Q&A Calls", "Trading Journal & Analytics Tools", "Priority Support"]'::jsonb,
 '["Master advanced trading strategies", "Achieve consistent profitability", "Trade multiple markets confidently", "Develop institutional-level skills"]'::jsonb),

('Elite Package', 'The ultimate trading education for serious traders seeking mastery', 2997.00, 3997.00, 16, 'elite',
 '["Everything in Advanced Package", "5 Professional Trading Strategies", "Algorithmic Trading Introduction", "Portfolio Management Techniques", "Institutional Trading Insights", "Custom Strategy Development", "Daily Live Trading Room Access", "Monthly 1-on-1 Coaching Call", "Professional Trading Tools", "Lifetime Course Updates", "VIP Support & Direct Access"]'::jsonb,
 '["Trade like a professional", "Develop your own strategies", "Manage large portfolios", "Achieve financial independence"]'::jsonb);

-- Insert sample mentorship programs
INSERT INTO mentorship (program_name, description, price, billing_period, features, benefits) VALUES
('Monthly Mentorship', 'Perfect for traders who want regular guidance and support', 499.00, 'monthly',
 '["2 x 1-on-1 Sessions per Month (60 min each)", "Weekly Group Coaching Calls", "Trading Room Access (5 days/week)", "Real-time Trade Alerts", "Performance Review & Feedback", "Direct Chat Access", "Trading Plan Optimization", "Risk Management Coaching"]'::jsonb,
 '["Personalized strategy development", "Regular performance tracking", "Immediate support when needed", "Community of serious traders"]'::jsonb),

('Quarterly Mentorship', 'Intensive 3-month program for accelerated growth', 1299.00, 'quarterly',
 '["8 x 1-on-1 Sessions per Quarter (60 min each)", "Daily Group Coaching Calls", "VIP Trading Room Access", "Priority Trade Alerts", "Weekly Performance Analysis", "24/7 Chat Support", "Custom Strategy Development", "Portfolio Management Guidance", "Monthly Goal Setting Sessions"]'::jsonb,
 '["Accelerated learning curve", "Comprehensive skill development", "Consistent accountability", "Advanced strategy implementation"]'::jsonb),

('Annual Mentorship', 'Complete transformation program for serious traders', 3997.00, 'annually',
 '["36 x 1-on-1 Sessions per Year (60 min each)", "Daily Group Coaching Calls", "Elite Trading Room Access", "Instant Trade Alerts", "Weekly Performance Deep Dives", "Direct Phone/Text Access", "Proprietary Strategy Development", "Advanced Portfolio Management", "Quarterly Business Reviews", "Trading Psychology Coaching", "Lifetime Alumni Network Access"]'::jsonb,
 '["Complete trading mastery", "Professional-level skills", "Long-term success planning", "Exclusive networking opportunities"]'::jsonb);

-- Insert sample clients
INSERT INTO clients (name, email, phone, package_selected, notes) VALUES
('John Smith', 'john.smith@email.com', '+1-555-0101', 'advanced-course', 'Experienced trader looking to improve consistency'),
('Sarah Johnson', 'sarah.j@email.com', '+1-555-0102', 'beginner-course', 'Complete beginner, very motivated'),
('Michael Chen', 'michael.chen@email.com', '+1-555-0103', 'monthly-mentorship', 'Part-time trader, works in finance'),
('Emily Davis', 'emily.davis@email.com', '+1-555-0104', 'elite-course', 'Serious about becoming full-time trader'),
('Robert Wilson', 'robert.w@email.com', '+1-555-0105', 'quarterly-mentorship', 'Former stock trader transitioning to forex');

-- Insert sample bookings
INSERT INTO bookings (client_id, session_date, session_type, status, notes) VALUES
(3, '2024-01-20 10:00:00+00', 'mentorship', 'scheduled', 'Monthly 1-on-1 session'),
(5, '2024-01-22 14:00:00+00', 'mentorship', 'scheduled', 'Quarterly review session'),
(1, '2024-01-25 16:00:00+00', 'group_call', 'scheduled', 'Weekly group coaching'),
(2, '2024-01-18 11:00:00+00', 'consultation', 'completed', 'Initial consultation - converted to course'),
(4, '2024-01-30 13:00:00+00', 'mentorship', 'scheduled', 'Elite package monthly call');

-- Insert sample payments
INSERT INTO payments (client_id, amount, transaction_id, payment_type, item_id, payment_status, notes) VALUES
(1, 1997.00, 'pi_1234567890', 'course', 2, 'completed', 'Advanced Package purchase'),
(2, 997.00, 'pi_1234567891', 'course', 1, 'completed', 'Beginner Package purchase'),
(3, 499.00, 'pi_1234567892', 'mentorship', 1, 'completed', 'Monthly mentorship - January'),
(4, 2997.00, 'pi_1234567893', 'course', 3, 'completed', 'Elite Package purchase'),
(5, 1299.00, 'pi_1234567894', 'mentorship', 2, 'completed', 'Quarterly mentorship - Q1');

-- Insert sample contact submissions
INSERT INTO contact_submissions (name, email, phone, package_interest, message, status) VALUES
('David Brown', 'david.brown@email.com', '+1-555-0201', 'consultation', 'Interested in learning more about forex trading. Complete beginner.', 'new'),
('Lisa Anderson', 'lisa.anderson@email.com', '+1-555-0202', 'advanced-course', 'Have been trading for 2 years but struggling with consistency. Need help.', 'contacted'),
('James Taylor', 'james.taylor@email.com', '+1-555-0203', 'annual-mentorship', 'Serious about becoming a professional trader. Want the best program available.', 'new'),
('Maria Garcia', 'maria.garcia@email.com', '+1-555-0204', 'beginner-course', 'Heard about Gary from a friend. Want to start trading part-time.', 'new');

-- Insert sample newsletter subscribers
INSERT INTO newsletter_subscribers (email, name, source) VALUES
('subscriber1@email.com', 'Alex Thompson', 'website'),
('subscriber2@email.com', 'Jennifer Lee', 'social_media'),
('subscriber3@email.com', 'Mark Rodriguez', 'referral'),
('subscriber4@email.com', 'Amanda White', 'website'),
('subscriber5@email.com', 'Chris Johnson', 'youtube');

-- Insert sample trading performance data
INSERT INTO trading_performance (client_id, month_year, total_trades, winning_trades, losing_trades, total_pips, total_profit_loss, win_rate, risk_reward_ratio) VALUES
(1, '2024-01-01', 45, 32, 13, 287.50, 2850.00, 71.11, 2.20),
(3, '2024-01-01', 38, 26, 12, 195.30, 1953.00, 68.42, 2.10),
(4, '2024-01-01', 52, 39, 13, 412.80, 4128.00, 75.00, 2.45),
(5, '2024-01-01', 41, 28, 13, 234.60, 2346.00, 68.29, 2.15);

-- Create views for common queries
CREATE OR REPLACE VIEW active_clients AS
SELECT c.*, p.payment_status as latest_payment_status, co.course_name, m.program_name
FROM clients c
LEFT JOIN payments p ON c.id = p.client_id AND p.payment_status = 'completed'
LEFT JOIN courses co ON p.item_id = co.id AND p.payment_type = 'course'
LEFT JOIN mentorship m ON p.item_id = m.id AND p.payment_type = 'mentorship'
WHERE c.status = 'active';

CREATE OR REPLACE VIEW monthly_revenue AS
SELECT 
    TO_CHAR(payment_date, 'YYYY-MM') as month,
    COUNT(*) as total_payments,
    SUM(amount) as total_revenue,
    AVG(amount) as average_payment
FROM payments 
WHERE payment_status = 'completed'
GROUP BY TO_CHAR(payment_date, 'YYYY-MM')
ORDER BY month DESC;

CREATE OR REPLACE VIEW upcoming_sessions AS
SELECT 
    b.id,
    b.session_date,
    b.session_type,
    c.name as client_name,
    c.email as client_email,
    c.phone as client_phone,
    b.notes
FROM bookings b
JOIN clients c ON b.client_id = c.id
WHERE b.session_date >= NOW() 
AND b.status = 'scheduled'
ORDER BY b.session_date ASC;