import React from 'react';
import { dateConversionISOtoShortTime as convertDate } from './dateConversionHelpers';
import styles from './ChatMessageRow.module.css';
import { IMessage } from './Channel';

function ChatMessageRowSubsequent({
  message,
}: ChatMessageRowSubsequentProps): JSX.Element {
  const { text, timestamp } = message;

  return (
    <div className={styles.messageRow}>
      <div className={styles.messageRowLeft}>
        <div className={`${styles.timestamp} ${styles.hidden}`}>
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
  message: IMessage;
}

export default ChatMessageRowSubsequent;
