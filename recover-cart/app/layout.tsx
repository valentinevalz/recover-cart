import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
<Link
  href="/dashboard"
  className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
>
  Go to Dashboard →
</Link>

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        {/* 🌟 Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            {/* Left Side - Logo */}
            <h1 className="text-2xl font-bold text-blue-600">Recover Cart</h1>

            {/* Right Side - Links */}
            <div className="space-x-4">
              <Link href="/dashboard/cart-copilot" className="hover:text-blue-500">
                Cart Co-Pilot
              </Link>
              <Link href="/dashboard/market-recon" className="hover:text-blue-500">
                Market Recon
              </Link>
              <Link href="/dashboard/engagex" className="hover:text-blue-500">
                EngageX
              </Link>
              <Link href="/dashboard/product-intelligence" className="hover:text-blue-500">
                Product Intelligence
              </Link>
              <Link href="/dashboard/inventory-intelligence" className="hover:text-blue-500">
                Inventory
              </Link>
              <Link href="/dashboard/commandedge" className="hover:text-blue-500">
                CommandEdge
              </Link>
            </div>
          </div>
        </nav>

        {/* 📄 Page Content */}
        <main className="max-w-7xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
