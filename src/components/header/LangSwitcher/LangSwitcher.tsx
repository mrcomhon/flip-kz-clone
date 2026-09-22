import clsx from "clsx";
import styles from "./LangSwitcher.module.scss";
import { useId } from "react";
import { useTranslation } from "react-i18next";

type LangSwitcherProps = {
  className?: string;
};

export function LangSwitcher({ className }: LangSwitcherProps) {
  const kkId = useId();
  const ruId = useId();
  const languageGroupName = useId();
  const { i18n } = useTranslation();

  return (
    <div className={clsx(styles.langSwitcherWrapper, className)}>
      <div className={styles.langSwitcher}>
        <input
          id={kkId}
          name={languageGroupName}
          type="radio"
          onChange={() => i18n.changeLanguage("kk")}
          checked={i18n.resolvedLanguage === "kk"}
        />
        <label htmlFor={kkId}>Қаз</label>
        <input
          id={ruId}
          name={languageGroupName}
          type="radio"
          onChange={() => i18n.changeLanguage("ru")}
          checked={i18n.resolvedLanguage === "ru"}
        />
        <label htmlFor={ruId}>Рус</label>
      </div>
    </div>
  );
}
