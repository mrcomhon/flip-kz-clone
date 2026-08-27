import { useState } from "react";
import clsx from "clsx";
import Burger from "@/assets/icons/burger.svg?react";
import { BurgerMenu } from "@/components/header/BurgerMenu";
import { Location } from "@/components/header/Location";
import { Logo } from "@/components/header/Logo";
import { useDarkenBackground } from "@/hooks/useDarkenBackground";
import styles from "./LogoWrapper.module.scss";

type LogoWrapperProps = {
  LogoClass?: string;
  LocationClass?: string;
  BurgerClass?: string;
};

export function LogoWrapper({
  LogoClass,
  LocationClass,
  BurgerClass,
}: LogoWrapperProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeButton = () => setIsMenuOpen(true);
  const closeButton = () => setIsMenuOpen(false);

  useDarkenBackground(isMenuOpen);

  return (
    <div className={styles.logoWrapper}>
      <button
        className={clsx(
          styles.burgerButton,
          "visible-tablet",
          BurgerClass,
          "reset-button",
        )}
        onClick={activeButton}
      >
        <Burger />
      </button>
      <Logo className={LogoClass} />
      <Location className={LocationClass} />

      {isMenuOpen && <BurgerMenu onClose={closeButton} />}
    </div>
  );
}
