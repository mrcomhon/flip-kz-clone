import styles from "@/Components/Features/Auth/Auth.module.scss";
import AuthIcon from "@/assets/icons/account.svg?react"

function Auth() {
  return (
    <div className={styles.authHover}>
      <div className={styles.desktopAuth}>
        <a className={styles.auth}>
          <div className="p500">Войти</div>
          <div className="p300">Мой раздел</div>
        </a>
      </div>
      <div className={styles.mobileAuth}>
        <a href="#" className={styles.authIcon}>
          <AuthIcon className={styles.icon}/>
        </a>
      </div>
    </div>
  )
}

export default Auth