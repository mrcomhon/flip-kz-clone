import { useTranslation } from "react-i18next";
import type { Locale } from "@/i18n/locales/ru";
import styles from "./AuthDropdown.module.scss";

type DropdownMenuItem = {
  id: string;
  href: string;
  translationKey: keyof Locale["header"]["auth"];
};

type AuthDropdownProps = {
  menuId: string;
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

export function AuthDropdown({ menuId }: AuthDropdownProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.menuItems} id={menuId || undefined}>
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
