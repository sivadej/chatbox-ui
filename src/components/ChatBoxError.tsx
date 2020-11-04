import React from 'react';
import styles from './ChatBoxUI.module.css';

const DEFAULT_ERROR_MSG = 'An error occurred while loading this chat...';

interface ChatBoxErrorProps {
  errorMsg?: string;
}

function ChatBoxError(props: ChatBoxErrorProps) {
  const { errorMsg = DEFAULT_ERROR_MSG } = props;
  return (
    <div className={styles.error}>
      <div className={styles.errorText}>{errorMsg}</div>
    </div>
  );
}

export default ChatBoxError;
