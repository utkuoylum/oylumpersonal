import styles from './BioPage.module.css'
 
export default function BioPage() {
return (
<div className={styles.container}>
  <header className={styles.header}>
    <div className={styles.islandContainer}>
      <div className={styles.island}>
        <div className={styles.islandBar} />
        <div className={styles.avatar}>
          <img
            src="/utkupp.png"
            alt="Your avatar"
          />
        </div>
      </div>
    </div>
    <h1>Etem Utku Oylum.</h1>
    <h2>Frontend Developer</h2>
  </header>
  <svg
      width="0"
      height="0"
      className={styles.srOnly}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="old-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <filter id="fancy-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
    
  </div>

)}