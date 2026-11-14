import { expect, it } from "vitest";
import { parseFavorites } from "./parseFavorites";

it("разбирает массив", () => {
  const test = parseFavorites("[3,5]");
  expect(test).toEqual([3, 5]);
});

it("пустой массив", () => {
  const test = parseFavorites("[]");
  expect(test).toEqual([]);
});

it("null — не массив", () => {
  const test = parseFavorites("null");
  expect(test).toEqual([]);
});

it("число — не массив", () => {
  const test = parseFavorites("5");
  expect(test).toEqual([]);
});

it("битая строка", () => {
  const test = parseFavorites("abc");
  expect(test).toEqual([]);
});
