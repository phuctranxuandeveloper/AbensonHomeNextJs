import { Product } from "@/utils/getProducts";
import Image from "next/image";
import Price from "../Price";
import styles from "./cardItem.module.css";

interface CardItemProps {
    product: Product;
}

export default function CardItem({ product }: CardItemProps) {
    return (
        <div className={styles.cardItem}>
            <div className={styles.cardItemImage}>
                <Image src={product.image} alt={product.name} width={288} height={314} />
            </div>
            <div className={styles.cardItemBottom}>
                <div className={styles.bottomLeft}>
                    <span className={styles.name}>{product.name}</span>
                    <span className={styles.description}>{product.description}</span>
                </div>
                <div className={styles.bottomRight}>
                    <Price amount={product.price} className={styles.price} />
                </div>
            </div>
        </div>
    )
}