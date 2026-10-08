import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сайт собирается в набор статических файлов в папке dist, как раньше у Vite.
  output: "export",
  distDir: "./dist",

  // Не создавать в корне проекта файл AGENTS.md с подсказками для ИИ-агентов.
  agentRules: false,

  // Хелперы SCSS (toRem, миксины, медиа) доступны в каждом файле стилей без @use.
  sassOptions: {
    loadPaths: ["src/styles"],
    additionalData: `@use "helpers" as *;`,
  },

  // Импорт вида `icon.svg?react` превращает SVG в React-компонент.
  turbopack: {
    rules: {
      "*.svg": {
        condition: { query: "?react" },
        loaders: [{ loader: "@svgr/webpack", options: { svgo: false } }],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
