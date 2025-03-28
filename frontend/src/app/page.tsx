import Link from "next/link";
import {
  HomeComponent
} from "@/components";

import { homeOptionStream } from "@/model/homeOptionStream";

import styles from "./styles.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles['content-bg']}>
        <div className={styles['featured-vertical']}>
          <div className={styles['featured-horizontal']}>
            <HomeComponent.Title />

            <div className={styles.cards}>
              {homeOptionStream.map((option) => (
                <Link key={option.title} href={option.path} prefetch>
                  <HomeComponent.Card
                    key={`${option.title}`}
                    title={option.title}
                    subtitle={option.subtitle}
                    icon={option.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}