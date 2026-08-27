import styles from "./AuthDropdown.module.scss";

export function AuthDropdown() {
  return (
    <div className={styles.dropdownMenu}>
      <ul>
        <li>
          <a href="#">Войти / Регистрация</a>
        </li>
        <li>
          <a href="#">Мой раздел</a>
        </li>
        <li>
          <a href="#">Мои заказы</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
        <li>
          <a href="#">Помощь</a>
        </li>
      </ul>
    </div>
  );
}
