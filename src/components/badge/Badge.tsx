import clsx from "clsx";
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
  return (
    <Container>
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
            {badge.label}
          </button>
        );
      })}
    </Container>
  );
}
