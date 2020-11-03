import React from 'react';
import styles from './Channel.module.css';

function ChannelError() {
  return (
    <div className={styles.error}>
      <div className={styles.errorText}>
        An error occurred while loading this chat...
      </div>
    </div>
  );
}

export default ChannelError;
