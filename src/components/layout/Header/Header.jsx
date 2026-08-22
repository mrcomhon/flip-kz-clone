import styles from './Header.module.scss'
import SearchBar from "@/components/SearchBar/SearchBar";
import LogoWrapper from "@/components/LogoWrapper/LogoWrapper";
import UserMenu from "@/components/UserMenu/UserMenu";

export function Header() {
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
