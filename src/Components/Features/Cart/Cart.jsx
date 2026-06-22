import styles from "@/Components/Features/Cart/Cart.module.scss";
import CartIcon from "@/assets/icons/cart.svg?react";


function Cart() {
  return (
    <a className={styles.cart}>
      <CartIcon className={styles.icon} />
      <div className={styles.cartExtra}>
        <div className="p500">Корзина</div>
        <div className="p300">2 товара</div>
      </div>
    </a>
  )
}

export default Cart