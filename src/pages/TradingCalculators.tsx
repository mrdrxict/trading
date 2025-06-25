import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Target, BarChart3, Percent, ArrowUpDown } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';

const TradingCalculators = () => {
  const [selectedCalculator, setSelectedCalculator] = useState('position-size');

  // Position Size Calculator State
  const [positionSizeInputs, setPositionSizeInputs] = useState({
    accountSize: 10000,
    riskPercentage: 2,
    entryPrice: 1.1000,
    stopLoss: 1.0950
  });

  // Profit/Loss Calculator State
  const [profitLossInputs, setProfitLossInputs] = useState({
    entryPrice: 1.1000,
    exitPrice: 1.1050,
    lotSize: 1,
    tradeType: 'buy'
  });

  // Risk/Reward Calculator State
  const [riskRewardInputs, setRiskRewardInputs] = useState({
    entryPrice: 1.1000,
    stopLoss: 1.0950,
    takeProfit: 1.1100,
    lotSize: 1
  });

  // Margin Calculator State
  const [marginInputs, setMarginInputs] = useState({
    lotSize: 1,
    leverage: 100,
    instrumentPrice: 1.1000,
    contractSize: 100000
  });

  // Compound Interest Calculator State
  const [compoundInputs, setCompoundInputs] = useState({
    initialAmount: 10000,
    monthlyReturn: 5,
    months: 12,
    monthlyDeposit: 0
  });

  // Pip Value Calculator State
  const [pipValueInputs, setPipValueInputs] = useState({
    instrument: 'EUR/USD',
    lotSize: 1,
    accountCurrency: 'GBP',
    customInstrument: '',
    customConversionRate: 1
  });

  const [pipValueResults, setPipValueResults] = useState(null);

  const calculators = [
    {
      id: 'position-size',
      name: 'Position Size Calculator',
      icon: <Target className="text-blue-900" size={24} />,
      description: 'Calculate optimal position size based on risk'
    },
    {
      id: 'profit-loss',
      name: 'Profit/Loss Calculator',
      icon: <TrendingUp className="text-blue-900" size={24} />,
      description: 'Calculate potential profit and loss'
    },
    {
      id: 'risk-reward',
      name: 'Risk/Reward Calculator',
      icon: <BarChart3 className="text-blue-900" size={24} />,
      description: 'Analyze risk to reward ratios'
    },
    {
      id: 'margin',
      name: 'Margin Calculator',
      icon: <DollarSign className="text-blue-900" size={24} />,
      description: 'Calculate required margin for trades'
    },
    {
      id: 'compound',
      name: 'Compound Interest Calculator',
      icon: <Percent className="text-blue-900" size={24} />,
      description: 'Calculate compound growth over time'
    },
    {
      id: 'pip-value',
      name: 'Pip Value Calculator',
      icon: <ArrowUpDown className="text-blue-900" size={24} />,
      description: 'Calculate pip values for different instruments'
    }
  ];

  // Position Size Calculator Logic
  const calculatePositionSize = () => {
    const { accountSize, riskPercentage, entryPrice, stopLoss } = positionSizeInputs;
    const riskAmount = (accountSize * riskPercentage) / 100;
    const pipValue = Math.abs(entryPrice - stopLoss);
    const positionSize = riskAmount / pipValue;
    
    return {
      riskAmount: riskAmount.toFixed(2),
      pipValue: pipValue.toFixed(4),
      positionSize: positionSize.toFixed(0),
      lotSize: (positionSize / 100000).toFixed(2)
    };
  };

  // Profit/Loss Calculator Logic
  const calculateProfitLoss = () => {
    const { entryPrice, exitPrice, lotSize, tradeType } = profitLossInputs;
    const pipDifference = tradeType === 'buy' 
      ? (exitPrice - entryPrice) 
      : (entryPrice - exitPrice);
    const pips = pipDifference * 10000; // Assuming 4-decimal currency pair
    const profitLoss = pips * 10 * lotSize; // $10 per pip for standard lot
    
    return {
      pips: pips.toFixed(1),
      profitLoss: profitLoss.toFixed(2),
      percentage: ((profitLoss / (entryPrice * 100000 * lotSize)) * 100).toFixed(2)
    };
  };

  // Risk/Reward Calculator Logic
  const calculateRiskReward = () => {
    const { entryPrice, stopLoss, takeProfit, lotSize } = riskRewardInputs;
    const risk = Math.abs(entryPrice - stopLoss) * 10000 * 10 * lotSize;
    const reward = Math.abs(takeProfit - entryPrice) * 10000 * 10 * lotSize;
    const ratio = reward / risk;
    
    return {
      risk: risk.toFixed(2),
      reward: reward.toFixed(2),
      ratio: ratio.toFixed(2),
      breakeven: (1 / (1 + ratio) * 100).toFixed(1)
    };
  };

  // Margin Calculator Logic
  const calculateMargin = () => {
    const { lotSize, leverage, instrumentPrice, contractSize } = marginInputs;
    const notionalValue = lotSize * contractSize * instrumentPrice;
    const requiredMargin = notionalValue / leverage;
    
    return {
      notionalValue: notionalValue.toFixed(2),
      requiredMargin: requiredMargin.toFixed(2),
      freeMargin: (10000 - requiredMargin).toFixed(2), // Assuming $10,000 account
      marginLevel: ((10000 / requiredMargin) * 100).toFixed(2)
    };
  };

  // Compound Interest Calculator Logic
  const calculateCompound = () => {
    const { initialAmount, monthlyReturn, months, monthlyDeposit } = compoundInputs;
    const monthlyRate = monthlyReturn / 100;
    let balance = initialAmount;
    const monthlyData = [];
    
    for (let i = 1; i <= months; i++) {
      balance = balance * (1 + monthlyRate) + monthlyDeposit;
      monthlyData.push({
        month: i,
        balance: balance.toFixed(2),
        totalDeposits: (initialAmount + (monthlyDeposit * i)).toFixed(2),
        totalGains: (balance - initialAmount - (monthlyDeposit * i)).toFixed(2)
      });
    }
    
    return {
      finalBalance: balance.toFixed(2),
      totalDeposits: (initialAmount + (monthlyDeposit * months)).toFixed(2),
      totalGains: (balance - initialAmount - (monthlyDeposit * months)).toFixed(2),
      monthlyData: monthlyData.slice(-6) // Show last 6 months
    };
  };

  // Pip Value Calculator Logic
  const calculatePipValue = () => {
    const { instrument, lotSize, accountCurrency } = pipValueInputs;
    
    // Define instrument data
    const instrumentData = {
      // Forex pairs
      'EUR/USD': { type: 'forex', pipSize: 0.0001, baseUnit: 100000 },
      'GBP/USD': { type: 'forex', pipSize: 0.0001, baseUnit: 100000 },
      'USD/JPY': { type: 'forex', pipSize: 0.01, baseUnit: 100000 },
      'USD/CHF': { type: 'forex', pipSize: 0.0001, baseUnit: 100000 },
      'AUD/USD': { type: 'forex', pipSize: 0.0001, baseUnit: 100000 },
      'USD/CAD': { type: 'forex', pipSize: 0.0001, baseUnit: 100000 },
      'NZD/USD': { type: 'forex', pipSize: 0.0001, baseUnit: 100000 },
      'EUR/GBP': { type: 'forex', pipSize: 0.0001, baseUnit: 100000 },
      'GBP/JPY': { type: 'forex', pipSize: 0.01, baseUnit: 100000 },
      'EUR/JPY': { type: 'forex', pipSize: 0.01, baseUnit: 100000 },
      
      // Futures contracts
      'MGC': { type: 'futures', tickValue: 1.0, tickSize: 0.1, description: 'Micro Gold Futures' },
      'MNQ': { type: 'futures', tickValue: 0.5, tickSize: 0.25, description: 'Micro NASDAQ Futures' },
      'MCL': { type: 'futures', tickValue: 1.0, tickSize: 0.01, description: 'Micro Crude Oil Futures' },
      'M6E': { type: 'futures', tickValue: 1.25, tickSize: 0.00005, description: 'Micro EUR/USD Futures' },
      'MES': { type: 'futures', tickValue: 1.25, tickSize: 0.25, description: 'Micro S&P 500 Futures' },
      'MYM': { type: 'futures', tickValue: 0.5, tickSize: 1, description: 'Micro Dow Futures' },
      'M2K': { type: 'futures', tickValue: 0.5, tickSize: 0.1, description: 'Micro Russell 2000 Futures' }
    };

    const data = instrumentData[instrument];
    if (!data) return null;

    // Currency conversion rates (simplified - in real app would use live rates)
    const conversionRates = {
      'GBP': { 'USD': 1.27, 'EUR': 1.17, 'GBP': 1.0 },
      'USD': { 'USD': 1.0, 'EUR': 0.92, 'GBP': 0.79 },
      'EUR': { 'USD': 1.09, 'EUR': 1.0, 'GBP': 0.85 }
    };

    let pipValue, pipSize, lotSizes;

    if (data.type === 'forex') {
      pipSize = data.pipSize;
      const basePipValue = (pipSize * data.baseUnit * lotSize);
      
      // Convert to account currency if needed
      if (instrument.endsWith('/USD') && accountCurrency !== 'USD') {
        pipValue = basePipValue * conversionRates['USD'][accountCurrency];
      } else if (instrument.startsWith('USD/') && accountCurrency !== 'USD') {
        pipValue = basePipValue * conversionRates['USD'][accountCurrency];
      } else {
        pipValue = basePipValue;
      }

      lotSizes = [
        { size: 'Micro (0.01)', value: (pipValue * 0.01).toFixed(2) },
        { size: 'Mini (0.1)', value: (pipValue * 0.1).toFixed(2) },
        { size: 'Standard (1.0)', value: pipValue.toFixed(2) }
      ];
    } else {
      // Futures
      pipSize = data.tickSize;
      pipValue = data.tickValue;
      
      // Convert to account currency
      if (accountCurrency !== 'USD') {
        pipValue = pipValue * conversionRates['USD'][accountCurrency];
      }

      lotSizes = [
        { size: '1 Contract', value: pipValue.toFixed(2) },
        { size: '5 Contracts', value: (pipValue * 5).toFixed(2) },
        { size: '10 Contracts', value: (pipValue * 10).toFixed(2) }
      ];
    }

    return {
      instrument,
      type: data.type,
      pipValue: pipValue.toFixed(2),
      pipSize: pipSize,
      accountCurrency,
      lotSizes,
      description: data.description || `${instrument} ${data.type === 'forex' ? 'Currency Pair' : 'Futures Contract'}`
    };
  };

  const handlePipValueCalculate = () => {
    const results = calculatePipValue();
    setPipValueResults(results);
  };

  const positionSizeResults = calculatePositionSize();
  const profitLossResults = calculateProfitLoss();
  const riskRewardResults = calculateRiskReward();
  const marginResults = calculateMargin();
  const compoundResults = calculateCompound();

  const instrumentOptions = [
    { value: '', label: 'Select an instrument' },
    { value: 'EUR/USD', label: 'EUR/USD - Euro/US Dollar' },
    { value: 'GBP/USD', label: 'GBP/USD - British Pound/US Dollar' },
    { value: 'USD/JPY', label: 'USD/JPY - US Dollar/Japanese Yen' },
    { value: 'USD/CHF', label: 'USD/CHF - US Dollar/Swiss Franc' },
    { value: 'AUD/USD', label: 'AUD/USD - Australian Dollar/US Dollar' },
    { value: 'USD/CAD', label: 'USD/CAD - US Dollar/Canadian Dollar' },
    { value: 'NZD/USD', label: 'NZD/USD - New Zealand Dollar/US Dollar' },
    { value: 'EUR/GBP', label: 'EUR/GBP - Euro/British Pound' },
    { value: 'GBP/JPY', label: 'GBP/JPY - British Pound/Japanese Yen' },
    { value: 'EUR/JPY', label: 'EUR/JPY - Euro/Japanese Yen' },
    { value: 'MGC', label: 'MGC - Micro Gold Futures' },
    { value: 'MNQ', label: 'MNQ - Micro NASDAQ Futures' },
    { value: 'MCL', label: 'MCL - Micro Crude Oil Futures' },
    { value: 'M6E', label: 'M6E - Micro EUR/USD Futures' },
    { value: 'MES', label: 'MES - Micro S&P 500 Futures' },
    { value: 'MYM', label: 'MYM - Micro Dow Futures' },
    { value: 'M2K', label: 'M2K - Micro Russell 2000 Futures' }
  ];

  const lotSizeOptions = [
    { value: '0.01', label: '0.01 (Micro Lot)' },
    { value: '0.1', label: '0.1 (Mini Lot)' },
    { value: '1', label: '1.0 (Standard Lot)' },
    { value: '5', label: '5.0 Lots' },
    { value: '10', label: '10.0 Lots' }
  ];

  const currencyOptions = [
    { value: 'GBP', label: 'GBP - British Pound' },
    { value: 'USD', label: 'USD - US Dollar' },
    { value: 'EUR', label: 'EUR - Euro' }
  ];

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Calculators - Gary Robinson Trading</title>
      <meta name="description" content="Professional trading calculators including position size, profit/loss, risk/reward, margin, compound interest, and pip value calculators. Free tools for traders." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Trading Calculators
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Essential trading tools to help you calculate position sizes, analyze risk, and optimize your trading performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Calculator className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">6</div>
              <p className="text-gray-200">Professional Tools</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Target className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Free</div>
              <p className="text-gray-200">Always Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <TrendingUp className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Real-time</div>
              <p className="text-gray-200">Instant Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Choose Your Calculator
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setSelectedCalculator(calc.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  selectedCalculator === calc.id
                    ? 'bg-blue-900 text-white shadow-xl scale-105'
                    : 'bg-white hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg mr-3 ${
                    selectedCalculator === calc.id ? 'bg-yellow-500' : 'bg-blue-100'
                  }`}>
                    {calc.icon}
                  </div>
                  <h3 className={`font-bold ${
                    selectedCalculator === calc.id ? 'text-white' : 'text-blue-900'
                  }`}>
                    {calc.name}
                  </h3>
                </div>
                <p className={`text-sm ${
                  selectedCalculator === calc.id ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {calc.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Position Size Calculator */}
          {selectedCalculator === 'position-size' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Position Size Calculator
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Calculate the optimal position size based on your risk tolerance and account size
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calculator Inputs */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Trade Parameters</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Account Size (£)
                        </label>
                        <input
                          type="number"
                          value={positionSizeInputs.accountSize}
                          onChange={(e) => setPositionSizeInputs({...positionSizeInputs, accountSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Risk Percentage (%)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={positionSizeInputs.riskPercentage}
                          onChange={(e) => setPositionSizeInputs({...positionSizeInputs, riskPercentage: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Entry Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={positionSizeInputs.entryPrice}
                          onChange={(e) => setPositionSizeInputs({...positionSizeInputs, entryPrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Stop Loss Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={positionSizeInputs.stopLoss}
                          onChange={(e) => setPositionSizeInputs({...positionSizeInputs, stopLoss: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Calculator Results */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Risk Amount</div>
                        <div className="text-2xl font-bold text-red-600">£{positionSizeResults.riskAmount}</div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Distance to Stop Loss</div>
                        <div className="text-2xl font-bold text-blue-600">{positionSizeResults.pipValue}</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Position Size (Units)</div>
                        <div className="text-2xl font-bold text-green-600">{positionSizeResults.positionSize}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Lot Size</div>
                        <div className="text-2xl font-bold text-purple-600">{positionSizeResults.lotSize}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-start">
                        <Target className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div className="text-sm text-yellow-800">
                          <strong>Remember:</strong> Never risk more than 2% of your account on a single trade. Proper position sizing is key to long-term trading success.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profit/Loss Calculator */}
          {selectedCalculator === 'profit-loss' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Profit/Loss Calculator
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Calculate potential profit or loss for your trades
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calculator Inputs */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Trade Parameters</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Trade Type
                        </label>
                        <select
                          value={profitLossInputs.tradeType}
                          onChange={(e) => setProfitLossInputs({...profitLossInputs, tradeType: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          <option value="buy">Buy (Long)</option>
                          <option value="sell">Sell (Short)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Entry Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={profitLossInputs.entryPrice}
                          onChange={(e) => setProfitLossInputs({...profitLossInputs, entryPrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Exit Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={profitLossInputs.exitPrice}
                          onChange={(e) => setProfitLossInputs({...profitLossInputs, exitPrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Lot Size
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={profitLossInputs.lotSize}
                          onChange={(e) => setProfitLossInputs({...profitLossInputs, lotSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Calculator Results */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Pips</div>
                        <div className={`text-2xl font-bold ${parseFloat(profitLossResults.pips) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {profitLossResults.pips}
                        </div>
                      </div>
                      
                      <div className={`p-4 rounded-lg ${parseFloat(profitLossResults.profitLoss) >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                        <div className="text-sm text-gray-600">Profit/Loss</div>
                        <div className={`text-2xl font-bold ${parseFloat(profitLossResults.profitLoss) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          £{profitLossResults.profitLoss}
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Percentage Return</div>
                        <div className={`text-2xl font-bold ${parseFloat(profitLossResults.percentage) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {profitLossResults.percentage}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-start">
                        <TrendingUp className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div className="text-sm text-yellow-800">
                          <strong>Note:</strong> This calculation assumes a standard 4-decimal currency pair. Adjust accordingly for other instruments.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Risk/Reward Calculator */}
          {selectedCalculator === 'risk-reward' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Risk/Reward Calculator
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Calculate risk-to-reward ratios for your trades
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calculator Inputs */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Trade Parameters</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Entry Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={riskRewardInputs.entryPrice}
                          onChange={(e) => setRiskRewardInputs({...riskRewardInputs, entryPrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Stop Loss Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={riskRewardInputs.stopLoss}
                          onChange={(e) => setRiskRewardInputs({...riskRewardInputs, stopLoss: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Take Profit Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={riskRewardInputs.takeProfit}
                          onChange={(e) => setRiskRewardInputs({...riskRewardInputs, takeProfit: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Lot Size
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={riskRewardInputs.lotSize}
                          onChange={(e) => setRiskRewardInputs({...riskRewardInputs, lotSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Calculator Results */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Risk Amount</div>
                        <div className="text-2xl font-bold text-red-600">£{riskRewardResults.risk}</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Reward Amount</div>
                        <div className="text-2xl font-bold text-green-600">£{riskRewardResults.reward}</div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Risk:Reward Ratio</div>
                        <div className="text-2xl font-bold text-blue-600">1:{riskRewardResults.ratio}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Breakeven Win Rate</div>
                        <div className="text-2xl font-bold text-purple-600">{riskRewardResults.breakeven}%</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-start">
                        <Target className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div className="text-sm text-yellow-800">
                          <strong>Pro Tip:</strong> Aim for a minimum risk-to-reward ratio of 1:2 to maintain profitability even with a win rate below 50%.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Margin Calculator */}
          {selectedCalculator === 'margin' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Margin Calculator
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Calculate required margin for leveraged trading
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calculator Inputs */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Trade Parameters</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Lot Size
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={marginInputs.lotSize}
                          onChange={(e) => setMarginInputs({...marginInputs, lotSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Leverage (e.g., 100 = 100:1)
                        </label>
                        <input
                          type="number"
                          value={marginInputs.leverage}
                          onChange={(e) => setMarginInputs({...marginInputs, leverage: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Instrument Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={marginInputs.instrumentPrice}
                          onChange={(e) => setMarginInputs({...marginInputs, instrumentPrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contract Size
                        </label>
                        <input
                          type="number"
                          value={marginInputs.contractSize}
                          onChange={(e) => setMarginInputs({...marginInputs, contractSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Calculator Results */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Notional Value</div>
                        <div className="text-2xl font-bold text-blue-600">£{marginResults.notionalValue}</div>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Required Margin</div>
                        <div className="text-2xl font-bold text-red-600">£{marginResults.requiredMargin}</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Free Margin (Assuming £10,000 Account)</div>
                        <div className="text-2xl font-bold text-green-600">£{marginResults.freeMargin}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Margin Level</div>
                        <div className="text-2xl font-bold text-purple-600">{marginResults.marginLevel}%</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-start">
                        <DollarSign className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div className="text-sm text-yellow-800">
                          <strong>Warning:</strong> Higher leverage increases both potential profits and losses. Most brokers require a minimum margin level of 100% to maintain positions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compound Interest Calculator */}
          {selectedCalculator === 'compound' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Compound Interest Calculator
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Calculate how your trading account can grow over time with compound returns
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calculator Inputs */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Growth Parameters</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Initial Amount (£)
                        </label>
                        <input
                          type="number"
                          value={compoundInputs.initialAmount}
                          onChange={(e) => setCompoundInputs({...compoundInputs, initialAmount: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Monthly Return (%)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={compoundInputs.monthlyReturn}
                          onChange={(e) => setCompoundInputs({...compoundInputs, monthlyReturn: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Time Period (Months)
                        </label>
                        <input
                          type="number"
                          value={compoundInputs.months}
                          onChange={(e) => setCompoundInputs({...compoundInputs, months: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Monthly Deposit (£)
                        </label>
                        <input
                          type="number"
                          value={compoundInputs.monthlyDeposit}
                          onChange={(e) => setCompoundInputs({...compoundInputs, monthlyDeposit: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Calculator Results */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Growth Projection</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Final Balance</div>
                        <div className="text-2xl font-bold text-green-600">£{compoundResults.finalBalance}</div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Total Deposits</div>
                        <div className="text-2xl font-bold text-blue-600">£{compoundResults.totalDeposits}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Total Gains</div>
                        <div className="text-2xl font-bold text-purple-600">£{compoundResults.totalGains}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-bold text-blue-900 mb-3">Monthly Breakdown (Last 6 Months)</h4>
                      <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Month</th>
                              <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Balance</th>
                              <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Gain</th>
                            </tr>
                          </thead>
                          <tbody>
                            {compoundResults.monthlyData.map((month) => (
                              <tr key={month.month} className="border-t border-gray-200">
                                <td className="px-4 py-2 text-sm text-gray-700">Month {month.month}</td>
                                <td className="px-4 py-2 text-sm text-right font-medium text-gray-900">£{month.balance}</td>
                                <td className="px-4 py-2 text-sm text-right font-medium text-green-600">£{month.totalGains}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pip Value Calculator */}
          {selectedCalculator === 'pip-value' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Pip Value Calculator
                </h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Calculate the value of a pip for different instruments and lot sizes
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calculator Inputs */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Instrument Parameters</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Instrument
                        </label>
                        <select
                          value={pipValueInputs.instrument}
                          onChange={(e) => setPipValueInputs({...pipValueInputs, instrument: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          {instrumentOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Lot Size
                        </label>
                        <select
                          value={pipValueInputs.lotSize}
                          onChange={(e) => setPipValueInputs({...pipValueInputs, lotSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          {lotSizeOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Account Currency
                        </label>
                        <select
                          value={pipValueInputs.accountCurrency}
                          onChange={(e) => setPipValueInputs({...pipValueInputs, accountCurrency: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          {currencyOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                      
                      <Button 
                        variant="secondary" 
                        onClick={handlePipValueCalculate}
                        className="mt-4"
                      >
                        Calculate Pip Value
                      </Button>
                    </div>
                  </div>
                  
                  {/* Calculator Results */}
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                    
                    {pipValueResults ? (
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Instrument</div>
                          <div className="text-xl font-bold text-blue-900">{pipValueResults.instrument}</div>
                          <div className="text-sm text-gray-600 mt-1">{pipValueResults.description}</div>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Pip Value ({pipValueResults.accountCurrency})</div>
                          <div className="text-2xl font-bold text-green-600">{pipValueResults.accountCurrency} {pipValueResults.pipValue}</div>
                          <div className="text-sm text-gray-600 mt-1">
                            {pipValueResults.type === 'forex' 
                              ? `Per standard lot (100,000 units) per pip (${pipValueResults.pipSize})`
                              : `Per contract per tick (${pipValueResults.pipSize})`}
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-sm text-gray-600">Pip Values for Different Lot Sizes</div>
                          <div className="mt-2 space-y-2">
                            {pipValueResults.lotSizes.map((lot, index) => (
                              <div key={index} className="flex justify-between">
                                <span className="text-gray-700">{lot.size}</span>
                                <span className="font-medium text-purple-700">{pipValueResults.accountCurrency} {lot.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-yellow-50 p-6 rounded-lg text-center">
                        <p className="text-yellow-800">
                          Select an instrument and click "Calculate Pip Value" to see results.
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-start">
                        <ArrowUpDown className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <div className="text-sm text-yellow-800">
                          <strong>Note:</strong> Pip values vary by instrument. For forex, a pip is typically the 4th decimal place (0.0001). For futures, it's the minimum price movement (tick).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How to Use These Calculators
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Learn how to effectively use these calculators to improve your trading
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Position Size Calculator</h3>
                  <p className="text-gray-700 mb-3">
                    The Position Size Calculator helps you determine the appropriate position size based on your risk tolerance. 
                    Enter your account size, risk percentage, entry price, and stop loss price to calculate the optimal position size.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Example:</strong> With a £10,000 account, risking 2% (£200) on a trade with a 50 pip stop loss, 
                      you should trade 0.4 lots to maintain proper risk management.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Profit/Loss Calculator</h3>
                  <p className="text-gray-700 mb-3">
                    The Profit/Loss Calculator helps you determine potential profits or losses before entering a trade. 
                    Enter your entry price, exit price, lot size, and trade type to calculate the expected outcome.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Example:</strong> Buying 1 lot of EUR/USD at 1.1000 and selling at 1.1050 would result in a 
                      profit of £500 (50 pips × £10 per pip).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Risk/Reward Calculator</h3>
                  <p className="text-gray-700 mb-3">
                    The Risk/Reward Calculator helps you assess the potential risk and reward of a trade. 
                    Enter your entry price, stop loss, take profit, and lot size to calculate the risk-to-reward ratio.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Example:</strong> With an entry at 1.1000, stop loss at 1.0950, and take profit at 1.1100, 
                      your risk-to-reward ratio is 1:2, meaning you're risking £1 to potentially make £2.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Margin Calculator</h3>
                  <p className="text-gray-700 mb-3">
                    The Margin Calculator helps you determine the required margin for a trade. 
                    Enter your lot size, leverage, instrument price, and contract size to calculate the margin requirements.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Example:</strong> Trading 1 lot of EUR/USD at 1.1000 with 100:1 leverage requires 
                      a margin of £1,100 (£110,000 ÷ 100).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Compound Interest Calculator</h3>
                  <p className="text-gray-700 mb-3">
                    The Compound Interest Calculator helps you project account growth over time. 
                    Enter your initial amount, monthly return percentage, time period, and monthly deposits to see potential growth.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Example:</strong> Starting with £10,000 and earning 5% monthly returns for 12 months 
                      would result in a final balance of £17,958.56.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Pip Value Calculator</h3>
                  <p className="text-gray-700 mb-3">
                    The Pip Value Calculator helps you determine the monetary value of a pip for different instruments. 
                    Select your instrument, lot size, and account currency to calculate pip values.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Example:</strong> For EUR/USD with a standard lot (100,000 units), each pip is worth approximately £10 
                      when your account is in GBP. For futures like MGC (Micro Gold), each tick is worth £1.0 per contract.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Apply These Calculations?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join our comprehensive trading courses to learn how to use these calculators effectively in real market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View Trading Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingCalculators;