import styles from '@/Components/Features/Auth/Components/MobileAuth/MobileAuth.module.scss'
import AuthIcon from "@/assets/icons/account.svg?react";

function MobileAuth() {
  return (
    <div className={styles.mobileAuth}>
      <a
        href="#"
        className={styles.authIcon}
      >
        <AuthIcon className={styles.icon} />
      </a>
    </div>
  )
}

export default MobileAuth