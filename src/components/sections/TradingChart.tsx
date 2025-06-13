import React, { useEffect, useRef } from 'react';

const TradingChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setDimensions = () => {
      const { width } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = width * 0.6;
    };
    
    setDimensions();
    window.addEventListener('resize', setDimensions);
    
    // Generate random chart data (for demo purposes)
    const generateChartData = (length: number) => {
      const startPrice = 1.1850;
      const volatility = 0.0005;
      const data = [];
      
      let currentPrice = startPrice;
      for (let i = 0; i < length; i++) {
        const change = (Math.random() - 0.5) * volatility;
        currentPrice += change;
        data.push(currentPrice);
      }
      
      return data;
    };
    
    // Draw candlestick chart
    const drawChart = () => {
      if (!ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Generate data
      const dataPoints = 50;
      const prices = generateChartData(dataPoints);
      
      // Find min and max for scaling
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const priceRange = maxPrice - minPrice;
      
      // Calculate candle width
      const candleWidth = width / dataPoints;
      const candleBody = candleWidth * 0.8;
      
      // Draw grid
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      const gridLines = 5;
      for (let i = 0; i <= gridLines; i++) {
        const y = height * (i / gridLines);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        
        // Price labels
        const price = maxPrice - (i / gridLines) * priceRange;
        ctx.fillStyle = '#64748b';
        ctx.font = '10px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(price.toFixed(4), 5, y - 5);
      }
      
      // Draw candlesticks
      for (let i = 0; i < dataPoints; i++) {
        const x = i * candleWidth;
        
        // Generate open, high, low, close for this candle
        const close = prices[i];
        const open = i > 0 ? prices[i - 1] : close - (Math.random() - 0.5) * 0.0003;
        const high = Math.max(open, close) + Math.random() * 0.0002;
        const low = Math.min(open, close) - Math.random() * 0.0002;
        
        // Scale to canvas
        const scaledOpen = height - ((open - minPrice) / priceRange) * height;
        const scaledClose = height - ((close - minPrice) / priceRange) * height;
        const scaledHigh = height - ((high - minPrice) / priceRange) * height;
        const scaledLow = height - ((low - minPrice) / priceRange) * height;
        
        // Determine if bullish or bearish
        const isBullish = close > open;
        ctx.fillStyle = isBullish ? '#10b981' : '#ef4444';
        ctx.strokeStyle = isBullish ? '#10b981' : '#ef4444';
        
        // Draw candle body
        const candleX = x + (candleWidth - candleBody) / 2;
        const bodyTop = isBullish ? scaledClose : scaledOpen;
        const bodyHeight = Math.abs(scaledClose - scaledOpen);
        ctx.fillRect(candleX, bodyTop, candleBody, bodyHeight);
        
        // Draw wicks
        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, scaledHigh);
        ctx.lineTo(x + candleWidth / 2, bodyTop);
        ctx.moveTo(x + candleWidth / 2, bodyTop + bodyHeight);
        ctx.lineTo(x + candleWidth / 2, scaledLow);
        ctx.stroke();
      }
      
      // Add chart title
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('EUR/USD H1', 10, 20);
      
      // Add watermark
      ctx.fillStyle = 'rgba(30, 41, 59, 0.1)';
      ctx.font = 'bold 20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('TradeMaster FX', width / 2, height / 2);
    };
    
    // Initial draw
    drawChart();
    
    // Animate chart (for demo purposes)
    const interval = setInterval(() => {
      drawChart();
    }, 2000);
    
    return () => {
      window.removeEventListener('resize', setDimensions);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full"
      ></canvas>
    </div>
  );
};

export default TradingChart;