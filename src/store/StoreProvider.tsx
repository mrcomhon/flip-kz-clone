"use client";

import { ReactNode, useState, useEffect } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store/store";
import { hydrateFavorites } from "@/store/favoritesSlice";
import { parseFavorites } from "@/store/parseFavorites";

type StoreProviderProps = {
  children: ReactNode;
};

const FAVORITES_KEY = "favorites";
export function StoreProvider({ children }: StoreProviderProps) {
  const [store] = useState(makeStore);

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY);

      if (savedFavorites) {
        const result = parseFavorites(savedFavorites);
        store.dispatch(hydrateFavorites(result));
      } else {
        store.dispatch(hydrateFavorites([]));
      }
    } catch (error) {
      console.log(error);
    }

    const sub = store.subscribe(() => {
      const result = store.getState();

      try {
        const stringified = JSON.stringify(result.favorites.value);
        localStorage.setItem(FAVORITES_KEY, stringified);
      } catch (error) {
        console.log("Ошибка записи в localStorage", error);
      }
    });

    return sub;
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
