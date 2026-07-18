'use client';
import { Shield, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-dtr-400 text-sm mb-2 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-8">Security Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <h2 className="text-xl font-semibold">System Status</h2>
            </div>
            <div className="space-y-3">
              {['Firewall', 'SSL Certificates', 'DDoS Protection'].map((item) => (
                <div key={item} className="flex items-center justify-between">
                  <span className="text-gray-400">{item}</span>
                  <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> Active</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              <h2 className="text-xl font-semibold">Recent Alerts</h2>
            </div>
            <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <p className="text-sm text-yellow-200">Failed login attempt from IP 192.168.1.100</p>
              <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Access Control</h2>
          {[
            { role: 'Admin', users: 3, permissions: 'Full Access' },
            { role: 'Manager', users: 8, permissions: 'Read/Write' },
            { role: 'Developer', users: 15, permissions: 'Limited Write' },
            { role: 'Viewer', users: 25, permissions: 'Read Only' },
          ].map((item) => (
            <div key={item.role} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg mb-2">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-dtr-400" />
                <div>
                  <p className="font-medium">{item.role}</p>
                  <p className="text-sm text-gray-400">{item.users} users</p>
                </div>
              </div>
              <span className="text-sm text-gray-300">{item.permissions}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
