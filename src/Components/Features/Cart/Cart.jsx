import styles from "@/Components/Features/Cart/Cart.module.scss";
import cart from "@/assets/icons/cart.svg";


function Cart() {
  return (
    <a className={styles.cart}>
      <img
        src={cart}
        alt=""
        width=""
        height=""
        loading="lazy"
      />
      <div className={styles.cartExtra}>
        <div className="p500">Корзина</div>
        <div className="p300">2 товара</div>
      </div>
    </a>
  )
}

export default Cart