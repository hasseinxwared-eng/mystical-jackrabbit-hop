import React from 'react';
import { useCryptoEngine } from '../hooks/useCryptoEngine';
import { MarketIntelligence } from '../components/MarketIntelligence';
import { SignalCard } from '../components/SignalCard';
import { Brain, History, Settings, Cpu } from 'lucide-react';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const { signals, metrics } = useCryptoEngine();

  return (
    <div className="min-h-screen bg-black text-slate-200 p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-white flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Cpu size={28} />
            </div>
            AI CRYPTO ENGINE <span className="text-blue-500 text-sm font-mono bg-blue-500/10 px-2 py-1 rounded">v2.0.4</span>
          </h1>
          <p className="text-slate-500 mt-1">نظام تحليل العقود الآجلة (OKX Futures) - يعمل 24/7</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full text-sm border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            متصل بـ OKX API
          </div>
        </div>
      </header>

      {/* Market Intelligence Section */}
      <MarketIntelligence metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Signals Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Brain className="text-blue-500" /> الصفقات المقترحة حالياً
            </h2>
            <span className="text-xs text-slate-500">تحديث تلقائي كل 10 ثوانٍ</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {signals.map((signal) => (
              <SignalCard key={signal.id} signal={signal} />
            ))}
          </div>
        </div>

        {/* Sidebar: Learning & Optimization */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <History className="text-purple-500" /> التعلم الذاتي (Post-Trade)
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-slate-950 rounded-lg border-l-4 border-emerald-500">
                <p className="text-xs text-slate-400 mb-1">آخر صفقة مكتملة: SOL/USDT</p>
                <p className="text-sm font-medium">النتيجة: +145% (تحقق الهدف الثالث)</p>
                <p className="text-[10px] text-slate-500 mt-1">تم تحديث وزن مؤشر RSI لزيادة الدقة.</p>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border-l-4 border-rose-500">
                <p className="text-xs text-slate-400 mb-1">آخر صفقة فاشلة: LINK/USDT</p>
                <p className="text-sm font-medium">النتيجة: ضرب وقف الخسارة</p>
                <p className="text-[10px] text-slate-500 mt-1">السبب: تذبذب عالي مفاجئ. تم تفعيل فلتر السيولة.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
              <Settings size={20} /> حالة المحرك
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">الأزواج المراقبة</span>
                <span className="font-mono">50 (OKX Futures)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">وقت التشغيل</span>
                <span className="font-mono">142h 12m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">معدل النجاح الكلي</span>
                <span className="font-mono text-emerald-400">82.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
        <p className="text-slate-600 text-xs">© 2024 AI Crypto Trading Engine. All systems operational.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;