import { LogoWrapper } from "@/components/header/LogoWrapper";
import { SearchBar } from "@/components/header/SearchBar";
import { UserMenu } from "@/components/header/UserMenu";
import styles from "./Header.module.scss";

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
