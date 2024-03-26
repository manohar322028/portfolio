import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manohar Dahal",
  description: "Portfolio of Manohar Dahal",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="h-full bg-backgroundcolor ">{children}</body>
      </html>
    </>
  );
}
