import CartIcon from "@/assets/icons/cart.svg?react";
import styles from "./Cart.module.scss";
import { useTranslation } from "react-i18next";

export function Cart() {
  const { t } = useTranslation();

  return (
    <a className={styles.cart} href="#">
      <CartIcon className={styles.icon} />
      <div className={styles.cartExtra}>
        <div className="p500">{t("header.cart.cartName")}</div>
        <div className="p300">{t("header.cart.cartNumber")}</div>
      </div>
    </a>
  );
}
