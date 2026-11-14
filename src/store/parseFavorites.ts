export function parseFavorites(text: string): number[] {
  try {
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed)) {
      return parsed;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Ошибка парсинга localStorage", error);
    return [];
  }
}
