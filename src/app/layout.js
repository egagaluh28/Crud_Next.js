// src/app/layout.js
import "./globals.css";
import Link from "next/link";
import { EventProvider } from "../context/EventContext";

export const metadata = {
  title: "Pendaftaran Workshop Eksklusif",
  description:
    "Daftar untuk event workshop eksklusif kami dan tingkatkan keahlian Anda!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-sans text-gray-900 antialiased">
        <EventProvider>
          <header className="bg-white/60 backdrop-blur-lg shadow-lg border-b border-indigo-100">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-5">
              <Link
                href="/"
                className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-500 bg-clip-text text-transparent drop-shadow-lg hover:scale-105 transition-transform">
                Event Registration
              </Link>
              <nav className="flex gap-8 text-lg">
                <Link
                  href="/"
                  className="font-semibold text-indigo-700 hover:text-pink-600 transition-colors relative pb-1 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-400 after:to-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  Daftar Peserta
                </Link>
                <Link
                  href="/daftar"
                  className="font-semibold text-indigo-700 hover:text-pink-600 transition-colors relative pb-1 after:content-[''] after:block after:h-0.5 after:bg-gradient-to-r after:from-indigo-400 after:to-pink-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                  Form Pendaftaran
                </Link>
              </nav>
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-indigo-100 p-6 sm:p-10 transition-all duration-300">
              {children}
            </div>
          </main>
        </EventProvider>
      </body>
    </html>
  );
}
