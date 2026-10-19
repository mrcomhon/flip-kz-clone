"use client";

import { ReactNode, useState, useEffect } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/store";
import { hydrateFavorites } from "@/store/favoritesSlice";

type StoreProviderProps = {
  children: ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  const [store] = useState(makeStore);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");

    if (savedFavorites) {
      try {
        const parsed = JSON.parse(savedFavorites);
        store.dispatch(hydrateFavorites(parsed));
      } catch (error) {
        console.log("Ошибка парсинга localStorage", error);
        return undefined;
      }
    }

    const sub = store.subscribe(() => {
      const result = store.getState();

      try {
        const stringified = JSON.stringify(result.favorites.value);
        localStorage.setItem("favorites", stringified);
      } catch (error) {
        console.log("Ошибка записи в localStorage", error);
      }
    });

    return sub;
  });

  return <Provider store={store}>{children}</Provider>;
}
