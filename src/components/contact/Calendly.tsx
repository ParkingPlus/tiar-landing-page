"use client";
import React, { useEffect, useState } from "react";
import { PopupButton, PopupWidget, InlineWidget } from "react-calendly";

const url = "https://calendly.com/releasethebeast00/30min";

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