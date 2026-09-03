import { useTranslation } from "react-i18next";
import SearchIcon from "@/assets/icons/search.svg?react";
import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  value: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ value, onSearchChange }: SearchBarProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.searchBar}>
      <form
        onSubmit={(event) => event.preventDefault()}
        name="search"
        className={styles.searchForm}
      >
        <input
          className={styles.searchInput}
          type="search"
          name="search"
          placeholder={t("header.search.placeholder")}
          aria-label={t("header.search.placeholder")}
          value={value}
          onChange={onSearchChange}
        />
        <button
          className={styles.buttonSearch}
          title={t("header.search.title")}
          type="submit"
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
