'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image from Next.js
import styles from './Socials.module.css';

const SocialButtons = () => {
  const [isActive, setIsActive] = useState(false);

  const socialPlatforms = [
    {
      title: "Instagram",
      href: "#",
      imgSrc: "/instagram.svg",
      transform: "translateX(-5rem)",
      hoverBackground: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
    },
    {
      title: "Twitter",
      href: "#",
      imgSrc: "/twitter.svg",
      transform: "translateY(-5rem)",
      hoverBackground: "#1D9BF0"
    },
    {
      title: "LinkedIn",
      href: "#",
      imgSrc: "/linkedin.svg",
      transform: "translateX(5rem)",
      hoverBackground: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
    },
    {
      title: "Youtube",
      href: "#",
      imgSrc: "/youtube.svg",
      transform: "translateY(5rem)",
      hoverBackground: "#e52d27"
    }
  ];

  const toggleSocials = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.socialsWrapper}>
      <button className={styles.shareButton} onClick={toggleSocials}>
        <Image 
          src={isActive ? '/close.svg' : '/share.svg'} 
          alt="Share On Socials"
          width={32}
          height={32} // Assuming 2rem is 32px, adjust as needed
        />
      </button>
      {isActive && (
        <ul className={styles.socialsMenu}>
          {socialPlatforms.map((platform, index) => (
            <li
              key={index}
              className={styles.social}
              style={{ transform: platform.transform }}
            >
              <Link href={platform.href} title={platform.title}>
                <Image 
                  src={platform.imgSrc}
                  alt={platform.title}
                  width={32}
                  height={32} // Assuming 2rem is 32px, adjust as needed
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SocialButtons;
