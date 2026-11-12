import { expect, it } from "vitest";
import favoriteReducer, {
  toggleFavorite,
  hydrateFavorites,
} from "./favoritesSlice";

it("Добавляет id которого нет", () => {
  const before = { value: [1, 4], isHydrated: true };
  const after = favoriteReducer(before, toggleFavorite(5));
  expect(after.value).toEqual([1, 4, 5]);
});

it("убирает id из середины", () => {
  const before = { value: [1, 4, 5], isHydrated: true };
  const after = favoriteReducer(before, toggleFavorite(4));
  expect(after.value).toEqual([1, 5]);
});

it("убирает id из начала", () => {
  const before = { value: [1, 4, 5], isHydrated: true };
  const after = favoriteReducer(before, toggleFavorite(1));
  expect(after.value).toEqual([4, 5]);
});

it("добавляет id в пустой список", () => {
  const before = { value: [], isHydrated: true };
  const after = favoriteReducer(before, toggleFavorite(4));
  expect(after.value).toEqual([4]);
});

it("кладем в хранилище id из localStorage", () => {
  const before = { value: [], isHydrated: false };
  const after = favoriteReducer(before, hydrateFavorites([3, 5]));
  expect(after).toEqual({ value: [3, 5], isHydrated: true });
});
