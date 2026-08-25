import { Container } from "../Container";
import styles from "./Footer.module.scss";
import QR from "@/assets/footer/qr-app.svg?react";
import GooglePlay from "@/assets/footer/google-play.svg?react";
import AppStore from "@/assets/footer/app-store.svg?react";
import Telegram from "@/assets/footer/telegram.svg?react";
import Instagram from "@/assets/footer/instagram.svg?react";
import Tiktok from "@/assets/footer/tiktok.svg?react";
import Threads from "@/assets/footer/threads.svg?react";

export function Footer() {
  const columns = [
    {
      key: "first",
      links: [
        {
          key: "help",
          href: "#",
          label: "Помощь",
        },
        {
          key: "delivery",
          href: "#",
          label: "Способы доставки",
        },
        {
          key: "return",
          href: "#",
          label: "Возврат",
        },
        {
          key: "gift",
          href: "#",
          label: "Подарочные карты",
        },
      ],
    },
    {
      key: "second",
      links: [
        {
          key: "about",
          href: "#",
          label: "О компании",
        },
        {
          key: "contacts",
          href: "#",
          label: "Контакты",
        },
        {
          key: "job",
          href: "#",
          label: "Вакансии",
        },
      ],
    },
    {
      key: "third",
      links: [
        {
          key: "orders",
          href: "#",
          label: "Отправляй посылки",
        },
        {
          key: "business",
          href: "#",
          label: "Покупай для бизнеса",
        },
        {
          key: "point",
          href: "#",
          label: "Открой Flip Point",
        },
        {
          key: "seller",
          href: "#",
          label: "Продавай на Flip",
        },
      ],
    },
  ];

  const socials = [
    {
      key: "telegram",
      href: "#",
      label: "Telegram",
      src: Telegram,
    },
    {
      key: "instagram",
      href: "#",
      label: "Instagram",
      src: Instagram,
    },
    {
      key: "tiktok",
      href: "#",
      label: "TikTok",
      src: Tiktok,
    },
    {
      key: "threads",
      href: "#",
      label: "Threads",
      src: Threads,
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <nav className={styles.columns} aria-label="Ссылки в подвале">
          {columns.map((column) => (
            <ul key={column.key} className={styles.list} role="list">
              {column.links.map((link) => {
                return (
                  <li key={link.key}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                );
              })}
            </ul>
          ))}
        </nav>

        <nav className={styles.soc1als} aria-label="Социальные сети">
          <ul role="list">
            {socials.map((social) => {
              const Icon = social.src;

              return (
                <li key={social.key}>
                  <a href={social.href} aria-label={social.label}>
                    <Icon
                      className={styles.soc1al}
                      aria-hidden="true"
                      focusable="false"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.download}>
          <QR className={styles.qr} aria-hidden="true" focusable="false" />
          <p>Наведите камеру — скачайте приложение</p>
          <div className={styles.app}>
            <a href="#" aria-label="Скачать в Google Play">
              <GooglePlay
                className={styles.googlePlay}
                aria-hidden="true"
                focusable="false"
              />
            </a>
            <a href="#" aria-label="Скачать в App Store">
              <AppStore
                className={styles.appStore}
                aria-hidden="true"
                focusable="false"
              />
            </a>
          </div>
        </div>
        <p>© 2007–2026 ТОО FlipClone.kz</p>
      </Container>
    </footer>
  );
}
