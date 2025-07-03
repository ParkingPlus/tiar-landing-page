import { Outfit } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
