import styles from './GridLayout.module.css'
 
export default function GridLayout() {
return (
<div className={styles.container}>
    <div className={styles.bio}>bio</div>
    <div className={styles.social}>social</div>
    <div className={styles.stack}>stack</div>
    <div className={styles.tools}>tools</div>
</div>
)}