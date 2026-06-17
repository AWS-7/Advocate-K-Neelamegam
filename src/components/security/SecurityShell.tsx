"use client";

import type { ReactNode } from "react";
import { ErrorBoundary } from "@/components/security/ErrorBoundary";

type SecurityShellProps = {
  children: ReactNode;
};

export function SecurityShell({ children }: SecurityShellProps) {
  return <ErrorBoundary section="app">{children}</ErrorBoundary>;
}
