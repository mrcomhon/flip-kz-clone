import styles from "@/Components/Features/Auth/Auth.module.scss";
import AuthIcon from "@/assets/icons/account.svg?react"
import {useEffect, useState} from "react";

function Auth() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('darken-bg')
    } else {
      document.body.classList.remove('darken-bg')
    }

    return () => document.body.classList.remove('darken-bg');
  }, [isModalOpen])

  return (
    <div className={styles.authHover}>
      <div className={styles.desktopAuth}>
        <a
          onMouseEnter={() => setIsModalOpen(true)}
          onMouseLeave={() => setIsModalOpen(false)}
          className={styles.auth}
        >
          <div className="p500">Войти</div>
          <div className="p300">Мой раздел</div>
        </a>
        {isModalOpen && (
          <div
            className={styles.dropdownMenu}
            onMouseEnter={() => setIsModalOpen(true)}
            onMouseLeave={() => setIsModalOpen(false)}
          >
            <ul>
              <li>
                <a href="#">Войти / Регистрация</a>
              </li>
              <li>
                <a href="#">Мой раздел</a>
              </li>
              <li>
                <a href="#">Мои заказы</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Помощь</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className={styles.mobileAuth}>
        <a
          href="#"
          className={styles.authIcon}
        >
          <AuthIcon className={styles.icon} />
        </a>
      </div>
    </div>)
}

export default Auth