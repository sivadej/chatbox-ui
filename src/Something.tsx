import React from 'react';
import './App.css';

import styles from './Something.module.css';

function Something() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.fixedContainerTop}>Chatbox info</div>
        <div className={styles.contentWrapper}>
          <div className={styles.overflowContainer}>
            <div className={styles.overflowContent}>
              Chat Messages
              <ul>
                <li>chat item</li>
                <li>chat item</li>
                <li>chat item</li>
                <li>chat item</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.fixedContainerBottom}>Chat Input</div>
      </div>
    </div>
  );
}

export default Something;
