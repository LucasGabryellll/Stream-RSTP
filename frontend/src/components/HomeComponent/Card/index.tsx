import Image from "next/image";

import { OptionStreamType } from "@/types/OptionStreamType";

import styles from "./styles.module.css";

export function Card({ icon, subtitle, title }: Omit<OptionStreamType, "path">) {

  return (
    <div className={`${styles['stream-option']} group`}>
      <div className={styles.card}>
        <div className={styles.information}>
          <Image alt={`icone-${title}`} src={icon} height={60} width={60} />

          <div className={styles.description}>
            <p className="text-text-primary font-bold text-[40px]">{title}</p>
            <p className="text-text-muted font-medium text-[20px]">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Featured Element  */}
      <div className={`${styles["card-select-blur"]} group-hover:block`} />
      <div className={`${styles["indicator-card-select"]} group-hover:block`} />
    </div>
  );
}