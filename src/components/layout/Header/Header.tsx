import { LogoWrapper } from "@/components/header/LogoWrapper";
import { SearchBar } from "@/components/header/SearchBar";
import { UserMenu } from "@/components/header/UserMenu";
import styles from "./Header.module.scss";
import { Container } from "../Container";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.desktopHeader}>
        <Container>
          <nav className={styles.navigation}>
            <LogoWrapper />
            <SearchBar />
            <UserMenu />
          </nav>
        </Container>
      </div>
      <div className={styles.mobileHeader}>
        <Container className={styles.mobileContainer}>
          <nav className={styles.mobileNavigation}>
            <div className={styles.headerTop}>
              <LogoWrapper LocationClass="hide-tab" />
              <UserMenu />
            </div>
            <SearchBar />
          </nav>
        </Container>
        <LogoWrapper
          LocationClass="visible-tablet"
          LogoClass="hide-tab visually-hidden"
          BurgerClass="hide-tab visually-hidden"
        />
      </div>
    </header>
  );
}
