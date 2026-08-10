"use client";

import { useEffect } from "react";

export default function ClientGuards() {
  useEffect(() => {
    function onUnhandledRejection(e: PromiseRejectionEvent) {
      try {
        const reason = (e && (e.reason || String(e))) as any;
        const msg = reason && (reason.message || String(reason));
        if (!msg) return;
        if (
          msg.includes("MetaMask") ||
          msg.includes("Failed to connect to MetaMask") ||
          msg.includes("StacksProvider") ||
          msg.includes("Xverse") ||
          msg.includes("Unable to set StacksProvider")
        ) {
          e.preventDefault();
          // keep a console.warn for visibility but avoid noisy errors
          console.warn("Suppressed extension error:", msg);
        }
      } catch (err) {
        // swallow guard errors
      }
    }

    function onError(ev: ErrorEvent) {
      try {
        const msg = ev && (ev.message || "");
        if (
          msg.includes("StacksProvider") ||
          msg.includes("Failed to connect to MetaMask") ||
          msg.includes("Xverse")
        ) {
          ev.preventDefault();
          console.warn("Suppressed extension error:", msg);
        }
      } catch (err) {}
    }

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onError);
    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  return null;
}
