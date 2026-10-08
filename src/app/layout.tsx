import type { Metadata, Viewport } from "next";
import "../styles/variables.scss";
import "../styles/normalize.scss";
import "../styles/fonts.scss";
import "../styles/utils.scss";

const title = "FlipClone — учебный клон интерфейса Flip.kz";

export const metadata: Metadata = {
  metadataBase: new URL("https://flip-kz-clone.vercel.app"),
  title,
  description:
    "Учебный клон интерфейса Flip.kz: каталог товаров, поиск, фильтр по категориям и избранное. React 19, TypeScript, SCSS Modules.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    title,
    description:
      "Каталог товаров, поиск, фильтр по категориям и избранное. React 19, TypeScript, SCSS Modules.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a79d5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
