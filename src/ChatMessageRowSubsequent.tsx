import React from 'react';
import { dateConversionISOtoShortTime as convertDate } from './dateConversionHelpers';
import styles from './ChatMessageRow.module.css';

function ChatMessageRowSubsequent({
  message,
}: ChatMessageRowSubsequentProps): JSX.Element {
  const { text, timestamp } = message;

  return (
    <div className={styles.messageRow}>
      <div className={styles.messageRowLeft}>
        <div className={`${styles.timestamp} ${styles.hideUntilHover}`}>
          {convertDate(timestamp)}
        </div>
      </div>
      <div className={styles.messageRowRight}>
        <div className={styles.nameTimeRow}></div>
        <div className={styles.messageBody}>{text}</div>
      </div>
    </div>
  );
}

interface ChatMessageRowSubsequentProps {
  message: {
    text: string;
    timestamp: string;
  };
}

export default ChatMessageRowSubsequent;
