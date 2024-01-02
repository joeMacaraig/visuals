import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Visuals.",
  description: "Visuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
