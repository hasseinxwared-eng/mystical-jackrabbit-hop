import React from 'react';
import { MarketMetrics } from '../types/crypto';
import { Activity, Zap, BarChart3, ShieldCheck } from 'lucide-react';

export const MarketIntelligence = ({ metrics }: { metrics: MarketMetrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
          <Activity size={16} className="text-blue-500" /> سيطرة البيتكوين (BTC.D)
        </div>
        <div className="text-2xl font-bold text-white">{metrics.btcDominance}%</div>
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
          <Zap size={16} className="text-yellow-500" /> مشاعر السوق
        </div>
        <div className="text-2xl font-bold text-emerald-400">{metrics.marketSentiment}</div>
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
          <BarChart3 size={16} className="text-purple-500" /> معامل الارتباط
        </div>
        <div className="text-2xl font-bold text-white">{metrics.correlationIndex}</div>
      </div>

      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
          <ShieldCheck size={16} className="text-emerald-500" /> تحسين المؤشرات (Auto-Opt)
        </div>
        <div className="text-xs text-slate-300">
          نشط: {metrics.activeIndicators.length} | مستبعد: {metrics.optimizedOut.length}
        </div>
      </div>
    </div>
  );
};