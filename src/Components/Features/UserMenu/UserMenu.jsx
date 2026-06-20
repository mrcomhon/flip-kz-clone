import cart from '../../../assets/icons/cart.svg'
import styles from './UserMenu.module.scss'
import Favorite from "@/Components/Features/Favorite/Favorite";
import LangSwitcher from "@/Components/Features/LanguageSwitcher/LangSwitcher";
import Auth from "@/Components/Features/Auth/Auth";

function UserMenu() {
  return (
    <div className={styles.userMenu}>
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
      <Favorite />
      <LangSwitcher />
      <Auth />
    </div>
  )
}

export default UserMenu