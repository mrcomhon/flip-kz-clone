import { Container } from "../Container";
import styles from "./Footer.module.scss";
import QR from "@/assets/footer/qr-app.svg?react";
import GooglePlay from "@/assets/footer/google-play.svg?react";
import AppStore from "@/assets/footer/app-store.svg?react";
import Telegram from "@/assets/footer/telegram.svg?react";
import Instagram from "@/assets/footer/instagram.svg?react";
import Tiktok from "@/assets/footer/tiktok.svg?react";
import Threads from "@/assets/footer/threads.svg?react";
import type { ComponentType, SVGProps } from "react";

type FooterLink = {
  key: string;
  href: string;
  label: string;
};

type FooterColumn = {
  key: string;
  links: FooterLink[];
};

type SVGIcon = ComponentType<SVGProps<SVGSVGElement>>;

type FooterSocial = {
  key: string;
  href: string;
  label: string;
  src: SVGIcon;
};

const columns: FooterColumn[] = [
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

const socials: FooterSocial[] = [
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

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.limit}>
          <div className={styles.footerFlex}>
            {columns.map((column) => (
              <ul key={column.key} className={styles.anchorList} role="list">
                {column.links.map((link) => {
                  return (
                    <li key={link.key}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  );
                })}
              </ul>
            ))}

            <nav className={styles.soc1als} aria-label="Социальные сети">
              <ul className={styles.soc1alList} role="list">
                {socials.map((social) => {
                  const Icon = social.src;

                  return (
                    <li key={social.key}>
                      <a
                        className={styles.soc1al}
                        href={social.href}
                        aria-label={social.label}
                      >
                        <Icon
                          className={styles.soc1alIcon}
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

              <div className={styles.contentBlock}>
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
            </div>
          </div>
          <p className={styles.copyright}>© 2007–2026 ТОО FlipClone.kz</p>
        </div>
      </Container>
    </footer>
  );
}
