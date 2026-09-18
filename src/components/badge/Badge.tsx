import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/layout/Container";
import styles from "./Badge.module.scss";
import productSections from "@/data/productData";

type BadgeType = {
  label: string;
  key: string;
};

type BadgeProps = {
  value: string[];
  onBadge: (key: string) => void;
};

const badges: BadgeType[] = [
  {
    label: "all",
    key: "all",
  },
  ...productSections.map((section) => ({
    label: section.name,
    key: section.key,
  })),
];

export function Badge({ value, onBadge }: BadgeProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={styles.list}>
        {badges.map((badge) => {
          const isActive =
            badge.key === "all" ? value.length === 0 : value.includes(badge.key);

          return (
            <button
              key={badge.key}
              className={clsx(styles.button, isActive && styles.isActive)}
              onClick={() => onBadge(badge.key)}
              type="button"
            >
              {t(`badge.${badge.key}`, { defaultValue: badge.label })}
            </button>
          );
        })}
      </div>
    </Container>
  );
}
