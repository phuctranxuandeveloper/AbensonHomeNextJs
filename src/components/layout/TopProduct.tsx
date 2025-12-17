import styles from "./topProduct.module.css";
import BentoItem from "@/components/ui/home/BentoItem";

export default function TopProduct() {
    return (
        <div className={styles.topProduct}>
            <div className={styles.topProductTitle}>
                <span className={styles.title}>Check out our Top Products!</span>
                <span className={styles.seeAll}>Shop All</span>
            </div>
            <div className={styles.topProductContent}>
                <BentoItem text="Sofas" imageSrc="/header/slider/slider1.png" />
                <BentoItem text="Bed" imageSrc="/header/slider/slider2.png" />
                <BentoItem text="Mattress" imageSrc="/header/slider/slider3.png" />
                <BentoItem text="Sofa bed" imageSrc="/header/slider/slider1.png" />
                <BentoItem text="Recliner" imageSrc="/header/slider/slider2.png" />
            </div>
        </div>
    )
}