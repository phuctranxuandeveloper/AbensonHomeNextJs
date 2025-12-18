import styles from "./page.module.css";
import Slider from "@/components/layout/Slider";
import TopProduct from "@/components/layout/TopProduct";
import BestSeller from "@/components/layout/BestSeller";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Slider />
      <TopProduct />
      <BestSeller />
    </div>
  );
}
