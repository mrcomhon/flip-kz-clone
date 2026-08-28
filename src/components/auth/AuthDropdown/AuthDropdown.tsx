import styles from "./AuthDropdown.module.scss";

type DropdownMenuItem = {
  id: string;
  href: string;
  label: string;
};

export function AuthDropdown() {
  const menuItems: DropdownMenuItem[] = [
    {
      id: "register",
      href: "#",
      label: "Войти / Регистрация",
    },
    {
      id: "section",
      href: "#",
      label: "Мой раздел",
    },
    {
      id: "orders",
      href: "#",
      label: "Мои заказы",
    },
    {
      id: "contacts",
      href: "#",
      label: "Контакты",
    },
    {
      id: "help",
      href: "#",
      label: "Помощь",
    },
  ];

  return (
    <div className={styles.menuItems}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
