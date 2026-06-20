import styles from "@/Components/Features/Auth/Auth.module.scss";

function Auth() {
  return (
    <div className={styles.authHover}>
      <a className={styles.auth}>
        <div className="p500">Войти</div>
        <div className="p300">Мой раздел</div>
      </a>
    </div>
  )
}

export default Auth