import { expect, it } from "vitest";
import { filterProducts } from "@/components/catalog/filterProducts";

it("ничего не нашлось", () => {
  const result = filterProducts("zzqx", []);
  expect(result).toEqual([]);
});

it("поиск по товару", () => {
  const result = filterProducts("porsche", []);
  expect(result.length).toEqual(1);
  expect(result[0].name).toEqual("Lego");
  expect(result[0].items.length).toEqual(1);
});

it("поиск по бейджу", () => {
  const result = filterProducts("", ["lego"]);
  expect(result.length).toEqual(1);
  expect(result[0].name).toEqual("Lego");
  expect(result[0].items.length).toEqual(5);
});
