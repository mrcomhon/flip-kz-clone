"use client";

import "@/i18n";
import type { ReactNode } from "react";
import { StoreProvider } from "@/store/StoreProvider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <StoreProvider>{children}</StoreProvider>;
}
