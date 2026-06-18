"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DesktopPreloader = dynamic(
  () => import("./DesktopPreloader").then((module) => module.DesktopPreloader),
  { ssr: false },
);

export function Preloader() {
  const [showDesktopPreloader, setShowDesktopPreloader] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setShowDesktopPreloader(true);
    }
  }, []);

  if (!showDesktopPreloader) return null;

  return <DesktopPreloader />;
}
