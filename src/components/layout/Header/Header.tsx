import { LogoWrapper } from "@/components/header/LogoWrapper";
import { SearchBar } from "@/components/header/SearchBar";
import { UserMenu } from "@/components/header/UserMenu";
import { Location } from "@/components/header/Location";
import styles from "./Header.module.scss";
import { Container } from "../Container";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.desktopHeader}>
        <Container>
          <nav className={styles.navigation}>
            <LogoWrapper />
            <Location />
            <SearchBar />
            <UserMenu />
          </nav>
        </Container>
      </div>
      <div className={styles.mobileHeader}>
        <Container className={styles.mobileContainer}>
          <nav className={styles.mobileNavigation}>
            <div className={styles.headerTop}>
              <LogoWrapper />
              <UserMenu />
            </div>
            <SearchBar />
          </nav>
        </Container>
        <Location className={styles.mobilePadding} />
      </div>
    </header>
  );
}
