import React from 'react';
import AvatarSmall from './AvatarSmall';
import { dateConversionISOtoTime as convertDate } from './dateConversionHelpers';
import styles from './ChatMessageRow.module.css';

function ChatMessageRow({ message }) {
  const { text, timestamp, displayName, avatarImg } = message;

  return (
    <div className={styles.messageRow}>
      <div className={styles.messageRowLeft}>
        <AvatarSmall imgUrl={avatarImg} />
      </div>
      <div className={styles.messageRowRight}>
        <div className={styles.nameTimeRow}>
          <div className={styles.displayName}>{displayName}</div>
          <div className={styles.timestamp}>{convertDate(timestamp)}</div>
        </div>
        <div className={styles.messageBody}>{text}</div>
      </div>
    </div>
  );
}

export default ChatMessageRow;
