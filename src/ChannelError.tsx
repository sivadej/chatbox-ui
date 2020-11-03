import React from 'react';
import styles from './Channel.module.css';

const DEFAULT_ERROR_MSG = 'An error occurred while loading this chat...';

interface ChannelErrorProps {
  errorMsg?: string;
}

function ChannelError(props: ChannelErrorProps) {
  const { errorMsg = DEFAULT_ERROR_MSG } = props;
  return (
    <div className={styles.error}>
      <div className={styles.errorText}>{errorMsg}</div>
    </div>
  );
}

export default ChannelError;
