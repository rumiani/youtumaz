import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTuMaz",
  description: "A YouTube tool for YouTube creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-screen-2xl min-h-screen ${inter.className}`}>
        <Navbar />
        <main className=" m-2 min-h-screen rounded-lg">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
