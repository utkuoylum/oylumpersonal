import { useEffect } from 'react';
import styles from './HighlightCards.module.css'
 
export default function HighlightCards() {


    useEffect(() => {
        const updateCursor = ({ x, y }) => {
          document.documentElement.style.setProperty('--x', x);
          document.documentElement.style.setProperty('--y', y);
        };
    
        document.body.addEventListener('pointermove', updateCursor);
    
        return () => {
          document.body.removeEventListener('pointermove', updateCursor);
        };
      }, []);
    
      return (
        <main className={styles.main}>
          <ul className={styles.ul}>
            {Array.from({ length: 9 }, (v, i) => i + 1).map((num, i) => {
              return (
                <li key={i} className={styles.card}><span className={styles.span}>{num}</span></li>
              )
            })}
          </ul>
        </main>
      );
}