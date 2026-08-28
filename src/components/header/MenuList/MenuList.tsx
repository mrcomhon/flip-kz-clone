import styles from "./MenuList.module.scss";
import type { ReactElement } from "react";
import { MdWindow, MdHelp } from "react-icons/md";
import { BsCurrencyDollar, BsFire, BsFillCreditCardFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { IoCart } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import clsx from "clsx";

type MenuListItem = {
  id: string;
  href: string;
  icon: ReactElement;
  label: string;
  hasDivider?: boolean;
  isLocation?: boolean;
};

export function MenuList() {
  const menuItems: MenuListItem[] = [
    {
      id: "catalog",
      href: "#",
      icon: <MdWindow />,
      label: "Каталог",
    },
    {
      id: "discounts",
      href: "#",
      icon: <BsFire />,
      label: "Скидки и акции",
    },
    {
      id: "gifts",
      href: "#",
      hasDivider: true,
      icon: <BsFillCreditCardFill />,
      label: "Подарочные карты",
    },
    {
      id: "city",
      href: "#",
      isLocation: true,
      icon: <ImLocation />,
      label: "Алматы",
    },
    {
      id: "cart",
      href: "#",
      hasDivider: true,
      icon: <IoCart />,
      label: "Корзина",
    },
    {
      id: "favorite",
      href: "#",
      hasDivider: true,
      icon: <IoMdHeart />,
      label: "Избранное",
    },
    {
      id: "help",
      href: "#",
      icon: <MdHelp />,
      label: "Помощь",
    },
    {
      id: "delivery",
      href: "#",
      icon: <BiLogoTelegram />,
      label: "Способы доставки",
    },
    {
      id: "payment",
      href: "#",
      hasDivider: true,
      icon: <BsCurrencyDollar />,
      label: "Способы оплаты",
    },
  ];

  return (
    <ul className={styles.list}>
      {menuItems.map((item) => (
        <li key={item.id} className={clsx(item.hasDivider && styles.last)}>
          <a href={item.href} className={styles.item}>
            {item.icon}
            <p className={clsx(item.isLocation && styles.city)}>{item.label}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
