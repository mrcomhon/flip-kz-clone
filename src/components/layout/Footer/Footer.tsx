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
import { useTranslation } from "react-i18next";
import type { Locale } from "@/i18n/locales/ru";

type FooterLink = {
  key: string;
  href: string;
  label: keyof Locale["footer"]["links"];
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
        label: "help",
      },
      {
        key: "delivery",
        href: "#",
        label: "delivery",
      },
      {
        key: "return",
        href: "#",
        label: "return",
      },
      {
        key: "gift",
        href: "#",
        label: "gift",
      },
    ],
  },
  {
    key: "second",
    links: [
      {
        key: "about",
        href: "#",
        label: "about",
      },
      {
        key: "contacts",
        href: "#",
        label: "contacts",
      },
      {
        key: "job",
        href: "#",
        label: "job",
      },
    ],
  },
  {
    key: "third",
    links: [
      {
        key: "orders",
        href: "#",
        label: "orders",
      },
      {
        key: "business",
        href: "#",
        label: "business",
      },
      {
        key: "point",
        href: "#",
        label: "point",
      },
      {
        key: "seller",
        href: "#",
        label: "seller",
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
  const { t } = useTranslation();

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
                      <a href={link.href}>{t(`footer.links.${link.label}`)}</a>
                    </li>
                  );
                })}
              </ul>
            ))}

            <nav
              className={styles.soc1als}
              aria-label={t("footer.socials.ariaLabel")}
            >
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
                <p>{t("footer.download.prompt")}</p>
                <div className={styles.app}>
                  <a href="#" aria-label={t("footer.download.googlePlay")}>
                    <GooglePlay
                      className={styles.googlePlay}
                      aria-hidden="true"
                      focusable="false"
                    />
                  </a>
                  <a href="#" aria-label={t("footer.download.appStore")}>
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
          <p className={styles.copyright}>{t("footer.copyright")}</p>
        </div>
      </Container>
    </footer>
  );
}
