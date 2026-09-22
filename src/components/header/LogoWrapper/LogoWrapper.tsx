import { useState } from "react";
import clsx from "clsx";
import Burger from "@/assets/icons/burger.svg?react";
import { BurgerMenu } from "@/components/header/BurgerMenu";
import { Logo } from "@/components/header/Logo";
import { useDarkenBackground } from "@/hooks/useDarkenBackground";
import styles from "./LogoWrapper.module.scss";
import { useTranslation } from "react-i18next";

export function LogoWrapper() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const { t } = useTranslation();

  useDarkenBackground(isMenuOpen);

  return (
    <div className={styles.logoWrapper}>
      <button
        type="button"
        className={clsx(styles.burgerButton, "visible-tablet", "reset-button")}
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-label={t("header.burgerMenu.burgerButton")}
      >
        <Burger aria-hidden="true" />
      </button>
      <Logo />

      {isMenuOpen && <BurgerMenu onClose={closeMenu} />}
    </div>
  );
}
