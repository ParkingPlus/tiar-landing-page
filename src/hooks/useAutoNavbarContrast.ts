"use client";

import { useEffect, useState } from "react";

export type NavbarTheme = "light" | "dark";

/**
 * Menghitung tema navbar (light/dark) secara otomatis berdasarkan kecerahan
 * strip atas dari background gambar di hero section.
 *
 * Mekanisme:
 * - Membaca atribut `data-current-bg` pada elemen `#hero-root` (di-set oleh Hero)
 * - Jika tidak ada, fallback mengambil URL dari computed style background
 * - Memuat gambar ke Canvas dan sampling luminance area atas
 * - Menetapkan theme: avg luminance > threshold -> "dark" (teks gelap), else "light"
 */
export function useAutoNavbarContrast(): NavbarTheme {
  const [theme, setTheme] = useState<NavbarTheme>("light");

  useEffect(() => {
    let disposed = false;

    const heroEl = document.getElementById("hero-root");
    if (!heroEl) {
      // Jika tidak ada hero, asumsikan background terang (halaman putih) → teks gelap
      setTheme("dark");
    }

    const computeFromUrl = (imageUrl: string) => {
      if (!imageUrl) return;
      try {
        const img = new Image();
        // Untuk gambar same-origin aman; untuk cross-origin perlu CORS yang benar
        img.crossOrigin = "anonymous";
        img.onload = () => {
          if (disposed) return;
          const canvas = document.createElement("canvas");
          const sampleHeight = Math.min(100, img.naturalHeight || 100);
          const targetWidth = Math.min(600, img.naturalWidth || 600);
          canvas.width = targetWidth;
          canvas.height = sampleHeight;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          try {
            ctx.drawImage(
              img,
              0,
              0,
              img.naturalWidth || targetWidth,
              sampleHeight,
              0,
              0,
              targetWidth,
              sampleHeight
            );
            const { data } = ctx.getImageData(0, 0, targetWidth, sampleHeight);
            let sum = 0;
            for (let i = 0; i < data.length; i += 4) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];
              // Luminance Rec. 709
              const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
              sum += y;
            }
            const pixels = data.length / 4;
            const avg = sum / pixels;
            // Ambang sederhana; > 170 dianggap terang → gunakan teks gelap (dark theme)
            setTheme(avg > 170 ? "dark" : "light");
          } catch {
            // Canvas bisa tainted jika CORS salah; abaikan diam-diam
          }
        };
        img.src = imageUrl;
      } catch {
        // noop
      }
    };

    const readCurrentUrl = (): string => {
      if (!heroEl) return "";
      const explicit = (heroEl as HTMLElement).dataset.currentBg;
      if (explicit) return explicit;
      const backdrop = heroEl.querySelector<HTMLElement>("[data-hero-background]");
      const style = window.getComputedStyle(backdrop ?? heroEl);
      const bg = style.backgroundImage;
      const match = bg && bg !== "none" ? bg.match(/url\(["']?(.*?)["']?\)/) : null;
      return match?.[1] ?? "";
    };

    // Hitung awal
    const initialUrl = readCurrentUrl();
    if (initialUrl) computeFromUrl(initialUrl);

    // Observe perubahan URL background dari Hero
    const observer = new MutationObserver(() => {
      const url = readCurrentUrl();
      if (url) computeFromUrl(url);
    });
    if (heroEl) {
      observer.observe(heroEl, { attributes: true, attributeFilter: ["data-current-bg"] });
    }

    // Recompute saat resize
    const onResize = () => {
      const url = readCurrentUrl();
      if (url) computeFromUrl(url);
    };
    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return theme;
}


