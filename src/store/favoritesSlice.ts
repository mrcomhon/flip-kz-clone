import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Favorites = {
  value: number[];
};

const initialState: Favorites = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
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

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
