import styles from "./bestSeller.module.css";
import { getBestSellers } from "@/utils/getProducts";
import BestSellerSlider from "./BestSellerSlider";

export default function BestSeller() {
    const bestSellers = getBestSellers();
    return (
        <div className={styles.bestSeller}>
            <div className={styles.bestSellerTitle}>
                <span className={styles.title}>Best Sellers</span>
                <span className={styles.seeAll}>Shop All</span>
            </div>
            <BestSellerSlider products={bestSellers} />
        </div>
    )
}