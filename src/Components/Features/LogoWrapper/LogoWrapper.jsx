import styles from "./LogoWrapper.module.scss";
import Location from "@/Components/Features/Location/Location";
import Logo from "@/Components/Features/Logo/Logo";
import Burger from "@/assets/icons/burger.svg?react"
import clsx from 'clsx'
import {useState} from "react";
import {useDarkenBackground} from "@/hooks/useDarkenBackground";
import BurgerMenu from "@/Components/Layout/Header/Component/BurgerMenu";


function LogoWrapper({LogoClass, LocationClass, BurgerClass}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeButton = () => setIsMenuOpen(true)
  const closeButton = () => setIsMenuOpen(false)

  useDarkenBackground(isMenuOpen)

  return (
    <div className={styles.logoWrapper}>
      <button
        className={clsx(styles.burgerButton, 'visible-tablet', BurgerClass, 'reset-button')}
        onClick={activeButton}
      >
        <Burger />
      </button>
      <Logo className={LogoClass} />
      <Location className={LocationClass} />

      {isMenuOpen && <BurgerMenu onClose={closeButton} />}
    </div>
  )
}

export default LogoWrapper