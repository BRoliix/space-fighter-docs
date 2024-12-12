import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google';
import "./globals.css";
import logo from '../../public/assets/logo.jpg'; 

const googleSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-google-sans',
});


export const metadata = {
  title: "Game Dev with React Workshop",
  description: "Learn game development interactively using React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-50">
      <head></head>
      <body className={`${googleSans.variable} antialiased font-sans`}>
        <header className="bg-black text-white py-4">
          <div className="container mx-auto flex justify-between items-center ">
            <div className="flex items-center">
              <a
                href="https://gdg.community.dev/gdg-on-campus-bits-pilani-dubai-united-arab-emirates/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={logo}
                  alt="GDG Logo"
                  width={50}
                  height={50}
                  className="mr-4"
                />
              </a>
              <h1 className="text-xl font-bold">Game Dev with React Workshop</h1>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
