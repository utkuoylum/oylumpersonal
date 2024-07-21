import styles from './Ledboard.module.css'
import clsx from 'clsx';
import {useState, useEffect} from 'react'
 

const charMap = {
    F: [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    R: [
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 0],
      [1, 0, 1, 0],
      [1, 0, 0, 1],
    ],
    O: [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ],
    N: [
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 0, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
    ],
    T: [
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ],
    E: [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 1, 1],
    ],
    D: [
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 0],
    ],
    V: [
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
    ],
    L: [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 1, 1],
    ],
    " ": [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ],
  };

function createMatrix(rows, cols) {
  return Array(rows)
    .fill("")
    .map(() => Array(cols).fill(false));
}


function createBoard(word) {
  const rows = 15;
  const wordArray = word.trim().toUpperCase().split("");
  const cols =
    wordArray
      // +1 for extra padding
      .map((char) => (charMap[char] || charMap[" "])[0].length + 1)
      .reduce((a, b) => a + b, 1) * 2;

  const matrix = createMatrix(rows, cols);
  const startRow = 2;
  let startCol = 2;

  for (const charIndex in wordArray) {
    const char = wordArray[charIndex];
    const charPattern = charMap[char] || charMap[" "];

    for (const rowIndex in charPattern) {
      const row = charPattern[rowIndex];
      for (const colIndex in row) {
        const isLit = row[colIndex];
        if (isLit) {
          matrix[startRow + +rowIndex * 2][startCol + +colIndex * 2] = true;
        }
      }
    }

    // +1 for extra spacing
    startCol += (charPattern[0].length + 1) * 2;
  }

  return {
    rows,
    cols,
    matrix,
  };
}



export default function LEDBoard({
  word = "FRONTEND DEV",
}) {
  const [{ rows, cols, matrix }, setBoard] = useState(createBoard(word));

  useEffect(() => setBoard(createBoard(word)), [word]);

  const [isHovering, setIsHovering] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    if (isHovering) {
      return;
    }

    const interval = setInterval(() => {
      // Force a re-render so the random dots are animated
      setForceUpdate((current) => current + 1);
      // max animation duration is 3000ms (2000ms + 1000ms)
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering]);



  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <svg className={styles.svgItem} viewBox={`0 0 ${cols - 1} ${rows}`}>
        {matrix.map((row, rowIndex) =>
          row.map((isLit, colIndex) => {
            // Hide all odd rows and columns
            if (rowIndex % 2 === 1 || colIndex % 2 === 1) {
              return null;
            }

            const shouldAnimate = !isHovering && isLit && Math.random() > 0.8;
            let delay = 0;
            if (shouldAnimate) {
              delay = Math.floor(Math.random() * 1000);
            }

            const svgClass = clsx(
                styles.circle,
                isLit && isHovering && styles.litCircle,
                shouldAnimate && styles.animateCircle
            )

         

            return (
              <circle
                key={`${rowIndex}-${colIndex}`}
                cx={colIndex + 0.25}
                cy={rowIndex + 0.25}
                r={0.25}
                style={{
                  transitionDelay: !isHovering ? `${colIndex * 15}ms` : "0ms",
                  animationDuration: "2000ms",
                  animationDelay: `${delay}ms`,
                }}
                className={svgClass}
              />
            );
          }),
        )}
      </svg>
    </div>
  );
}
