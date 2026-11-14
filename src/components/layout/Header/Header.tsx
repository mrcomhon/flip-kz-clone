"use client";

import { LogoWrapper } from "@/components/header/LogoWrapper";
import { SearchBar, SearchBarFromUrl } from "@/components/header/SearchBar";
import { UserMenu } from "@/components/header/UserMenu";
import { Location } from "@/components/header/Location";
import styles from "./Header.module.scss";
import { Container } from "@/components/layout/Container";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.desktopHeader}>
        <Container>
          <nav className={styles.navigation}>
            <LogoWrapper key={path} />
            <Location />
            <Suspense fallback={<SearchBar initialValue="" />}>
              <SearchBarFromUrl />
            </Suspense>
            <UserMenu />
          </nav>
        </Container>
      </div>
      <div className={styles.mobileHeader}>
        <Container className={styles.mobileContainer}>
          <nav className={styles.mobileNavigation}>
            <div className={styles.headerTop}>
              <LogoWrapper key={path} />
              <UserMenu />
            </div>
            <Suspense fallback={<SearchBar initialValue="" />}>
              <SearchBarFromUrl />
            </Suspense>
          </nav>
        </Container>
        <Location className={styles.mobilePadding} />
      </div>
    </header>
  );
}
