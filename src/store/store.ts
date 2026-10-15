import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";

const rootReducer = {
  favorites: favoritesReducer,
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });
