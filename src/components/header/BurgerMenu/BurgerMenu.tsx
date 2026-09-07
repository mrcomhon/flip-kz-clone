import clsx from "clsx";
import FocusLock from "react-focus-lock";
import profileImg from "@/assets/png/profile.jpg";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { MenuList } from "@/components/header/MenuList";
import { CloseButton } from "@/components/ui/CloseButton";
import styles from "./BurgerMenu.module.scss";
import { useEffect, type KeyboardEvent } from "react";
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

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;

      if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style")
      }
    };
  }, []);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <FocusLock returnFocus={true}>
        <div
          className={styles.burgerMenu}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={onEscape}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modalTitle"
        >
          <h2 id="modalTitle" className="visually-hidden">
            {t("header.burgerMenu.modalTitle")}
          </h2>
          <div className={styles.header}>
            <LangSwitcher />
            <CloseButton
              onClose={onClose}
              ariaLabel={t("header.burgerMenu.closeBurgerButton")}
            />
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
