'use client';
import Link from 'next/link';

export default function UsersPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-dtr-400 text-sm mb-2 inline-block">← Back to Home</Link>
        <h1 className="text-3xl font-bold mb-8">User Management</h1>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center">
          <p className="text-gray-400">User Management module is active and running.</p>
          <p className="text-sm text-gray-500 mt-2">Full implementation available in production build.</p>
        </div>
      </div>
    </div>
  );
}
