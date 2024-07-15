"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import GridLayout from "@/components/GridLayout/GridLayout";

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
      <GridLayout />
    </main>
  );
}
