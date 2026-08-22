import styles from '@/components/Layout/Header/Component/BurgerMenu.module.scss'
import CloseButton from "@/components/UI/CloseButton/CloseButton";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import profileImg from "@/assets/png/profile.jpg"
import clsx from "clsx";
import MenuList from "@/components/Layout/Header/Component/MenuList";
import FocusLock from 'react-focus-lock'

function BurgerMenu({onClose}) {
  const onEscape = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
    >
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
          <a
            href="#"
            className={styles.auth}
          >
            <img
              src={profileImg}
              className={clsx('img-circle')}
              alt=""
              width="64"
              height="64"
              loading="lazy"
            />
            <strong>Войти / Регистрация</strong>
          </a>
          <MenuList />
        </div>
      </FocusLock>
    </div>
  )
}

export default BurgerMenu
