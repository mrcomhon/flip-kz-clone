import type { Metadata } from "next";
import "../styles/variables.scss";
import "../styles/normalize.scss";
import "../styles/fonts.scss";
import "../styles/utils.scss";

export const metadata: Metadata = {
  title: "FlipClone — учебный клон интерфейса Flip.kz",
  description:
    "Учебный клон интерфейса Flip.kz: каталог товаров, поиск, фильтр по категориям и избранное. React 19, TypeScript, SCSS Modules.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#0a79d5" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://flip-kz-clone.vercel.app/" />
        <meta
          property="og:title"
          content="FlipClone — учебный клон интерфейса Flip.kz"
        />
        <meta
          property="og:description"
          content="Каталог товаров, поиск, фильтр по категориям и избранное. React 19, TypeScript, SCSS Modules."
        />
        <meta
          property="og:image"
          content="https://flip-kz-clone.vercel.app/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
