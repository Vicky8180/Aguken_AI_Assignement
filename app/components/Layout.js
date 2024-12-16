// components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul>
            <li><Link href="/dashboard/summary">Summary</Link></li>
            <li><Link href="/dashboard/history">History</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-6 bg-gray-100">{children}</main>
    </div>
  );
}
