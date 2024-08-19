import { Khand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Logo from "@/components/Logo/Logo";

const khand = Khand({ subsets: ["devanagari"],weight: ['300','400','500', '600', '700'] });

export const metadata = {
  title: "Oylum Personal Web Portfolio",
  description: "Lots of good stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={khand.className}>
        <Logo />
        <main>
        {children}
        </main>
        <Navbar />
        </body>
    </html>
  );
}
