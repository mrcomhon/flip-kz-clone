import { useTranslation } from "react-i18next";
import type { Locale } from "@/i18n/locales/ru";
import styles from "./AuthDropdown.module.scss";

type DropdownMenuItem = {
  id: string;
  href: string;
  translationKey: keyof Locale["header"]["auth"];
};

const menuItems: DropdownMenuItem[] = [
  {
    id: "register",
    href: "#",
    translationKey: "loginOrRegister",
  },
  {
    id: "section",
    href: "#",
    translationKey: "mySection",
  },
  {
    id: "orders",
    href: "#",
    translationKey: "orders",
  },
  {
    id: "contacts",
    href: "#",
    translationKey: "contacts",
  },
  {
    id: "help",
    href: "#",
    translationKey: "help",
  },
];

export function AuthDropdown() {
  const { t } = useTranslation();

  return (
    <div className={styles.menuItems}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{t(`header.auth.${item.translationKey}`)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
