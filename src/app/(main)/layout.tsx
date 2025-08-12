import "../globals.css";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
