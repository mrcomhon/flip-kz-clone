import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Favorites = {
  value: number[];
  isHydrated: boolean;
};

const initialState: Favorites = {
  value: [],
  isHydrated: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    hydrateFavorites: (state, action: PayloadAction<number[]>) => {
      state.value = action.payload;
      state.isHydrated = true;
    },

    toggleFavorite: (state, action: PayloadAction<number>) => {
      const idToToggle = action.payload;
      const index = state.value.indexOf(idToToggle);

      if (index !== -1) {
        state.value.splice(index, 1);
      } else {
        state.value.push(idToToggle);
      }
    },
  },
});

export const { hydrateFavorites, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
