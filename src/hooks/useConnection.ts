"use client";

import { useEffect, useState } from "react";

/**
 * Connection-aware degradation.
 *
 * On `2g` or `slow-2g` effective types we disable non-essential motion:
 * hero auto-rotation, count-up, scroll-linked parallax, CTA breathing.
 *
 * The browser's NetworkInformation API is not in the standard DOM types,
 * so we feature-detect and cast safely.
 */

type EffectiveType = "slow-2g" | "2g" | "3g" | "4g" | undefined;

type NavigatorWithConnection = Navigator & {
  connection?: {
    effectiveType?: EffectiveType;
    saveData?: boolean;
    addEventListener?: (event: "change", handler: () => void) => void;
    removeEventListener?: (event: "change", handler: () => void) => void;
  };
};

export function useConnection() {
  const [isSlow, setIsSlow] = useState(false);
  const [saveData, setSaveData] = useState(false);

  useEffect(() => {
    const conn = (navigator as NavigatorWithConnection).connection;
    if (!conn) return;

    const update = () => {
      const type = conn.effectiveType;
      setIsSlow(type === "2g" || type === "slow-2g");
      setSaveData(Boolean(conn.saveData));
    };

    update();
    conn.addEventListener?.("change", update);
    return () => conn.removeEventListener?.("change", update);
  }, []);

  return { isSlow, saveData, degrade: isSlow || saveData };
}
