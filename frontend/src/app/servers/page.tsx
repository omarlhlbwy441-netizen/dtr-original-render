'use client';
import { useState } from 'react';
import { Server, Plus, Play, Stop, Trash2, Settings } from 'lucide-react';
import Link from 'next/link';

interface ServerData {
  id: string; name: string; type: string;
  status: 'running' | 'stopped' | 'pending';
  ip: string; port: number;
}

export default function ServersPage() {
  const [servers] = useState<ServerData[]>([
    { id: '1', name: 'Web Server', type: 'Node.js', status: 'running', ip: '192.168.1.10', port: 3000 },
    { id: '2', name: 'API Server', type: 'Python', status: 'running', ip: '192.168.1.11', port: 8000 },
    { id: '3', name: 'DB Server', type: 'PostgreSQL', status: 'stopped', ip: '192.168.1.12', port: 5432 },
  ]);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="text-dtr-400 text-sm mb-2 inline-block">← Back to Home</Link>
            <h1 className="text-3xl font-bold">Server Management</h1>
          </div>
          <button className="px-4 py-2 bg-dtr-600 rounded-lg flex items-center gap-2 hover:bg-dtr-700 transition">
            <Plus className="w-4 h-4" /> New Server
          </button>
        </div>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Type</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">IP:Port</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {servers.map((server) => (
                <tr key={server.id} className="hover:bg-gray-700/30">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Server className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">{server.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{server.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      server.status === 'running' ? 'bg-green-500/20 text-green-400' :
                      server.status === 'stopped' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>{server.status}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-mono text-sm">{server.ip}:{server.port}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 hover:bg-gray-700 rounded">
                        {server.status === 'running' ? <Stop className="w-4 h-4 text-red-400" /> : <Play className="w-4 h-4 text-green-400" />}
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded"><Settings className="w-4 h-4 text-gray-400" /></button>
                      <button className="p-1 hover:bg-gray-700 rounded"><Trash2 className="w-4 h-4 text-red-400" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
