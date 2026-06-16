import styles from './Header.module.scss'
import logo from '../../../assets/icons/logo.svg'
import search from '../../../assets/icons/search.svg'
import cart from '../../../assets/icons/cart.svg'
import favorite from '../../../assets/icons/favourite.svg'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation} container`}>
        <div className={styles.logoWrapper}>
          <a
            href="/"
            alt="Home-page"
          >
            <img
              src={logo}
              alt=""
              width="60px"
              height=""
              loading="lazy"
              className={styles.logo}
            />
          </a>
          <div className={styles.location}>
            <div className={`${styles.city} p300`}>Астана</div>
            <div className={styles.gapRow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"></path>
              </svg>
              <div className="p500">Уточните адрес</div>
            </div>
          </div>
        </div>
        <div className={styles.searchBar}>
          <form
            action="/search"
            name="search"
            className={styles.searchForm}
          >
            <input
              className={styles.searchInput}
              type="search"
              id="search"
              name="search"
              placeholder="Поиск на Flip: 1 000 000 товаров"
            />
            <button
              className={styles.buttonSearch}
              title="Поиск"
              type="submit"
            >
              <img
                src={search}
                alt="search"
                width=""
                height=""
                loading="lazy"
              />
            </button>
          </form>
        </div>
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
                value="kk"
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
          <div className={styles.authHover}>
            <a className={styles.auth}>
              <div className="p500">Войти</div>
              <div className="p300">Мой раздел</div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header