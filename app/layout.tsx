import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manohar Dahal",
  description: "Portfolio of Manohar Dahal",
};

export default function RootLayout({
  right,
  left,
}: {
  right: React.ReactNode;
  left: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between pr-24 pl-24 bg-backgroundcolor">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 md:col-span-1">{left}</div>
            <div className="col-span-1 md:col-span-2">{right}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
