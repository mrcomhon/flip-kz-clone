import styles
  from "@/Components/Features/Auth/Components/DesktopAuth/DesktopAuth.module.scss";
import AuthDropdown
  from "@/Components/Features/Auth/Components/AuthDropdown/AuthDropdown";


function DesktopAuth({onOpen, onClose, isModalOpen}) {
  const handleBlur = (event) => {
    if (event.relatedTarget && event.currentTarget.contains(event.relatedTarget)) {
      return;
    }

    onClose();
  }

  return (
    <div
      className={styles.desktopAuth}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={handleBlur}
    >
      <button
        className={`${styles.auth} reset-button`}
      >
        <div className="p500">Войти</div>
        <div className="p300">Мой раздел</div>
      </button>
      {isModalOpen &&
        <div onFocus={onOpen}>
          <AuthDropdown />
        </div>
      }
    </div>
  )
}

export default DesktopAuth