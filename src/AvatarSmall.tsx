import React from 'react';
import styles from './Avatar.module.css';

function AvatarSmall({ imgUrl }) {
  return (
    <img
      src='https://via.placeholder.com/36'
      alt={imgUrl}
      className={styles.avatarSmall}
    />
  );
}

export default AvatarSmall;
