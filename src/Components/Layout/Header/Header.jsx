import styles from './Header.module.scss'
import SearchBar from "@/Components/Features/SearchBar/SearchBar";
import LogoWrapper from "@/Components/Features/LogoWrapper/LogoWrapper";
import UserMenu from "@/Components/Features/UserMenu/UserMenu";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation} container`}>
        <div className={styles.desktopLocation}>
         <LogoWrapper LocationClass="hidden-tablet"/>
        </div>
      <SearchBar />
      <UserMenu />
        <div className={styles.mobileLocation}>
          <LogoWrapper LocationClass="visible-tablet" LogoClass="visually-hidden"/>
        </div>
      </nav>
    </header>
  )
}

export default Header