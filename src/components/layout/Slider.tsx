"use client";

import styles from "./slider.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;
    const autoPlayInterval = 5000; // 5 giây

    // Auto-play effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, autoPlayInterval);

        // Cleanup khi component unmount
        return () => clearInterval(timer);
    }, []);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className={styles.slider}>
            <div
                className={styles.sliderImage}
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
                <div className={styles.slide}>
                    <Image src="/header/slider/slider1.png" alt="slider1" fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.slide}>
                    <Image src="/header/slider/slider2.png" alt="slider2" fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.slide}>
                    <Image src="/header/slider/slider3.png" alt="slider3" fill style={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className={styles.sliderNav}>
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        className={`${styles.sliderNavDot} ${currentSlide === index ? styles.active : ''}`}
                        onClick={() => handleSlideChange(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}