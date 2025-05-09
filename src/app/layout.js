// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const geistSans = localFont({
  src: "./font/Poppins-Regular.ttf",
  variable: "--font-geist-sans",
  
});

const geistMono = localFont({
  src: './font/Inter_24pt-Regular.ttf',
  variable: "--font-geist-mono",
  
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className="min-h-[calc(100vh-470px)]">
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
