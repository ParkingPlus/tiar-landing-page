"use client";
import React, { useEffect, useState } from "react";
import { PopupButton, PopupWidget, InlineWidget } from "react-calendly";

// Pastikan URL Calendly selalu valid agar popup tidak memuat halaman saat ini
const getCalendlyUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const fallbackUrl = "https://calendly.com/tiar-support/30min";

  if (!envUrl || envUrl.trim().length === 0) return fallbackUrl;
  try {
    // Validasi bentuk URL
    const parsed = new URL(envUrl);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return envUrl;
    }
    return fallbackUrl;
  } catch {
    return fallbackUrl;
  }
};

const url = getCalendlyUrl();

const useRootElement = () => {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (typeof document !== "undefined") {
      setRoot(document.body);
    }
  }, []);
  return root;
};

export function CPopupButton() {
  const rootElement = useRootElement();
  if (!rootElement) return null;

  return (
    <div>
        <PopupButton
          url={url}
          text="Book a demo"
          rootElement={rootElement}
        />
    </div>
  );
}

export function CPopupWidget() {
  const rootElement = useRootElement();
  if (!rootElement) return null;

  return (
    <div>
      <PopupWidget
         url={url}
         text="Book a demo"
         rootElement={rootElement}
      />
    </div>
  );
}

export function CInlineWidget() {
  return (
    <div>
      <InlineWidget
        url={url}
      />
    </div>
  );
}