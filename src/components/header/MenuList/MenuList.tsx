import styles from "./MenuList.module.scss";
import type { ReactElement } from "react";
import { MdWindow, MdHelp } from "react-icons/md";
import { BsCurrencyDollar, BsFire, BsFillCreditCardFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoCart } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import type { Locale } from "@/i18n/locales/ru";

type MenuListItem = {
  id: string;
  href: string;
  icon: ReactElement;
  translationKey: keyof Locale["header"]["menu"];
  hasDivider?: boolean;
  isLocation?: boolean;
};

const menuItems: MenuListItem[] = [
  {
    id: "catalog",
    href: "#",
    icon: <MdWindow />,
    translationKey: "catalog",
  },
  {
    id: "discounts",
    href: "#",
    icon: <BsFire />,
    translationKey: "discounts",
  },
  {
    id: "gifts",
    href: "#",
    hasDivider: true,
    icon: <BsFillCreditCardFill />,
    translationKey: "giftCards",
  },
  {
    id: "city",
    href: "#",
    isLocation: true,
    icon: <ImLocation />,
    translationKey: "city",
  },
  {
    id: "cart",
    href: "#",
    hasDivider: true,
    icon: <IoCart />,
    translationKey: "cart",
  },
  {
    id: "favorite",
    href: "#",
    hasDivider: true,
    icon: <IoMdHeart />,
    translationKey: "favorites",
  },
  {
    id: "help",
    href: "#",
    icon: <MdHelp />,
    translationKey: "help",
  },
  {
    id: "delivery",
    href: "#",
    icon: <BiLogoTelegram />,
    translationKey: "deliveryMethods",
  },
  {
    id: "payment",
    href: "#",
    hasDivider: true,
    icon: <BsCurrencyDollar />,
    translationKey: "paymentMethods",
  },
];

export function MenuList() {
  const { t } = useTranslation();

  return (
    <ul className={styles.list}>
      {menuItems.map((item) => (
        <li key={item.id} className={clsx(item.hasDivider && styles.last)}>
          <a href={item.href} className={styles.item}>
            {item.icon}
            <p className={clsx(item.isLocation && styles.city)}>
              {t(`header.menu.${item.translationKey}`)}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
