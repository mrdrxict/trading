import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, Download, BarChart3, Target, PieChart } from 'lucide-react';
import Button from '../components/ui/Button';

const TradingCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState('position-size');
  
  // Position Size Calculator State
  const [positionSizeData, setPositionSizeData] = useState({
    accountSize: 10000,
    riskPercentage: 2,
    entryPrice: 1.1000,
    stopLoss: 1.0950,
    accountCurrency: 'GBP',
    tradingPair: 'EUR/USD'
  });

  // Profit/Loss Calculator State
  const [profitLossData, setProfitLossData] = useState({
    entryPrice: 1.1000,
    exitPrice: 1.1050,
    positionSize: 100000,
    positionType: 'long',
    tradingPair: 'EUR/USD'
  });

  // Risk/Reward Calculator State
  const [riskRewardData, setRiskRewardData] = useState({
    entryPrice: 1.1000,
    stopLoss: 1.0950,
    takeProfit: 1.1100,
    winRate: 60
  });

  // Margin Calculator State
  const [marginData, setMarginData] = useState({
    positionSize: 100000,
    leverage: 100,
    basePrice: 1.1000,
    marginCurrency: 'GBP'
  });

  // Compound Interest Calculator State
  const [compoundData, setCompoundData] = useState({
    initialCapital: 10000,
    monthlyReturn: 5,
    monthlyDeposit: 500,
    timeHorizon: 24
  });

  // Pip Value Calculator State
  const [pipValueData, setPipValueData] = useState({
    instrument: 'EUR/USD',
    lotSize: 1,
    accountCurrency: 'GBP',
    customInstrument: '',
    customRate: 1,
    instrumentType: 'forex'
  });

  const calculatorTypes = [
    {
      id: 'position-size',
      name: 'Position Size Calculator',
      icon: <Calculator className="text-blue-900" size={24} />,
      description: 'Calculate optimal position size based on risk management'
    },
    {
      id: 'profit-loss',
      name: 'Profit/Loss Calculator',
      icon: <DollarSign className="text-blue-900" size={24} />,
      description: 'Calculate potential profits and losses for trades'
    },
    {
      id: 'risk-reward',
      name: 'Risk/Reward Calculator',
      icon: <Target className="text-blue-900" size={24} />,
      description: 'Analyze risk-to-reward ratios and probability'
    },
    {
      id: 'margin',
      name: 'Margin Calculator',
      icon: <BarChart3 className="text-blue-900" size={24} />,
      description: 'Calculate required margin for leveraged positions'
    },
    {
      id: 'compound',
      name: 'Compound Interest Calculator',
      icon: <TrendingUp className="text-blue-900" size={24} />,
      description: 'Project long-term growth with compound returns'
    },
    {
      id: 'pip-value',
      name: 'Pip Value Calculator',
      icon: <Percent className="text-blue-900" size={24} />,
      description: 'Calculate pip values for different instruments'
    }
  ];

  // Position Size Calculations
  const calculatePositionSize = () => {
    const { accountSize, riskPercentage, entryPrice, stopLoss } = positionSizeData;
    const riskAmount = (accountSize * riskPercentage) / 100;
    const pipValue = Math.abs(entryPrice - stopLoss);
    const positionSize = riskAmount / pipValue;
    const lotSize = positionSize / 100000;
    
    return {
      riskAmount: riskAmount.toFixed(2),
      pipValue: pipValue.toFixed(4),
      positionSize: positionSize.toFixed(0),
      lotSize: lotSize.toFixed(2),
      pipsAtRisk: Math.abs((entryPrice - stopLoss) * 10000).toFixed(1)
    };
  };

  // Profit/Loss Calculations
  const calculateProfitLoss = () => {
    const { entryPrice, exitPrice, positionSize, positionType } = profitLossData;
    const priceDifference = positionType === 'long' ? 
      (exitPrice - entryPrice) : (entryPrice - exitPrice);
    const profitLoss = priceDifference * positionSize;
    const pips = Math.abs(priceDifference * 10000);
    const returnPercentage = (priceDifference / entryPrice) * 100;
    
    return {
      profitLoss: profitLoss.toFixed(2),
      pips: pips.toFixed(1),
      returnPercentage: returnPercentage.toFixed(2),
      isProfit: profitLoss > 0
    };
  };

  // Risk/Reward Calculations
  const calculateRiskReward = () => {
    const { entryPrice, stopLoss, takeProfit, winRate } = riskRewardData;
    const risk = Math.abs(entryPrice - stopLoss);
    const reward = Math.abs(takeProfit - entryPrice);
    const riskRewardRatio = reward / risk;
    const breakEvenRate = (1 / (1 + riskRewardRatio)) * 100;
    const expectedValue = (winRate / 100) * reward - ((100 - winRate) / 100) * risk;
    
    return {
      risk: risk.toFixed(4),
      reward: reward.toFixed(4),
      riskRewardRatio: riskRewardRatio.toFixed(2),
      breakEvenRate: breakEvenRate.toFixed(1),
      expectedValue: expectedValue.toFixed(4),
      isProfitable: expectedValue > 0
    };
  };

  // Margin Calculations
  const calculateMargin = () => {
    const { positionSize, leverage, basePrice } = marginData;
    const notionalValue = positionSize * basePrice;
    const requiredMargin = notionalValue / leverage;
    const marginPercentage = (1 / leverage) * 100;
    
    return {
      notionalValue: notionalValue.toFixed(2),
      requiredMargin: requiredMargin.toFixed(2),
      marginPercentage: marginPercentage.toFixed(2),
      leverage: leverage
    };
  };

  // Compound Interest Calculations
  const calculateCompoundGrowth = () => {
    const { initialCapital, monthlyReturn, monthlyDeposit, timeHorizon } = compoundData;
    let balance = initialCapital;
    const monthlyGrowthRate = monthlyReturn / 100;
    const projections = [];
    
    for (let month = 1; month <= timeHorizon; month++) {
      balance = (balance + monthlyDeposit) * (1 + monthlyGrowthRate);
      projections.push({
        month,
        balance: balance.toFixed(2),
        totalDeposits: (initialCapital + (monthlyDeposit * month)).toFixed(2),
        totalGrowth: (balance - initialCapital - (monthlyDeposit * month)).toFixed(2)
      });
    }
    
    const finalBalance = balance;
    const totalDeposits = initialCapital + (monthlyDeposit * timeHorizon);
    const totalGrowth = finalBalance - totalDeposits;
    const totalReturn = ((finalBalance - totalDeposits) / totalDeposits) * 100;
    
    return {
      finalBalance: finalBalance.toFixed(2),
      totalDeposits: totalDeposits.toFixed(2),
      totalGrowth: totalGrowth.toFixed(2),
      totalReturn: totalReturn.toFixed(1),
      projections: projections.slice(-12) // Show last 12 months
    };
  };

  // Pip Value Calculations
  const calculatePipValue = () => {
    const { instrument, lotSize, accountCurrency, customInstrument, customRate, instrumentType } = pipValueData;
    
    // Standard lot size in units
    const standardLotUnits = 100000;
    const microLotUnits = 1000;
    
    // Convert lot size to units
    const positionSizeUnits = lotSize * standardLotUnits;
    
    let pipValue = 0;
    let pipSize = 0.0001; // Default pip size for most forex pairs
    let conversionRate = 1; // Default conversion rate
    let instrumentDisplay = instrument;
    
    // Determine pip size and conversion rate based on instrument type and selection
    if (instrumentType === 'forex') {
      // Handle forex pairs
      if (instrument === 'USD/JPY' || instrument === 'GBP/JPY' || instrument === 'EUR/JPY') {
        pipSize = 0.01; // JPY pairs have different pip size
      }
      
      // Determine conversion rate to account currency
      if (instrument.endsWith('/USD') || instrument === 'XAU/USD' || instrument === 'XAG/USD') {
        // Direct quote to USD
        conversionRate = accountCurrency === 'USD' ? 1 : (accountCurrency === 'GBP' ? 1.27 : 1.08); // Approximate GBP/USD and EUR/USD rates
      } else if (instrument.startsWith('USD/')) {
        // Indirect quote from USD
        const rate = instrument === 'USD/JPY' ? 150 : (instrument === 'USD/CAD' ? 1.35 : 1.08);
        conversionRate = accountCurrency === 'USD' ? (1 / rate) : 
                        (accountCurrency === 'GBP' ? (1.27 / rate) : (1.08 / rate));
      } else {
        // Cross rates
        if (accountCurrency === 'USD') {
          conversionRate = instrument.startsWith('EUR/') ? 1.08 : (instrument.startsWith('GBP/') ? 1.27 : 1);
        } else if (accountCurrency === 'GBP') {
          conversionRate = 1;
        } else if (accountCurrency === 'EUR') {
          conversionRate = 0.85;
        }
      }
    } else if (instrumentType === 'futures') {
      // Handle futures contracts
      instrumentDisplay = instrument;
      
      switch(instrument) {
        case 'MGC': // Micro Gold
          pipSize = 0.10; // $0.10 per tick
          conversionRate = accountCurrency === 'USD' ? 1 : (accountCurrency === 'GBP' ? 1.27 : 1.08);
          break;
        case 'MNQ': // Micro Nasdaq
          pipSize = 0.50; // $0.50 per tick
          conversionRate = accountCurrency === 'USD' ? 1 : (accountCurrency === 'GBP' ? 1.27 : 1.08);
          break;
        case 'MCL': // Micro Crude Oil
          pipSize = 0.01; // $0.01 per tick
          conversionRate = accountCurrency === 'USD' ? 1 : (accountCurrency === 'GBP' ? 1.27 : 1.08);
          break;
        case 'M6E': // Micro Euro
          pipSize = 0.0001; // $0.0001 per tick
          conversionRate = accountCurrency === 'USD' ? 1 : (accountCurrency === 'GBP' ? 1.27 : 1.08);
          break;
        case 'MES': // Micro E-mini S&P 500
          pipSize = 0.25; // $0.25 per tick
          conversionRate = accountCurrency === 'USD' ? 1 : (accountCurrency === 'GBP' ? 1.27 : 1.08);
          break;
        default:
          pipSize = 0.01;
          conversionRate = 1;
      }
    } else if (instrumentType === 'custom') {
      // Handle custom instrument
      instrumentDisplay = customInstrument || 'Custom';
      pipSize = 0.0001;
      conversionRate = customRate;
    }
    
    // Calculate pip value
    if (instrumentType === 'futures') {
      // For futures, pip value is fixed per contract
      pipValue = pipSize * lotSize * conversionRate;
    } else {
      // For forex, pip value depends on position size and pair
      pipValue = (positionSizeUnits * pipSize) * conversionRate;
    }
    
    // Calculate values for different lot sizes
    const microLotValue = (pipValue / lotSize) * (microLotUnits / standardLotUnits);
    const miniLotValue = microLotValue * 10;
    const standardLotValue = miniLotValue * 10;
    
    return {
      pipValue: pipValue.toFixed(2),
      pipSize: pipSize,
      microLotValue: microLotValue.toFixed(2),
      miniLotValue: miniLotValue.toFixed(2),
      standardLotValue: standardLotValue.toFixed(2),
      instrumentDisplay: instrumentDisplay,
      accountCurrency: accountCurrency
    };
  };

  const positionResults = calculatePositionSize();
  const profitLossResults = calculateProfitLoss();
  const riskRewardResults = calculateRiskReward();
  const marginResults = calculateMargin();
  const compoundResults = calculateCompoundGrowth();
  const pipValueResults = calculatePipValue();

  const exportResults = (calculatorType) => {
    let data = {};
    switch(calculatorType) {
      case 'position-size':
        data = { ...positionSizeData, ...positionResults };
        break;
      case 'profit-loss':
        data = { ...profitLossData, ...profitLossResults };
        break;
      case 'risk-reward':
        data = { ...riskRewardData, ...riskRewardResults };
        break;
      case 'margin':
        data = { ...marginData, ...marginResults };
        break;
      case 'compound':
        data = { ...compoundData, ...compoundResults };
        break;
      case 'pip-value':
        data = { ...pipValueData, ...pipValueResults };
        break;
    }
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${calculatorType}-results.json`;
    link.click();
  };

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Calculators - Gary Robinson Trading</title>
      <meta name="description" content="Professional trading calculators for position sizing, profit/loss, risk/reward, margin, and compound interest calculations. Free tools for forex, futures, and crypto trading." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Trading Calculators
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Essential calculation tools for professional trading with accurate results and export functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Calculator className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">6</div>
              <p className="text-gray-200">Professional Tools</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <DollarSign className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Free</div>
              <p className="text-gray-200">Always Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BarChart3 className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Real-time</div>
              <p className="text-gray-200">Instant Results</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Download className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Export</div>
              <p className="text-gray-200">Save Results</p>
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
            {calculatorTypes.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeCalculator === calc.id
                    ? 'bg-blue-900 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg mr-3 ${
                    activeCalculator === calc.id ? 'bg-yellow-500' : 'bg-blue-100'
                  }`}>
                    {calc.icon}
                  </div>
                  <h3 className="font-bold">{calc.name}</h3>
                </div>
                <p className={`text-sm ${
                  activeCalculator === calc.id ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {calc.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Position Size Calculator */}
            {activeCalculator === 'position-size' && (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">Position Size Calculator</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => exportResults('position-size')}
                  >
                    <Download className="mr-2" size={16} />
                    Export Results
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Input Parameters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Account Size (£)
                        </label>
                        <input
                          type="number"
                          value={positionSizeData.accountSize}
                          onChange={(e) => setPositionSizeData({...positionSizeData, accountSize: parseFloat(e.target.value)})}
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
                          value={positionSizeData.riskPercentage}
                          onChange={(e) => setPositionSizeData({...positionSizeData, riskPercentage: parseFloat(e.target.value)})}
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
                          value={positionSizeData.entryPrice}
                          onChange={(e) => setPositionSizeData({...positionSizeData, entryPrice: parseFloat(e.target.value)})}
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
                          value={positionSizeData.stopLoss}
                          onChange={(e) => setPositionSizeData({...positionSizeData, stopLoss: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Calculation Results</h3>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Risk Amount</div>
                        <div className="text-2xl font-bold text-red-600">£{positionResults.riskAmount}</div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Pips at Risk</div>
                        <div className="text-2xl font-bold text-blue-600">{positionResults.pipsAtRisk}</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Position Size (Units)</div>
                        <div className="text-2xl font-bold text-green-600">{positionResults.positionSize}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Lot Size</div>
                        <div className="text-2xl font-bold text-purple-600">{positionResults.lotSize}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profit/Loss Calculator */}
            {activeCalculator === 'profit-loss' && (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">Profit/Loss Calculator</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => exportResults('profit-loss')}
                  >
                    <Download className="mr-2" size={16} />
                    Export Results
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Trade Parameters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Entry Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={profitLossData.entryPrice}
                          onChange={(e) => setProfitLossData({...profitLossData, entryPrice: parseFloat(e.target.value)})}
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
                          value={profitLossData.exitPrice}
                          onChange={(e) => setProfitLossData({...profitLossData, exitPrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Position Size (Units)
                        </label>
                        <input
                          type="number"
                          value={profitLossData.positionSize}
                          onChange={(e) => setProfitLossData({...profitLossData, positionSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Position Type
                        </label>
                        <select
                          value={profitLossData.positionType}
                          onChange={(e) => setProfitLossData({...profitLossData, positionType: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          <option value="long">Long (Buy)</option>
                          <option value="short">Short (Sell)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Results</h3>
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg ${profitLossResults.isProfit ? 'bg-green-50' : 'bg-red-50'}`}>
                        <div className="text-sm text-gray-600">Profit/Loss</div>
                        <div className={`text-2xl font-bold ${profitLossResults.isProfit ? 'text-green-600' : 'text-red-600'}`}>
                          £{profitLossResults.profitLoss}
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Pips Gained/Lost</div>
                        <div className="text-2xl font-bold text-blue-600">{profitLossResults.pips}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Return Percentage</div>
                        <div className={`text-2xl font-bold ${profitLossResults.isProfit ? 'text-green-600' : 'text-red-600'}`}>
                          {profitLossResults.returnPercentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Risk/Reward Calculator */}
            {activeCalculator === 'risk-reward' && (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">Risk/Reward Calculator</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => exportResults('risk-reward')}
                  >
                    <Download className="mr-2" size={16} />
                    Export Results
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Trade Setup</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Entry Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={riskRewardData.entryPrice}
                          onChange={(e) => setRiskRewardData({...riskRewardData, entryPrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Stop Loss
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={riskRewardData.stopLoss}
                          onChange={(e) => setRiskRewardData({...riskRewardData, stopLoss: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Take Profit
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={riskRewardData.takeProfit}
                          onChange={(e) => setRiskRewardData({...riskRewardData, takeProfit: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Win Rate (%)
                        </label>
                        <input
                          type="number"
                          value={riskRewardData.winRate}
                          onChange={(e) => setRiskRewardData({...riskRewardData, winRate: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Analysis</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Risk:Reward Ratio</div>
                        <div className="text-2xl font-bold text-blue-600">1:{riskRewardResults.riskRewardRatio}</div>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Break-even Win Rate</div>
                        <div className="text-2xl font-bold text-yellow-600">{riskRewardResults.breakEvenRate}%</div>
                      </div>
                      
                      <div className={`p-4 rounded-lg ${riskRewardResults.isProfitable ? 'bg-green-50' : 'bg-red-50'}`}>
                        <div className="text-sm text-gray-600">Expected Value</div>
                        <div className={`text-2xl font-bold ${riskRewardResults.isProfitable ? 'text-green-600' : 'text-red-600'}`}>
                          {riskRewardResults.expectedValue}
                        </div>
                      </div>
                      
                      <div className={`p-4 rounded-lg ${riskRewardResults.isProfitable ? 'bg-green-100' : 'bg-red-100'}`}>
                        <div className="text-sm font-semibold">
                          {riskRewardResults.isProfitable ? '✅ Profitable Strategy' : '❌ Unprofitable Strategy'}
                        </div>
                        <div className="text-xs mt-1">
                          {riskRewardResults.isProfitable 
                            ? 'This setup has positive expected value'
                            : 'Consider improving win rate or risk:reward ratio'
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Margin Calculator */}
            {activeCalculator === 'margin' && (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">Margin Calculator</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => exportResults('margin')}
                  >
                    <Download className="mr-2" size={16} />
                    Export Results
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Position Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Position Size (Units)
                        </label>
                        <input
                          type="number"
                          value={marginData.positionSize}
                          onChange={(e) => setMarginData({...marginData, positionSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Leverage (1:X)
                        </label>
                        <select
                          value={marginData.leverage}
                          onChange={(e) => setMarginData({...marginData, leverage: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          <option value={10}>1:10</option>
                          <option value={20}>1:20</option>
                          <option value={50}>1:50</option>
                          <option value={100}>1:100</option>
                          <option value={200}>1:200</option>
                          <option value={500}>1:500</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Base Currency Price
                        </label>
                        <input
                          type="number"
                          step="0.0001"
                          value={marginData.basePrice}
                          onChange={(e) => setMarginData({...marginData, basePrice: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Margin Requirements</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Notional Value</div>
                        <div className="text-2xl font-bold text-blue-600">£{marginResults.notionalValue}</div>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Required Margin</div>
                        <div className="text-2xl font-bold text-red-600">£{marginResults.requiredMargin}</div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Margin Percentage</div>
                        <div className="text-2xl font-bold text-purple-600">{marginResults.marginPercentage}%</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Leverage Used</div>
                        <div className="text-2xl font-bold text-green-600">1:{marginResults.leverage}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Compound Interest Calculator */}
            {activeCalculator === 'compound' && (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">Compound Interest Calculator</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => exportResults('compound')}
                  >
                    <Download className="mr-2" size={16} />
                    Export Results
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Investment Parameters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Initial Capital (£)
                        </label>
                        <input
                          type="number"
                          value={compoundData.initialCapital}
                          onChange={(e) => setCompoundData({...compoundData, initialCapital: parseFloat(e.target.value)})}
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
                          value={compoundData.monthlyReturn}
                          onChange={(e) => setCompoundData({...compoundData, monthlyReturn: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Monthly Deposit (£)
                        </label>
                        <input
                          type="number"
                          value={compoundData.monthlyDeposit}
                          onChange={(e) => setCompoundData({...compoundData, monthlyDeposit: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Time Horizon (Months)
                        </label>
                        <input
                          type="number"
                          value={compoundData.timeHorizon}
                          onChange={(e) => setCompoundData({...compoundData, timeHorizon: parseInt(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Projection Results</h3>
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
                        <div className="text-sm text-gray-600">Total Growth</div>
                        <div className="text-2xl font-bold text-purple-600">£{compoundResults.totalGrowth}</div>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Total Return</div>
                        <div className="text-2xl font-bold text-yellow-600">{compoundResults.totalReturn}%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Growth Chart Simulation */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Growth Projection (Last 12 Months)</h3>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {compoundResults.projections.slice(-3).map((projection, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-sm text-gray-600">Month {projection.month}</div>
                          <div className="font-bold text-blue-900">£{projection.balance}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pip Value Calculator */}
            {activeCalculator === 'pip-value' && (
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-blue-900">Pip Value Calculator</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => exportResults('pip-value')}
                  >
                    <Download className="mr-2" size={16} />
                    Export Results
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Instrument Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Instrument Type
                        </label>
                        <select
                          value={pipValueData.instrumentType}
                          onChange={(e) => setPipValueData({...pipValueData, instrumentType: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          <option value="forex">Forex</option>
                          <option value="futures">Futures</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      
                      {pipValueData.instrumentType === 'forex' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Forex Pair
                          </label>
                          <select
                            value={pipValueData.instrument}
                            onChange={(e) => setPipValueData({...pipValueData, instrument: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          >
                            <option value="EUR/USD">EUR/USD</option>
                            <option value="GBP/USD">GBP/USD</option>
                            <option value="USD/JPY">USD/JPY</option>
                            <option value="USD/CHF">USD/CHF</option>
                            <option value="AUD/USD">AUD/USD</option>
                            <option value="USD/CAD">USD/CAD</option>
                            <option value="NZD/USD">NZD/USD</option>
                            <option value="EUR/GBP">EUR/GBP</option>
                            <option value="GBP/JPY">GBP/JPY</option>
                            <option value="EUR/JPY">EUR/JPY</option>
                          </select>
                        </div>
                      )}
                      
                      {pipValueData.instrumentType === 'futures' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Futures Contract
                          </label>
                          <select
                            value={pipValueData.instrument}
                            onChange={(e) => setPipValueData({...pipValueData, instrument: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          >
                            <option value="MGC">MGC (Micro Gold)</option>
                            <option value="MNQ">MNQ (Micro Nasdaq)</option>
                            <option value="MCL">MCL (Micro Crude Oil)</option>
                            <option value="M6E">M6E (Micro Euro)</option>
                            <option value="MES">MES (Micro E-mini S&P 500)</option>
                          </select>
                        </div>
                      )}
                      
                      {pipValueData.instrumentType === 'custom' && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Custom Instrument Name
                            </label>
                            <input
                              type="text"
                              value={pipValueData.customInstrument}
                              onChange={(e) => setPipValueData({...pipValueData, customInstrument: e.target.value})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              placeholder="e.g., XAU/USD"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Conversion Rate to Account Currency
                            </label>
                            <input
                              type="number"
                              step="0.0001"
                              value={pipValueData.customRate}
                              onChange={(e) => setPipValueData({...pipValueData, customRate: parseFloat(e.target.value)})}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              placeholder="e.g., 1.27 for GBP/USD"
                            />
                          </div>
                        </>
                      )}
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Lot Size
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={pipValueData.lotSize}
                          onChange={(e) => setPipValueData({...pipValueData, lotSize: parseFloat(e.target.value)})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Account Currency
                        </label>
                        <select
                          value={pipValueData.accountCurrency}
                          onChange={(e) => setPipValueData({...pipValueData, accountCurrency: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        >
                          <option value="GBP">GBP (£)</option>
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-6">Pip Value Results</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Instrument</div>
                        <div className="text-2xl font-bold text-blue-600">{pipValueResults.instrumentDisplay}</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Pip Value (Current Lot Size)</div>
                        <div className="text-2xl font-bold text-green-600">
                          {pipValueData.accountCurrency === 'GBP' ? '£' : 
                           pipValueData.accountCurrency === 'USD' ? '$' : '€'}
                          {pipValueResults.pipValue} per pip
                        </div>
                      </div>
                      
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-3">Pip Value by Lot Size</h4>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-white p-3 rounded-lg text-center">
                            <div className="text-sm text-gray-600">Micro Lot (0.01)</div>
                            <div className="font-bold text-blue-900">
                              {pipValueData.accountCurrency === 'GBP' ? '£' : 
                               pipValueData.accountCurrency === 'USD' ? '$' : '€'}
                              {pipValueResults.microLotValue}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg text-center">
                            <div className="text-sm text-gray-600">Mini Lot (0.1)</div>
                            <div className="font-bold text-blue-900">
                              {pipValueData.accountCurrency === 'GBP' ? '£' : 
                               pipValueData.accountCurrency === 'USD' ? '$' : '€'}
                              {pipValueResults.miniLotValue}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-lg text-center">
                            <div className="text-sm text-gray-600">Standard Lot (1.0)</div>
                            <div className="font-bold text-blue-900">
                              {pipValueData.accountCurrency === 'GBP' ? '£' : 
                               pipValueData.accountCurrency === 'USD' ? '$' : '€'}
                              {pipValueResults.standardLotValue}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Pip Size</div>
                        <div className="text-lg font-bold text-yellow-600">
                          {pipValueResults.pipSize} {pipValueData.instrumentType === 'futures' ? 'points per tick' : 'per pip'}
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Account Currency</div>
                        <div className="text-lg font-bold text-purple-600">
                          {pipValueData.accountCurrency === 'GBP' ? 'British Pound (£)' : 
                           pipValueData.accountCurrency === 'USD' ? 'US Dollar ($)' : 'Euro (€)'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Pip Value Information */}
                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Understanding Pip Values</h3>
                  <div className="text-gray-700 text-sm space-y-2">
                    <p>
                      <strong>Forex:</strong> A pip is typically the 4th decimal place in most currency pairs (0.0001) or 2nd decimal place for JPY pairs (0.01).
                    </p>
                    <p>
                      <strong>Futures:</strong> Tick values vary by contract. For example, MNQ has a tick value of $0.50, while MGC has a tick value of $0.10.
                    </p>
                    <p>
                      <strong>Lot Sizes:</strong> Standard lot = 100,000 units, Mini lot = 10,000 units, Micro lot = 1,000 units.
                    </p>
                    <p>
                      <strong>Risk Management:</strong> Understanding pip values is crucial for proper position sizing and risk management.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Calculator Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Why Use Our Calculators?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Calculator className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Professional Accuracy</h3>
              <p className="text-gray-700">Industry-standard calculations used by professional traders and institutions worldwide.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Download className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Export Results</h3>
              <p className="text-gray-700">Save and export your calculations for record keeping and analysis purposes.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <BarChart3 className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Real-time Updates</h3>
              <p className="text-gray-700">Instant calculations as you adjust parameters, helping you make quick trading decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Master Professional Trading Calculations
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Learn how to use these tools effectively in our comprehensive trading courses with expert guidance.
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
                Get Personal Training
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingCalculators;