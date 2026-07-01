import styles from './Header.module.scss'
import SearchBar from "@/Components/Features/SearchBar/SearchBar";
import LogoWrapper from "@/Components/Features/LogoWrapper/LogoWrapper";
import UserMenu from "@/Components/Features/UserMenu/UserMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.desktopHeader}>
        <nav className={`${styles.navigation} container`}>
          <LogoWrapper />
          <SearchBar />
          <UserMenu />
        </nav>
      </div>
      <div className={styles.mobileHeader}>
        <nav className={`${styles.mobileNavigation} container`}>
          <div className={styles.headerTop}>
            <LogoWrapper LocationClass="hide-tab" />
            <UserMenu />
          </div>
          <SearchBar />
        </nav>
          <LogoWrapper
            LocationClass="visible-tablet"
            LogoClass="hide-tab visually-hidden"
            BurgerClass="hide-tab visually-hidden"
          />
      </div>
    </header>
  )
}

export default Header