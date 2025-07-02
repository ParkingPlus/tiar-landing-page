import { Outfit } from "next/font/google";
import "./globals.css"; 
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
