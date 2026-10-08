"use client";

import dynamic from "next/dynamic";

// Временный мост первого этапа переезда: приложение целиком отрисовывается
// только в браузере, как было при Vite. На втором этапе `ssr: false` уйдёт.
const App = dynamic(() => import("@/App"), { ssr: false });

export function ClientOnly() {
  return <App />;
}
