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
  const activeButton = () => setIsMenuOpen(true);
  const closeButton = () => setIsMenuOpen(false);
  const { t } = useTranslation();

  useDarkenBackground(isMenuOpen);

  return (
    <div className={styles.logoWrapper}>
      <button
        className={clsx(styles.burgerButton, "visible-tablet", "reset-button")}
        onClick={activeButton}
        aria-haspopup="dialog"
        aria-label={t("header.burgerMenu.burgerButton")}
      >
        <Burger />
      </button>
      <Logo />

      {isMenuOpen && <BurgerMenu onClose={closeButton} />}
    </div>
  );
}
