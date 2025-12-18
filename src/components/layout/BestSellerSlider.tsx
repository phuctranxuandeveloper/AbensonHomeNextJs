"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./bestSeller.module.css";
import CardItem from "../ui/home/CardItem";
import { Product } from "@/utils/getProducts";

interface BestSellerSliderProps {
    products: Product[];
}

export default function BestSellerSlider({ products }: BestSellerSliderProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className={styles.bestSellerContent}>
            <div className={styles.bestSellerBanner}>
                <Image src={'/bestSeller/banner.png'} alt={'Best Seller Banner'} width={600} height={600} />
            </div>
            <div
                className={styles.bestSellerCards}
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    scrollBehavior: isDragging ? 'auto' : 'smooth', // Disable smooth scroll during drag
                    scrollSnapType: isDragging ? 'none' : 'x mandatory' // Disable snap during drag
                }}
            >
                {products.map((product) => (
                    <CardItem key={product.id} product={product} />
                ))}
            </div>
            <button className={styles.nextButton} onClick={scrollNext} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
