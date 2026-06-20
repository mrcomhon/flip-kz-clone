import cart from '../../../assets/icons/cart.svg'
import favorite from '../../../assets/icons/favourite.svg'
import styles from './UserMenu.module.scss'
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
      <a className={styles.cart}>
        <img
          src={favorite}
          alt=""
          width=""
          height=""
          loading="lazy"
        />
      </a>
      <div className={styles.langSwitcherWrapper}>
        <div className={styles.langSwitcher}>
          <input
            id="kz"
            name="lang"
            value="kz"
            type="radio"
          />
          <label htmlFor="kz">Қаз</label>
          <input
            id="ru"
            name="lang"
            value="ru"
            type="radio"
            defaultChecked
          />
          <label htmlFor="ru">Рус</label>
        </div>
      </div>
      <Auth />
    </div>
  )
}

export default UserMenu