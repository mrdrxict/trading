-- Gary Robinson Trading Database Schema
-- Created: 2024-01-15
-- Description: Complete database structure for Gary Robinson Trading website

-- Create database
CREATE DATABASE IF NOT EXISTS gary_robinson_trading;
USE gary_robinson_trading;

-- Clients table
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    package_selected VARCHAR(50),
    payment_status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
    notes TEXT,
    INDEX idx_email (email),
    INDEX idx_package (package_selected),
    INDEX idx_status (status)
);

-- Courses table
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    duration_weeks INT,
    level ENUM('beginner', 'intermediate', 'advanced', 'elite') NOT NULL,
    features JSON,
    outcomes JSON,
    is_active BOOLEAN DEFAULT TRUE,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_level (level),
    INDEX idx_active (is_active)
);

-- Mentorship programs table
CREATE TABLE mentorship (
    id INT AUTO_INCREMENT PRIMARY KEY,
    program_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    billing_period ENUM('monthly', 'quarterly', 'annually') NOT NULL,
    features JSON,
    benefits JSON,
    max_students INT DEFAULT 50,
    current_students INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_billing (billing_period),
    INDEX idx_active (is_active)
);

-- Bookings table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    session_date DATETIME NOT NULL,
    session_type ENUM('consultation', 'mentorship', 'group_call', 'trading_room') NOT NULL,
    duration_minutes INT DEFAULT 60,
    status ENUM('scheduled', 'completed', 'cancelled', 'no_show') DEFAULT 'scheduled',
    meeting_link VARCHAR(255),
    notes TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    INDEX idx_client (client_id),
    INDEX idx_session_date (session_date),
    INDEX idx_status (status)
);

-- Payments table
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    transaction_id VARCHAR(100) UNIQUE,
    stripe_payment_intent_id VARCHAR(100),
    payment_method ENUM('stripe', 'paypal', 'bank_transfer') DEFAULT 'stripe',
    payment_type ENUM('course', 'mentorship', 'consultation') NOT NULL,
    item_id INT, -- References course_id or mentorship_id
    payment_status ENUM('pending', 'completed', 'failed', 'refunded', 'disputed') DEFAULT 'pending',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    refund_date TIMESTAMP NULL,
    refund_amount DECIMAL(10,2) DEFAULT 0.00,
    notes TEXT,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    INDEX idx_client (client_id),
    INDEX idx_transaction (transaction_id),
    INDEX idx_status (payment_status),
    INDEX idx_payment_date (payment_date)
);

-- Contact submissions table
CREATE TABLE contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    package_interest VARCHAR(50),
    message TEXT NOT NULL,
    status ENUM('new', 'contacted', 'converted', 'closed') DEFAULT 'new',
    follow_up_date DATE,
    submitted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    response_date TIMESTAMP NULL,
    notes TEXT,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_submitted_date (submitted_date)
);

-- User sessions table (for tracking login sessions)
CREATE TABLE user_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    INDEX idx_client (client_id),
    INDEX idx_token (session_token),
    INDEX idx_active (is_active)
);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(150) UNIQUE NOT NULL,
    name VARCHAR(100),
    subscription_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('active', 'unsubscribed', 'bounced') DEFAULT 'active',
    source VARCHAR(50) DEFAULT 'website',
    preferences JSON,
    INDEX idx_email (email),
    INDEX idx_status (status)
);

-- Trading performance table (for tracking student results)
CREATE TABLE trading_performance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    month_year DATE NOT NULL,
    total_trades INT DEFAULT 0,
    winning_trades INT DEFAULT 0,
    losing_trades INT DEFAULT 0,
    total_pips DECIMAL(10,2) DEFAULT 0.00,
    total_profit_loss DECIMAL(12,2) DEFAULT 0.00,
    win_rate DECIMAL(5,2) DEFAULT 0.00,
    risk_reward_ratio DECIMAL(5,2) DEFAULT 0.00,
    max_drawdown DECIMAL(5,2) DEFAULT 0.00,
    notes TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE,
    UNIQUE KEY unique_client_month (client_id, month_year),
    INDEX idx_client (client_id),
    INDEX idx_month_year (month_year)
);

-- Insert sample courses
INSERT INTO courses (course_name, description, price, original_price, duration_weeks, level, features, outcomes) VALUES
('Beginner Package', 'Perfect for new traders looking to build a solid foundation across all markets', 997.00, 1297.00, 8, 'beginner', 
 '["Forex, Futures & Crypto Fundamentals", "50+ Video Lessons (20+ Hours)", "Trading Psychology Masterclass", "Risk Management Framework", "Basic Technical Analysis", "Trading Plan Templates", "Private Community Access", "Email Support", "Certificate of Completion"]',
 '["Understand market mechanics", "Execute your first profitable trades", "Develop proper risk management", "Build trading confidence"]'),

('Advanced Package', 'For experienced traders ready to take their performance to the next level', 1997.00, 2497.00, 12, 'advanced',
 '["Everything in Beginner Package", "Advanced Technical Analysis", "3 Proprietary Trading Strategies", "Market Structure & Order Flow", "Multi-Timeframe Analysis", "Advanced Risk Management", "Live Trading Sessions (4 per month)", "Weekly Group Q&A Calls", "Trading Journal & Analytics Tools", "Priority Support"]',
 '["Master advanced trading strategies", "Achieve consistent profitability", "Trade multiple markets confidently", "Develop institutional-level skills"]'),

