import React from 'react';
import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
