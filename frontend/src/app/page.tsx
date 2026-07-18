import Link from 'next/link';
import { Server, Shield, BarChart3, Settings, Users, Zap } from 'lucide-react';

const systems = [
  { id: 'servers', name: 'Server Management', icon: Server, desc: 'Deploy and manage servers', color: 'text-blue-400' },
  { id: 'security', name: 'Security', icon: Shield, desc: 'Authentication and protection', color: 'text-green-400' },
  { id: 'analytics', name: 'Analytics', icon: BarChart3, desc: 'Metrics and monitoring', color: 'text-purple-400' },
  { id: 'settings', name: 'Settings', icon: Settings, desc: 'System configuration', color: 'text-orange-400' },
  { id: 'users', name: 'User Management', icon: Users, desc: 'Manage users and roles', color: 'text-pink-400' },
  { id: 'performance', name: 'Performance', icon: Zap, desc: 'Optimization tools', color: 'text-yellow-400' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-dtr-500 to-blue-400 bg-clip-text text-transparent">
              DTR Original
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Multi-System Management Platform - Your all-in-one solution for 
            server deployment, security, analytics, and more.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <Link
              key={system.id}
              href={`/${system.id}`}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-dtr-500/50 hover:bg-gray-800 transition group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center ${system.color}`}>
                  <system.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{system.name}</h3>
              </div>
              <p className="text-gray-400 text-sm">{system.desc}</p>
              <div className="mt-4 flex items-center text-dtr-500 text-sm group-hover:translate-x-2 transition">
                Access System →
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '6', label: 'Active Systems' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50+', label: 'API Endpoints' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-dtr-400">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
