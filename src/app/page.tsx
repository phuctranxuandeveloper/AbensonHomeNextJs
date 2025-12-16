import styles from "./page.module.css";
import Slider from "@/components/layout/Slider";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Slider />
    </div>
  );
}
