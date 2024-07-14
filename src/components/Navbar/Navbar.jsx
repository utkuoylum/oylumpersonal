"use client";

import { useId, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [ hoveredItem, setHoveredItem ] = useState(null);

  const id = useId();

  return (
    <nav className={styles.navbar} onMouseLeave={()=>setHoveredItem(null)}>
      <ul className={styles.items}>
        {LINKS.map(({ slug, label, href }) => {
          return (
            <li key={slug} className={styles.item}>
                {hoveredItem === slug && (
                    <motion.div layoutId={id} className={styles.hoveredBackdrop} initial={{borderRadius: 16}}/>
                )}
              <Link className={styles.link} href={href} onMouseEnter={()=>setHoveredItem(slug)}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const LINKS = [
  {
    slug: "home",
    label: "Home",
    href: "/",
  },
  {
    slug: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    slug: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    slug: "contact",
    label: "Contact",
    href: "/contact",
  },
];
