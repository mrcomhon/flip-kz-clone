import clsx from "clsx";
import { Container } from "../layout/Container";
import styles from "./Badge.module.scss";

type BadgeType = {
  label: string;
  key: string;
};

type BadgeProps = {
  value: string;
  onBadge: (key: string) => void;
};

const badges: BadgeType[] = [
  {
    label: "all",
    key: "all",
  },
  {
    label: "lego",
    key: "lego",
  },
  {
    label: "clothes",
    key: "clothes",
  },
  {
    label: "extra",
    key: "extra",
  },
];

export function Badge({ value, onBadge }: BadgeProps) {
  return (
    <Container>
      {badges.map((badge) => {
        const isActive = value === badge.key;

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
