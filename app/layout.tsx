import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <nav className="flex justify-between items-center p-6 bg-blue-600 text-white shadow">
          {/* 🔷 Brand / Home Link */}
          <Link href="/" className="text-2xl font-bold">
            Recover Cart
          </Link>

          {/* 🔗 Navigation Links */}
          <div className="space-x-4">
            <Link href="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link href="/dashboard/connect-shopify" className="hover:underline">
              Connect Shopify
            </Link>
          </div>
        </nav>

        {/* 🧩 Main Content */}
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
