import styles from './Header.module.scss'
import SearchBar from "@/Components/Features/SearchBar/SearchBar";
import LogoWrapper from "@/Components/Features/LogoWrapper/LogoWrapper";
import UserMenu from "@/Components/Features/UserMenu/UserMenu";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation} container`}>
      <LogoWrapper />
      <SearchBar />
      <UserMenu />
      </nav>
    </header>
  )
}

export default Header