import FavoriteIcon from "@/assets/icons/favourite.svg?react";
import styles from "./Favorite.module.scss";

export function Favorite() {
  return(
    <a className={styles.favorite} href="#">
      <FavoriteIcon className={styles.icon}/>
    </a>
  )
}
