import styles from './UserMenu.module.scss'
import Cart from "@/components/cart/Cart";
import Favorite from "@/components/favorite/Favorite";
import LangSwitcher from "@/components/Features/LanguageSwitcher/LangSwitcher";
import Auth from "@/components/auth/Auth";

function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <Auth />
      <LangSwitcher className="hidden-tablet"/>
      <Favorite />
      <Cart />
    </div>
  )
}

export default UserMenu
