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
        <main className="w-screen h-screen relative flex flex-wrap">
          <div className=" w-1/3 bg-gray-500 h-full">{left}</div>
          <div className=" w-2/3 bg-gray-400 h-full overflow-auto">{right}</div>
        </main>
      </body>
    </html>
  );
}
