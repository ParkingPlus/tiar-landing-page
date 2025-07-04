// app/fonts.ts
import localFont from "next/font/local";

export const aptos = localFont({
  src: [
    {
      path: "./fonts/Aptos-Display.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Aptos-Display-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-aptos",
  display: "swap",
});
