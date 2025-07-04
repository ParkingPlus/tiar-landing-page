import { aptos } from "./font";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aptos.className} dark:bg-gray-900 `}>
        {children}
      </body>
    </html>
  );
}
