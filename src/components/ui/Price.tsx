import styles from "./price.module.css";

interface PriceProps {
    amount: number;
    currency?: string;
    className?: string;
}

export default function Price({ amount, currency = "₱", className = "" }: PriceProps) {
    // Format the number with commas
    const formattedAmount = new Intl.NumberFormat("en-US").format(amount);

    return (
        <div className={`${styles.price} ${className}`}>
            <span className={styles.currency}>{currency}</span>
            <span>{formattedAmount}</span>
        </div>
    );
}
