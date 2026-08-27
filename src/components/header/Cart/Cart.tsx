import CartIcon from "@/assets/icons/cart.svg?react";
import styles from "./Cart.module.scss";

export function Cart() {
  return (
    <a className={styles.cart} href="#">
      <CartIcon className={styles.icon} />
      <div className={styles.cartExtra}>
        <div className="p500">Корзина</div>
        <div className="p300">2 товара</div>
      </div>
    </a>
  );
}
