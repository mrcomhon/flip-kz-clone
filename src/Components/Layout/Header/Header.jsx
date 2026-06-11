import styles from './Header.module.scss'
import logo from '../../../assets/icons/logo.svg'

function Header() {
  return (
    <header>
      <nav>
        <div className={styles.logoWrapper}>
          <a href="/" alt="Home-page">
            <img
              src={logo}
              alt=""
              width="60px"
              height=""
              loading="lazy"
            />
          </a>
          <div>Location</div>
        </div>
        <div className={styles.searchBar}>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Поиск на FlipClone: 1 000 000 товаров"
          />
          <button
            title="Поиск"
            type="submit"
          >
            <img
              src=""
              alt="search"
              width=""
              height=""
              loading="lazy"
            />
          </button>
        </div>
        <div className={styles.userMenu}>
          <a>Cart</a>
          <a>Favourite</a>
          <div>language change</div>
          <a>Account</a>
        </div>
      </nav>
    </header>
  )
}

export default Header