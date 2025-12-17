import styles from "./bentoItem.module.css";
import Image from "next/image";

interface BentoItemProps {
    text: string;
    imageSrc: string;
}

export default function BentoItem({ text, imageSrc }: BentoItemProps) {
    return (
        <div className={styles.bentoItem}>
            <span className={styles.itemText}>{text}</span>
            <Image src={imageSrc} alt={text} fill style={{ objectFit: "cover" }} />
        </div>
    )
}