import clsx from "clsx";
import { ReactNode } from 'react';
import styles from "./Container.module.scss"; 

type containerProps = {
    children: ReactNode,
    className?: string;
}

export function Container({children, className}: containerProps) {
    return <div className={clsx(styles.container, className)}>{children}</div>;
}
