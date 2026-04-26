import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Aurelia Sheva",
  description: "Web Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-x-hidden bg-transparent`}>
        {/* Background Partikel - Fixed untuk seluruh viewport */}
        <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
          <ParticleBackground />
        </div>
        
        {/* Konten Utama: Wajib z-index positif dan relative agar bisa diklik/scroll */}
        <main className="relative z-10 flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}