import AuthIcon from "@/assets/icons/account.svg?react";
import styles from "./MobileAuth.module.scss";

export function MobileAuth() {
  return (
    <div className={styles.mobileAuth}>
      <a href="#" className={styles.authIcon}>
        <AuthIcon className={styles.icon} />
      </a>
    </div>
  );
}
