import { useEffect } from 'react';
import styles from './HighlightCards.module.css'
 
export default function HighlightCards() {


    useEffect(() => {
        const updateCursor = ({ x, y }) => {
          document.documentElement.style.setProperty('--x', x);
          document.documentElement.style.setProperty('--y', y);
        };
    
        document.body.addEventListener('pointermove', updateCursor);
    
        // Cleanup event listener on component unmount
        return () => {
          document.body.removeEventListener('pointermove', updateCursor);
        };
      }, []);
    
      return (
        <main className={styles.main}>
          <ul className={styles.ul}>
            <li className={styles.card}><span className={styles.span}>1</span></li>
            <li className={styles.card}><span className={styles.span}>2</span></li>
            <li className={styles.card}><span className={styles.span}>3</span></li>
            <li className={styles.card}><span className={styles.span}>4</span></li>
            <li className={styles.card}><span className={styles.span}>5</span></li>
            <li className={styles.card}><span className={styles.span}>6</span></li>
            <li className={styles.card}><span className={styles.span}>7</span></li>
            <li className={styles.card}><span className={styles.span}>8</span></li>
            <li className={styles.card}><span className={styles.span}>9</span></li>
          </ul>
        </main>
      );
}