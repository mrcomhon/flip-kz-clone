import styles from "@/Components/Features/Auth/Components/DesktopAuth/DesktopAuth.module.scss";
import AuthDropdown
  from "@/Components/Features/Auth/Components/AuthDropdown/AuthDropdown";


function DesktopAuth({onOpen, onClose, isModalOpen}) {
  return (
    <div
      className={styles.desktopAuth}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <a
        className={styles.auth}
      >
        <div className="p500">Войти</div>
        <div className="p300">Мой раздел</div>
      </a>
      {isModalOpen && (<AuthDropdown />)}
    </div>
  )
}

export default DesktopAuth