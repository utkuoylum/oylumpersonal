// next image
import Image from 'next/image';
import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={styles.avatarContainer}>
      <Image
        src={'/nobgpp.png'}
        width={737}
        height={678}
        alt=''
        className={styles.image}
      />
    </div>
  );
};

export default Avatar;
