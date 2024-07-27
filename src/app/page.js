"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import GridLayout from "@/components/GridLayout/GridLayout";
import SlidingCards from "@/components/SlidingCards/SlidingCards";
import BioPage from "@/components/BioPage/BioPage";
import LEDBoard from "@/components/Ledboard/Ledboard";
import Button from "@/components/Button/Button";
import HighlightCards from "@/components/HighlightCards/HighlightCards";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  });
  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      {/* <BioPage /> */}
      {/* <GridLayout /> */}
      {/* <SlidingCards /> */}
      {/* <LEDBoard /> */}
      {/* <div className={styles.gridContainer}>
        <div className={styles.gridCol}>
          <Button />
        </div>
        <div className={styles.gridCol}></div>
        <div className={styles.gridCol}></div>
      </div> */}
      <HighlightCards />
      
    </main>
  );
}
