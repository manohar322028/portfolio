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
      <body className="h-full bg-backgroundcolor ">
        <div className=" md:grid md:grid-cols-3 2xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] mx-auto shadow-2xl shadow-gray-900">
          <div className=" md:col-span-1">{left}</div>
          <div className="md:col-span-2">{right}</div>
        </div>
      </body>
    </html>
  );
}
