import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, BarChart3, RefreshCw } from 'lucide-react';
import Button from '../components/ui/Button';

const TradingCalculators = () => {
  // Position Size Calculator
  const [positionSize, setPositionSize] = useState({
    accountSize: 10000,
    riskPercentage: 2,
    entryPrice: 1.1000,
    stopLoss: 1.0950
  });

  // Profit/Loss Calculator
  const [profitLoss, setProfitLoss] = useState({
    entryPrice: 1.1000,
    exitPrice: 1.1050,
    positionSize: 100000,
    direction: 'long'
  });

  // Risk/Reward Calculator
  const [riskReward, setRiskReward] = useState({
    entryPrice: 1.1000,
    stopLoss: 1.0950,
    takeProfit: 1.1100,
    direction: 'long'
  });

  // Pip Value Calculator
  const [pipValue, setPipValue] = useState({
    symbol: 'EUR/USD',
    lotSize: 1,
    accountCurrency: 'USD'
  });

  // Compound Interest Calculator
  const [compound, setCompound] = useState({
    initialCapital: 10000,
    monthlyReturn: 5,
    additionalMonthly: 500,
    years: 5
  });

  // Pip Value Calculator Data
  const [pipValueData, setPipValueData] = useState({
    pipValue: 0,
    pipValueInAccountCurrency: 0
  });

  // Symbols for Pip Value Calculator
  const symbols = [
    { value: 'EUR/USD', label: 'EUR/USD', pipValue: 10 },
    { value: 'GBP/USD', label: 'GBP/USD', pipValue: 10 },
    { value: 'USD/JPY', label: 'USD/JPY', pipValue: 9.30 },
    { value: 'AUD/USD', label: 'AUD/USD', pipValue: 10 },
    { value: 'USD/CAD', label: 'USD/CAD', pipValue: 7.60 },
    { value: 'NZD/USD', label: 'NZD/USD', pipValue: 10 },
    { value: 'USD/CHF', label: 'USD/CHF', pipValue: 10.20 },
    { value: 'EUR/GBP', label: 'EUR/GBP', pipValue: 12.50 },
    { value: 'MGC', label: 'Gold Mini (MGC)', pipValue: 10 },
    { value: 'MNQ', label: 'Micro Nasdaq (MNQ)', pipValue: 0.50 },
    { value: 'MCL', label: 'Micro Crude Oil (MCL)', pipValue: 10 }
  ];

  // Calculate Position Size
  const calculatePositionSize = () => {
    const { accountSize, riskPercentage, entryPrice, stopLoss } = positionSize;
    const riskAmount = (accountSize * riskPercentage) / 100;
    const pipValue = Math.abs(entryPrice - stopLoss) * 10000; // Convert to pips
    const positionSizeValue = riskAmount / (pipValue * 0.0001);
    
    return {
      riskAmount: riskAmount.toFixed(2),
      pips: pipValue.toFixed(1),
      positionSize: positionSizeValue.toFixed(0),
      lotSize: (positionSizeValue / 100000).toFixed(2)
    };
  };

  // Calculate Profit/Loss
  const calculateProfitLoss = () => {
    const { entryPrice, exitPrice, positionSize, direction } = profitLoss;
    const priceDifference = direction === 'long' ? exitPrice - entryPrice : entryPrice - exitPrice;
    const pipDifference = priceDifference * 10000; // Convert to pips
    const profit = (pipDifference * positionSize * 0.0001).toFixed(2);
    const profitPercentage = ((parseFloat(profit) / 10000) * 100).toFixed(2);
    
    return {
      pips: pipDifference.toFixed(1),
      profit,
      profitPercentage
    };
  };

  // Calculate Risk/Reward
  const calculateRiskReward = () => {
    const { entryPrice, stopLoss, takeProfit, direction } = riskReward;
    
    const risk = direction === 'long' 
      ? entryPrice - stopLoss 
      : stopLoss - entryPrice;
    
    const reward = direction === 'long'
      ? takeProfit - entryPrice
      : entryPrice - takeProfit;
    
    const riskPips = Math.abs(risk * 10000);
    const rewardPips = Math.abs(reward * 10000);
    const ratio = (rewardPips / riskPips).toFixed(2);
    
    return {
      riskPips: riskPips.toFixed(1),
      rewardPips: rewardPips.toFixed(1),
      ratio
    };
  };

  // Calculate Pip Value
  const calculatePipValue = () => {
    const { symbol, lotSize, accountCurrency } = pipValue;
    
    // Find the selected symbol
    const selectedSymbol = symbols.find(s => s.value === symbol);
    
    if (!selectedSymbol) return { pipValue: 0, pipValueInAccountCurrency: 0 };
    
    // Calculate pip value based on lot size
    const basePipValue = selectedSymbol.pipValue;
    const calculatedPipValue = basePipValue * lotSize;
    
    // For simplicity, we're assuming account currency is USD
    // In a real app, you would have conversion rates
    const pipValueInAccountCurrency = calculatedPipValue;
    
    return {
      pipValue: calculatedPipValue.toFixed(2),
      pipValueInAccountCurrency: pipValueInAccountCurrency.toFixed(2)
    };
  };

  // Calculate Compound Interest
  const calculateCompound = () => {
    const { initialCapital, monthlyReturn, additionalMonthly, years } = compound;
    
    let balance = initialCapital;
    const monthlyRate = monthlyReturn / 100;
    const months = years * 12;
    const monthlyData = [];
    
    for (let i = 1; i <= months; i++) {
      balance = balance * (1 + monthlyRate) + additionalMonthly;
      
      if (i % 12 === 0) {
        monthlyData.push({
          year: i / 12,
          balance: balance.toFixed(2)
        });
      }
    }
    
    const totalContributions = initialCapital + (additionalMonthly * months);
    const totalGrowth = balance - totalContributions;
    
    return {
      finalBalance: balance.toFixed(2),
      totalContributions: totalContributions.toFixed(2),
      totalGrowth: totalGrowth.toFixed(2),
      monthlyData
    };
  };

  // Handle Pip Value Calculator
  useEffect(() => {
    const result = calculatePipValue();
    setPipValueData(result);
  }, [pipValue]);

  // Handle Pip Value Calculator Symbol Change
  const handlePipValueSymbolChange = (e) => {
    setPipValue({
      ...pipValue,
      symbol: e.target.value
    });
  };

  // Handle Pip Value Calculate Button
  const handleCalculatePipValue = () => {
    const result = calculatePipValue();
    setPipValueData(result);
  };

  // Position Size Calculator Results
  const positionSizeResults = calculatePositionSize();
  
  // Profit/Loss Calculator Results
  const profitLossResults = calculateProfitLoss();
  
  // Risk/Reward Calculator Results
  const riskRewardResults = calculateRiskReward();
  
  // Compound Interest Calculator Results
  const compoundResults = calculateCompound();

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Calculators - Gary Robinson Trading</title>
      <meta name="description" content="Professional trading calculators for position sizing, profit/loss calculation, risk/reward analysis, pip value, and compound interest. Essential tools for serious traders." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading Calculators
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional-grade calculators to optimize your trading decisions and risk management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Calculator className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-yellow-500 mb-2">Position Size</div>
              <p className="text-gray-200 text-sm">Calculate optimal position sizes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <DollarSign className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-yellow-500 mb-2">Profit/Loss</div>
              <p className="text-gray-200 text-sm">Determine potential outcomes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Percent className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-yellow-500 mb-2">Risk/Reward</div>
              <p className="text-gray-200 text-sm">Analyze trade efficiency</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <TrendingUp className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-yellow-500 mb-2">Pip Value</div>
              <p className="text-gray-200 text-sm">Calculate pip monetary value</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BarChart3 className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-lg font-bold text-yellow-500 mb-2">Compound</div>
              <p className="text-gray-200 text-sm">Project account growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Position Size Calculator */}
      <section id="position-size" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Position Size Calculator
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Calculate the optimal position size based on your risk tolerance and account size
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Trade Parameters</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Size ($)
                      </label>
                      <input
                        type="number"
                        value={positionSize.accountSize}
                        onChange={(e) => setPositionSize({...positionSize, accountSize: parseFloat(e.target.value)})}
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
                        value={positionSize.riskPercentage}
                        onChange={(e) => setPositionSize({...positionSize, riskPercentage: parseFloat(e.target.value)})}
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
                        value={positionSize.entryPrice}
                        onChange={(e) => setPositionSize({...positionSize, entryPrice: parseFloat(e.target.value)})}
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
                        value={positionSize.stopLoss}
                        onChange={(e) => setPositionSize({...positionSize, stopLoss: parseFloat(e.target.value)})}
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
                      <div className="text-2xl font-bold text-red-600">${positionSizeResults.riskAmount}</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Distance to Stop Loss</div>
                      <div className="text-2xl font-bold text-blue-600">{positionSizeResults.pips} pips</div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profit/Loss Calculator */}
      <section id="profit-loss" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Profit/Loss Calculator
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Calculate potential profit or loss for your trades before execution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
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
                        value={profitLoss.entryPrice}
                        onChange={(e) => setProfitLoss({...profitLoss, entryPrice: parseFloat(e.target.value)})}
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
                        value={profitLoss.exitPrice}
                        onChange={(e) => setProfitLoss({...profitLoss, exitPrice: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Position Size (Units)
                      </label>
                      <input
                        type="number"
                        value={profitLoss.positionSize}
                        onChange={(e) => setProfitLoss({...profitLoss, positionSize: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Direction
                      </label>
                      <select
                        value={profitLoss.direction}
                        onChange={(e) => setProfitLoss({...profitLoss, direction: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="long">Long (Buy)</option>
                        <option value="short">Short (Sell)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Calculator Results */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Price Movement</div>
                      <div className="text-2xl font-bold text-blue-600">{profitLossResults.pips} pips</div>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${parseFloat(profitLossResults.profit) >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="text-sm text-gray-600">Profit/Loss</div>
                      <div className={`text-2xl font-bold ${parseFloat(profitLossResults.profit) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${profitLossResults.profit}
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${parseFloat(profitLossResults.profitPercentage) >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="text-sm text-gray-600">Percentage Return</div>
                      <div className={`text-2xl font-bold ${parseFloat(profitLossResults.profitPercentage) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {profitLossResults.profitPercentage}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk/Reward Calculator */}
      <section id="risk-reward" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Risk/Reward Calculator
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Analyze the risk-to-reward ratio of your trades to ensure favorable setups
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
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
                        value={riskReward.entryPrice}
                        onChange={(e) => setRiskReward({...riskReward, entryPrice: parseFloat(e.target.value)})}
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
                        value={riskReward.stopLoss}
                        onChange={(e) => setRiskReward({...riskReward, stopLoss: parseFloat(e.target.value)})}
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
                        value={riskReward.takeProfit}
                        onChange={(e) => setRiskReward({...riskReward, takeProfit: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Direction
                      </label>
                      <select
                        value={riskReward.direction}
                        onChange={(e) => setRiskReward({...riskReward, direction: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="long">Long (Buy)</option>
                        <option value="short">Short (Sell)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Calculator Results */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Risk (Stop Loss)</div>
                      <div className="text-2xl font-bold text-red-600">{riskRewardResults.riskPips} pips</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Reward (Take Profit)</div>
                      <div className="text-2xl font-bold text-green-600">{riskRewardResults.rewardPips} pips</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Risk:Reward Ratio</div>
                      <div className="text-2xl font-bold text-blue-600">1:{riskRewardResults.ratio}</div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Minimum Win Rate Needed</div>
                      <div className="text-2xl font-bold text-yellow-600">
                        {(1 / (1 + parseFloat(riskRewardResults.ratio)) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pip Value Calculator */}
      <section id="pip-value" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Pip Value Calculator
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Calculate the monetary value of a pip for different currency pairs and instruments
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Trade Parameters</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Symbol
                      </label>
                      <select
                        value={pipValue.symbol}
                        onChange={handlePipValueSymbolChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        {symbols.map((symbol) => (
                          <option key={symbol.value} value={symbol.value}>{symbol.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Lot Size
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={pipValue.lotSize}
                        onChange={(e) => setPipValue({...pipValue, lotSize: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Currency
                      </label>
                      <select
                        value={pipValue.accountCurrency}
                        onChange={(e) => setPipValue({...pipValue, accountCurrency: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                        <option value="AUD">AUD</option>
                      </select>
                    </div>
                    
                    <Button 
                      variant="primary"
                      onClick={handleCalculatePipValue}
                      className="mt-2"
                    >
                      <RefreshCw className="mr-2" size={16} />
                      Calculate
                    </Button>
                  </div>
                </div>
                
                {/* Calculator Results */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Pip Value</div>
                      <div className="text-2xl font-bold text-blue-600">${pipValueData.pipValue} per pip</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Pip Value in {pipValue.accountCurrency}</div>
                      <div className="text-2xl font-bold text-green-600">{pipValue.accountCurrency} {pipValueData.pipValueInAccountCurrency} per pip</div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">10 Pips Movement</div>
                      <div className="text-2xl font-bold text-yellow-600">{pipValue.accountCurrency} {(parseFloat(pipValueData.pipValueInAccountCurrency) * 10).toFixed(2)}</div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">100 Pips Movement</div>
                      <div className="text-2xl font-bold text-purple-600">{pipValue.accountCurrency} {(parseFloat(pipValueData.pipValueInAccountCurrency) * 100).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pip Value Table */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Pip Value Reference Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Symbol</th>
                        <th className="border border-gray-300 px-4 py-2 text-right">Standard Lot (1.0)</th>
                        <th className="border border-gray-300 px-4 py-2 text-right">Mini Lot (0.1)</th>
                        <th className="border border-gray-300 px-4 py-2 text-right">Micro Lot (0.01)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {symbols.map((symbol) => (
                        <tr key={symbol.value} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">{symbol.label}</td>
                          <td className="border border-gray-300 px-4 py-2 text-right">${(symbol.pipValue * 1).toFixed(2)}</td>
                          <td className="border border-gray-300 px-4 py-2 text-right">${(symbol.pipValue * 0.1).toFixed(2)}</td>
                          <td className="border border-gray-300 px-4 py-2 text-right">${(symbol.pipValue * 0.01).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compound Interest Calculator */}
      <section id="compound" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Compound Interest Calculator
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Project your account growth over time with compound interest and regular contributions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Growth Parameters</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Initial Capital ($)
                      </label>
                      <input
                        type="number"
                        value={compound.initialCapital}
                        onChange={(e) => setCompound({...compound, initialCapital: parseFloat(e.target.value)})}
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
                        value={compound.monthlyReturn}
                        onChange={(e) => setCompound({...compound, monthlyReturn: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Monthly Deposit ($)
                      </label>
                      <input
                        type="number"
                        value={compound.additionalMonthly}
                        onChange={(e) => setCompound({...compound, additionalMonthly: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Time Period (Years)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={compound.years}
                        onChange={(e) => setCompound({...compound, years: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Calculator Results */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Final Balance</div>
                      <div className="text-2xl font-bold text-green-600">${compoundResults.finalBalance}</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Total Contributions</div>
                      <div className="text-2xl font-bold text-blue-600">${compoundResults.totalContributions}</div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Total Growth</div>
                      <div className="text-2xl font-bold text-purple-600">${compoundResults.totalGrowth}</div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Annual Breakdown</div>
                      <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
                        {compoundResults.monthlyData.map((data, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>Year {data.year}:</span>
                            <span className="font-medium">${data.balance}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
              Ready to Apply These Tools to Your Trading?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join our comprehensive trading courses to learn how to use these calculators effectively as part of a complete trading strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = '/courses'}
              >
                View Trading Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                onClick={() => window.location.href = '/contact'}
              >
                Get Personalized Help
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingCalculators;