export interface TradeSignal {
  id: string;
  pair: string;
  type: 'LONG' | 'SHORT';
  entry1: number;
  entry2: number;
  targets: number[];
  stopLoss: number;
  successRate: number;
  reasoning: string[];
  timestamp: string;
  status: 'active' | 'completed' | 'failed';
}

export interface MarketMetrics {
  btcDominance: number;
  marketSentiment: 'Bullish' | 'Bearish' | 'Neutral';
  correlationIndex: number;
  activeIndicators: string[];
  optimizedOut: string[];
}