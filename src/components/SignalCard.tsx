import React from 'react';
import { TradeSignal } from '../types/crypto';
import { TrendingUp, TrendingDown, Target, AlertCircle, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const SignalCard = ({ signal }: { signal: TradeSignal }) => {
  const isLong = signal.type === 'LONG';

  return (
    <Card className="bg-slate-900 border-slate-800 text-white overflow-hidden hover:border-blue-500 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          {signal.pair}
          <Badge variant={isLong ? "default" : "destructive"} className={isLong ? "bg-emerald-500" : "bg-rose-500"}>
            {signal.type}
          </Badge>
        </CardTitle>
        <div className="text-right">
          <span className="text-xs text-slate-400">دقة متوقعة</span>
          <div className="text-lg font-bold text-blue-400">{signal.successRate}%</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-1">
            <p className="text-xs text-slate-400">نقطة الدخول</p>
            <p className="font-mono text-emerald-400">{signal.entry1}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-slate-400">وقف الخسارة</p>
            <p className="font-mono text-rose-400">{signal.stopLoss}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <Target size={12} /> الأهداف
          </p>
          <div className="flex gap-2">
            {signal.targets.map((t, i) => (
              <Badge key={i} variant="outline" className="border-slate-700 text-slate-300">
                T{i+1}: {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <p className="text-xs text-blue-400 flex items-center gap-1 mb-2">
            <BrainCircuit size={12} /> تحليل المحرك (The Brain)
          </p>
          <ul className="text-xs space-y-1 text-slate-300">
            {signal.reasoning.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500">•</span> {r}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};