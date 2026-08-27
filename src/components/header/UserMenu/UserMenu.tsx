import { Auth } from "@/components/auth/Auth";
import { Cart } from "@/components/header/Cart";
import { Favorite } from "@/components/header/Favorite";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import styles from "./UserMenu.module.scss";

export function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <Auth />
      <LangSwitcher className="hidden-tablet" />
      <Favorite />
      <Cart />
    </div>
  );
}
