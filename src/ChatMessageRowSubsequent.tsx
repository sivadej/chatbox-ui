import React from 'react';
import { dateConversionISOtoShortTime as convertDate } from './dateConversionHelpers';
import styles from './ChatMessageRow.module.css';

function ChatMessageRow({ message }) {
  const { text, timestamp } = message;

  return (
    <div className={styles.messageRow}>
      <div className={styles.timestamp}>{convertDate(timestamp)}</div> {text}
    </div>
  );
}

export default ChatMessageRow;