('Elite Package', 'The ultimate trading education for serious traders seeking mastery', 2997.00, 3997.00, 16, 'elite',
 '["Everything in Advanced Package", "5 Professional Trading Strategies", "Algorithmic Trading Introduction", "Portfolio Management Techniques", "Institutional Trading Insights", "Custom Strategy Development", "Daily Live Trading Room Access", "Monthly 1-on-1 Coaching Call", "Professional Trading Tools", "Lifetime Course Updates", "VIP Support & Direct Access"]',
 '["Trade like a professional", "Develop your own strategies", "Manage large portfolios", "Achieve financial independence"]');

-- Insert sample mentorship programs
INSERT INTO mentorship (program_name, description, price, billing_period, features, benefits) VALUES
('Monthly Mentorship', 'Perfect for traders who want regular guidance and support', 499.00, 'monthly',
 '["2 x 1-on-1 Sessions per Month (60 min each)", "Weekly Group Coaching Calls", "Trading Room Access (5 days/week)", "Real-time Trade Alerts", "Performance Review & Feedback", "Direct Chat Access", "Trading Plan Optimization", "Risk Management Coaching"]',
 '["Personalized strategy development", "Regular performance tracking", "Immediate support when needed", "Community of serious traders"]'),

('Quarterly Mentorship', 'Intensive 3-month program for accelerated growth', 1299.00, 'quarterly',
 '["8 x 1-on-1 Sessions per Quarter (60 min each)", "Daily Group Coaching Calls", "VIP Trading Room Access", "Priority Trade Alerts", "Weekly Performance Analysis", "24/7 Chat Support", "Custom Strategy Development", "Portfolio Management Guidance", "Monthly Goal Setting Sessions"]',
 '["Accelerated learning curve", "Comprehensive skill development", "Consistent accountability", "Advanced strategy implementation"]'),

('Annual Mentorship', 'Complete transformation program for serious traders', 3997.00, 'annually',
 '["36 x 1-on-1 Sessions per Year (60 min each)", "Daily Group Coaching Calls", "Elite Trading Room Access", "Instant Trade Alerts", "Weekly Performance Deep Dives", "Direct Phone/Text Access", "Proprietary Strategy Development", "Advanced Portfolio Management", "Quarterly Business Reviews", "Trading Psychology Coaching", "Lifetime Alumni Network Access"]',
 '["Complete trading mastery", "Professional-level skills", "Long-term success planning", "Exclusive networking opportunities"]');

-- Insert sample clients
INSERT INTO clients (name, email, phone, package_selected, payment_status, notes) VALUES
('John Smith', 'john.smith@email.com', '+1-555-0101', 'advanced-course', 'completed', 'Experienced trader looking to improve consistency'),
('Sarah Johnson', 'sarah.j@email.com', '+1-555-0102', 'beginner-course', 'completed', 'Complete beginner, very motivated'),
('Michael Chen', 'michael.chen@email.com', '+1-555-0103', 'monthly-mentorship', 'completed', 'Part-time trader, works in finance'),
('Emily Davis', 'emily.davis@email.com', '+1-555-0104', 'elite-course', 'completed', 'Serious about becoming full-time trader'),
('Robert Wilson', 'robert.w@email.com', '+1-555-0105', 'quarterly-mentorship', 'completed', 'Former stock trader transitioning to forex');

-- Insert sample bookings
INSERT INTO bookings (client_id, session_date, session_type, status, notes) VALUES
(3, '2024-01-20 10:00:00', 'mentorship', 'scheduled', 'Monthly 1-on-1 session'),
(5, '2024-01-22 14:00:00', 'mentorship', 'scheduled', 'Quarterly review session'),
(1, '2024-01-25 16:00:00', 'group_call', 'scheduled', 'Weekly group coaching'),
(2, '2024-01-18 11:00:00', 'consultation', 'completed', 'Initial consultation - converted to course'),
(4, '2024-01-30 13:00:00', 'mentorship', 'scheduled', 'Elite package monthly call');

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

-- Create indexes for better performance
CREATE INDEX idx_clients_registration_date ON clients(registration_date);
CREATE INDEX idx_payments_payment_date ON payments(payment_date);
CREATE INDEX idx_bookings_session_date ON bookings(session_date);
CREATE INDEX idx_contact_submissions_submitted_date ON contact_submissions(submitted_date);

-- Create views for common queries
CREATE VIEW active_clients AS
SELECT c.*, p.payment_status, co.course_name, m.program_name
FROM clients c
LEFT JOIN payments p ON c.id = p.client_id AND p.payment_status = 'completed'
LEFT JOIN courses co ON p.item_id = co.id AND p.payment_type = 'course'
LEFT JOIN mentorship m ON p.item_id = m.id AND p.payment_type = 'mentorship'
WHERE c.status = 'active';

CREATE VIEW monthly_revenue AS
SELECT 
    DATE_FORMAT(payment_date, '%Y-%m') as month,
    COUNT(*) as total_payments,
    SUM(amount) as total_revenue,
    AVG(amount) as average_payment
FROM payments 
WHERE payment_status = 'completed'
GROUP BY DATE_FORMAT(payment_date, '%Y-%m')
ORDER BY month DESC;

CREATE VIEW upcoming_sessions AS
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