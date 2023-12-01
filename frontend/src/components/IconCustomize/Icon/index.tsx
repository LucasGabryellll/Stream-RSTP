import { IconType } from "@react-icons/all-files";

import styles from "./styles.module.css";
import { SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
    IconElement: IconType;
}

export function Icon(props: IconProps) {
    return (
        <props.IconElement 
            className={`${styles['icon']} ${props.className}`}
        />
    );
}