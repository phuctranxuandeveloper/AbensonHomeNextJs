import styles from "./page.module.css";
import Slider from "@/components/layout/Slider";
import TopProduct from "@/components/layout/TopProduct";
import BestSeller from "@/components/layout/BestSeller";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Slider />
      <TopProduct />
      <BestSeller />
      <div className={styles.brand}>
        <ul>
          <li>
            <Image
              src="/brand/brand1.png"
              alt="Brand 1"
              width={202}
              height={50.28}
              style={{ objectFit: "cover" }}
            />
          </li>
          <li>
            <Image
              src="/brand/brand2.png"
              alt="Brand 2"
              width={166}
              height={66}
              style={{ objectFit: "cover" }}
            />
          </li>
          <li>
            <Image
              src="/brand/brand3.png"
              alt="Brand 3"
              width={86}
              height={98}
              style={{ objectFit: "cover" }}
            />
          </li>
          <li>
            <Image
              src="/brand/brand4.png"
              alt="Brand 4"
              width={136}
              height={72}
              style={{ objectFit: "cover" }}
            />
          </li>
          <li>
            <Image
              src="/brand/brand5.png"
              alt="Brand 5"
              width={127}
              height={84}
              style={{ objectFit: "cover" }}
            />
          </li>
          <li>
            <Image
              src="/brand/brand6.png"
              alt="Brand 6"
              width={100}
              height={87}
              style={{ objectFit: "cover" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
