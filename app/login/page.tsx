"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000); // Auto-redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold text-blue-600 mb-4">🔐 Login</h1>
        <p className="text-gray-600 mb-6">
          This is a demo placeholder login page.  
          You’ll be redirected to your dashboard shortly...
        </p>
        <button
          onClick={() => router.push("/dashboard")}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Go Now →
        </button>
      </motion.div>
    </div>
  );
}