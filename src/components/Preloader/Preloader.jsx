import styles from './Preloader.module.css'
import {motion} from 'framer-motion'
import { opacity, slideUp } from './anim'
import { useEffect, useState } from 'react'
 
export default function Preloader() {
    const [index, setIndex] = useState(0)
    const [dimension, setDimension] = useState({width: 0, height:0});
    const words = [ "Hello", "Hallo", "Merhaba", "Bonjour", "你好", "¿Qué tal?", "Namaste"]


    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect(()=>{
        if(index === words.length-1) return;
        setTimeout(()=> {
            setIndex(index+1)
        }, index == 0 ? 1000 : 150)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {initial: {
        d: initialPath,
    },
    exit: {
        targetPath,
        transition: {
            duration: 0.8, ease: [0.76, 0, 0.24, 1], delay:0.2
        }
    }
}
return (
<motion.div className={styles.introduction} initial='initial' exit= 'exit' variants={slideUp}>

   { dimension.height > 0 && <>
    <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p> 
    <svg>
        <motion.path variants={curve} d={initialPath}></motion.path>
    </svg>
    </>}
  
</motion.div>
)}