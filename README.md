# Gary Robinson Trading Platform

A comprehensive trading education platform for Gary Robinson Trading, offering professional courses, mentorship programs, and trading resources for Forex, Futures, and Cryptocurrency markets.

## Project Overview

This platform serves as a complete educational hub for traders of all experience levels, providing access to professional trading courses, personalized mentorship programs, market analysis tools, trading calculators, and educational resources. The site is built with React, TypeScript, and Tailwind CSS, offering a responsive and modern user experience.

## Key Features

### Core Pages

- **Home**: Landing page showcasing Gary Robinson's trading expertise, services, and testimonials
- **About**: Detailed background on Gary Robinson's trading career and credentials
- **Services**: Overview of all trading education services offered
- **Courses**: Comprehensive trading courses for different experience levels
- **Mentorship**: Personalized mentorship programs with one-on-one coaching
- **Contact**: Contact form and support information
- **Booking**: Session booking system for consultations and mentorship

### Trading Resources

- **Market Analysis**: Real-time market data, technical indicators, and economic calendar
- **Trading Calculators**: Professional tools for position sizing, profit/loss, risk/reward, margin, and compound interest calculations
- **Trading Strategies**: Database of proven trading strategies with detailed implementation guides
- **Risk Management**: Comprehensive risk management guidelines and calculators
- **Educational Blog**: Structured learning resources and tutorials
- **Daily Trading Signals**: Professional trading signals with analysis and alerts
- **Certifications**: Showcase of prop firm certifications and professional credentials

### Legal Pages

- **Terms of Service**: Legal terms and conditions
- **Privacy Policy**: Data protection and privacy information
- **Refund Policy**: Refund terms and procedures
- **Disclaimer**: Risk warnings and legal disclaimers

### Payment System

The platform features a comprehensive payment integration system that connects all products with both Stripe and Cryptomus payment processing:

#### Payment Modal Component
- Beautiful, responsive design with clear steps
- Customer information collection with validation
- Payment method selection (Stripe or Cryptomus)
- Real-time feedback and loading states
- Detailed product summary

#### API Integration
- Secure Stripe checkout session creation
- Cryptomus payment processing for cryptocurrency
- Order management system
- Comprehensive error handling

#### Payment Pages
- Success page with order details and next steps
- Cancellation page with retry options
- Proper routing and navigation

#### Product Integration
- "Buy Now" buttons integrated across all product pages
- Consistent payment flow across all products
- Support for courses, mentorship programs, and consultations

## Technical Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Payment Processing**: Stripe, Cryptomus
- **Database**: Supabase (PostgreSQL)
- **API**: RESTful API endpoints for payments and webhooks
- **Deployment**: Vite for development and production builds

## Project Structure

```
gary-robinson-trading/
├── public/               # Public assets
├── src/                  # Source code
│   ├── api/              # API endpoints
│   │   ├── orders/       # Order management
│   │   ├── payments/     # Payment processing
│   │   └── webhooks/     # Payment webhooks
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── payment/      # Payment-related components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # UI components (Button, Input, etc.)
│   ├── data/             # Static data
│   ├── pages/            # Page components
│   └── utils/            # Utility functions
├── supabase/             # Supabase configuration and migrations
│   └── migrations/       # Database migrations
└── tailwind.config.js    # Tailwind CSS configuration
```

## Pages Overview

### Home Page
The landing page showcases Gary Robinson's trading expertise with sections for:
- Hero banner with key statistics
- About Gary Robinson
- Core trading services
- Course offerings
- Mentorship programs
- Testimonials
- Market insights
- Trading resources
- FAQ section
- Contact form

### About Page
Detailed information about Gary Robinson including:
- Professional background
- Career timeline
- Trading philosophy
- Certifications and credentials
- Media appearances
- Speaking engagements

### Services Page
Overview of all trading education services:
- Forex trading education
- Futures trading mastery
- Cryptocurrency trading
- Personal mentorship
- Trading room access
- Strategy development
- Certification programs
- Service packages

### Courses Page
Comprehensive trading courses for different experience levels:
- Beginner courses (Forex Fundamentals, Crypto Trading)
- Intermediate courses (Technical Analysis, Futures Trading)
- Advanced courses (Trading Psychology, Algorithmic Trading)
- Course features and curriculum
- Learning outcomes
- Pricing and enrollment options

### Mentorship Page
Personalized mentorship programs:
- Monthly mentorship
- Quarterly mentorship
- Annual mentorship
- Mentorship features and benefits
- Success metrics
- Student testimonials
- Application process

### Trading Strategies Page
Database of proven trading strategies:
- Trend Following Momentum
- Breakout Scalping System
- Crypto Momentum Swing
- Mean Reversion Range Trading
- Index Futures Momentum
- Gold Futures Breakout
- Strategy details, setup rules, and performance metrics
- Custom strategy development services

### Risk Management Page
Comprehensive risk management guidelines:
- Core risk management principles
- Position size calculator
- Risk scenarios and approaches
- Risk management tools
- Common mistakes to avoid
- Portfolio risk monitoring

### Trading Calculators Page
Professional trading calculation tools:
- Position Size Calculator
- Profit/Loss Calculator
- Risk/Reward Calculator
- Margin Calculator
- Compound Interest Calculator
- Pip Value Calculator

### Daily Trading Signals Page
Professional trading signals with analysis:
- Recent trading signals with performance
- Signal packages and pricing
- Signal delivery process
- Performance statistics
- Testimonials from subscribers

### Payment System
Complete payment integration for all products:
- Payment modal with customer information collection
- Payment method selection (Stripe or Cryptomus)
- Order processing and management
- Payment success and cancellation pages
- Webhook handlers for payment status updates

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/gary-robinson-trading.git
cd gary-robinson-trading
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:5000

## Deployment
The project is built with Vite and can be deployed to any static hosting service:

1. Build the project
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_CRYPTOMUS_MERCHANT_ID=your_cryptomus_merchant_id
VITE_FRONTEND_URL=http://localhost:5000
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is proprietary and confidential. All rights reserved.

## Contact
Gary Robinson - gary@garyrobinsontrading.com