import { useState, useEffect } from 'react';
import { TradeSignal, MarketMetrics } from '../types/crypto';

export const useCryptoEngine = () => {
  const [signals, setSignals] = useState<TradeSignal[]>([]);
  const [metrics, setMetrics] = useState<MarketMetrics>({
    btcDominance: 52.4,
    marketSentiment: 'Bullish',
    correlationIndex: 0.85,
    activeIndicators: ['RSI', 'EMA 200', 'Bollinger Bands'],
    optimizedOut: ['MACD (Low Accuracy)'],
  });

  // محاكاة جلب البيانات وتحليل 50 زوجاً من OKX
  useEffect(() => {
    const generateSignals = () => {
      const pairs = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'AVAX/USDT', 'LINK/USDT'];
      const newSignal: TradeSignal = {
        id: Math.random().toString(36).substr(2, 9),
        pair: pairs[Math.floor(Math.random() * pairs.length)],
        type: Math.random() > 0.5 ? 'LONG' : 'SHORT',
        entry1: 65200.50,
        entry2: 64800.00,
        targets: [66500, 67200, 68500],
        stopLoss: 63500,
        successRate: Math.floor(Math.random() * (95 - 75 + 1) + 75),
        reasoning: [
          'تقاطع ذهبي على فريم 15 دقيقة',
          'زيادة حجم التداول بنسبة 15%',
          'تحليل مشاعر إيجابي من CryptoPanic'
        ],
        timestamp: new Date().toLocaleTimeString(),
        status: 'active'
      };

      setSignals(prev => [newSignal, ...prev].slice(0, 10));
    };

    const interval = setInterval(generateSignals, 10000); // تحديث كل 10 ثوانٍ
    return () => clearInterval(interval);
  }, []);

  return { signals, metrics };
};