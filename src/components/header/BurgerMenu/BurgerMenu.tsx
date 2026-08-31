import clsx from "clsx";
import FocusLock from "react-focus-lock";
import profileImg from "@/assets/png/profile.jpg";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { MenuList } from "@/components/header/MenuList";
import { CloseButton } from "@/components/ui/CloseButton";
import styles from "./BurgerMenu.module.scss";
import type { KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";

type BurgerMenuProps = {
  onClose: () => void;
};

export function BurgerMenu({ onClose }: BurgerMenuProps) {
  const { t } = useTranslation();

  const onEscape = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <FocusLock>
        <div
          className={styles.burgerMenu}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={onEscape}
        >
          <div className={styles.header}>
            <LangSwitcher />
            <CloseButton onClose={onClose} />
          </div>
          <a href="#" className={styles.auth}>
            <img
              src={profileImg}
              className={clsx("img-circle")}
              alt=""
              width="64"
              height="64"
              loading="lazy"
            />
            <strong>{t("header.auth.loginOrRegister")}</strong>
          </a>
          <MenuList />
        </div>
      </FocusLock>
    </div>
  );
}
