import clsx from "clsx";
import styles from "./LangSwitcher.module.scss";

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher({ className }: LangSwitcherProps) {
  return (
    <div className={clsx(styles.langSwitcherWrapper, className)}>
      <div className={styles.langSwitcher}>
        <input id="kz" name="lang" value="kz" type="radio" />
        <label htmlFor="kz">Қаз</label>
        <input id="ru" name="lang" value="ru" type="radio" />
        <label htmlFor="ru">Рус</label>
      </div>
    </div>
  );
}
