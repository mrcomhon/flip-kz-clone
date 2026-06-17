import styles from './Header.module.scss'
import SearchBar from "@/Components/UI/SearchBar/SearchBar";
import LogoWrapper from "@/Components/UI/LogoWrapper/LogoWrapper";
import UserMenu from "@/Components/UI/UserMenu/UserMenu";

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