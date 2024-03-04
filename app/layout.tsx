import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { NextAuthProvider } from "./providers";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "YouTuMaz",
//   description: "A YouTube tool for YouTube creators",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-screen-2xl min-h-screen ${inter.className}`}>
      <SpeedInsights/>
        <NextAuthProvider>
          <Navbar />
          <main className=" w-full px-2 sm:px-10 md:px-12 rounded-lg">
            {children}
          </main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
