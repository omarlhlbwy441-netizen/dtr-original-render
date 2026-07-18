'use client';
import { BarChart3, TrendingUp, Activity, Server } from 'lucide-react';
import Link from 'next/link';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-dtr-400 text-sm mb-2 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Server, label: 'Total Servers', value: '12', color: 'text-blue-400' },
            { icon: Activity, label: 'CPU Usage', value: '45%', color: 'text-green-400' },
            { icon: TrendingUp, label: 'Memory', value: '62%', color: 'text-purple-400' },
            { icon: BarChart3, label: 'Requests/min', value: '1.2K', color: 'text-orange-400' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">System Performance</h2>
          <div className="h-64 flex items-end justify-around">
            {[65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 40, 95].map((h, i) => (
              <div key={i} className="w-8 bg-dtr-600/50 rounded-t-lg hover:bg-dtr-500 transition" style={{height: `${h}%`}} />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:59</span>
          </div>
        </div>
      </div>
    </div>
  );
}
