import styles from "@/Components/Features/Auth/Auth.module.scss";
import {useEffect, useState} from "react";
import DesktopAuth
  from "@/Components/Features/Auth/Components/DesktopAuth/DesktopAuth";
import MobileAuth
  from "@/Components/Features/Auth/Components/MobileAuth/MobileAuth";

function Auth() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMenu = () => setIsModalOpen(true)
  const closeMenu = () => setIsModalOpen(false)

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
      <DesktopAuth
        onOpen={openMenu}
        onClose={closeMenu}
        isModalOpen={isModalOpen}
      />

      <MobileAuth />
    </div>)
}

export default Auth