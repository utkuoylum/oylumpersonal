"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import GridLayout from "@/components/GridLayout/GridLayout";
import SlidingCards from "@/components/SlidingCards/SlidingCards";
import BioPage from "@/components/BioPage/BioPage";

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
      <BioPage />
      <GridLayout />
      <SlidingCards />
      fgdgdfgdfg
      dfgdfgdfgdf
      dfgdfgdfgfdg
      dfgdfgdfgfdgdf
      dfgdfgfd
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
      <div className={styles.ff}>sdfsdfdsfdsfdsf</div>
    </main>
  );
}
