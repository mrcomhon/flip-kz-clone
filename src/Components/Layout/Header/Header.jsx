import styles from './Header.module.scss'
import SearchBar from "@/Components/Features/SearchBar/SearchBar";
import LogoWrapper from "@/Components/Features/LogoWrapper/LogoWrapper";
import UserMenu from "@/Components/Features/UserMenu/UserMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.desktopHeader}>
        <nav className={`${styles.navigation} container`}>
          <div className={styles.desktopLocation}>
            <LogoWrapper LocationClass="hidden-tablet" />
          </div>
          <SearchBar />
          <UserMenu />
        </nav>
      </div>
      <div className={styles.mobileHeader}>
        <nav className={`${styles.mobileNavigation} container`}>
          <div className={styles.headerTop}>
            <LogoWrapper LocationClass="visually-hidden" />
            <UserMenu />
          </div>
          <SearchBar />
          <LogoWrapper
            LocationClass="visible-tablet"
            LogoClass="visually-hidden"
          />
        </nav>
      </div>
    </header>
  )
}

export default Header