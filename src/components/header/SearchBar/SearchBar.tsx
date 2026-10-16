import { useTranslation } from "react-i18next";
import SearchIcon from "@/assets/icons/search.svg?react";
import styles from "./SearchBar.module.scss";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Form from "next/form";

export function SearchBar() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <div className={styles.searchBar}>
      <Form action="/search" name="search" className={styles.searchForm}>
        <input
          className={styles.searchInput}
          type="search"
          name="search"
          placeholder={t("header.search.placeholder")}
          aria-label={t("header.search.placeholder")}
          value={value}
          onChange={handleChange}
        />
        {value && (
          <button
            type="button"
            className={styles.clearBtn}
            aria-label={t("header.search.clearButton")}
            onClick={onClear}
          >
            <ImCross aria-hidden="true" />
          </button>
        )}
        <button
          className={styles.buttonSearch}
          title={t("header.search.title")}
          aria-label={t("header.search.title")}
          type="submit"
        >
          <SearchIcon aria-hidden="true" />
        </button>
      </Form>
    </div>
  );
}
