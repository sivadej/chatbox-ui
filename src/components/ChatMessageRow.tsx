import React from 'react';
import AvatarSmall from './AvatarSmall';
import {
  dateConversionISOtoTime as convertDate,
  dateConversionISOtoShortTime as convertDateShort,
} from './../helpers/dateConversionHelpers';
import styles from './ChatMessageRow.module.css';
import { ChatBoxMessage } from './ChatBoxUI';

interface ChatMessageRowProps {
  message: ChatBoxMessage;
  isSubsequentMsg: boolean;
}

function ChatMessageRow(props: ChatMessageRowProps): JSX.Element {
  const { message, isSubsequentMsg } = props;
  const { text, timestamp, displayName, avatarImg, status } = message;
  const isError = status === 'ERROR';

  return !isSubsequentMsg ? (
    <div className={styles.messageRow}>
      <div className={styles.messageRowLeft}>
        <AvatarSmall imgUrl={avatarImg} altTag={displayName} />
      </div>
      <div className={styles.messageRowRight}>
        <div className={styles.nameTimeRow}>
          <div className={styles.displayName}>{displayName}</div>
          <div className={styles.timestamp}>{convertDate(timestamp)}</div>
        </div>
        <div className={styles.messageBody}>{text}</div>
        <div className={styles.error}>{isError ? DEFAULT_ERROR_MSG : null}</div>
      </div>
    </div>
  ) : (
    <div className={styles.messageRow}>
      <div className={styles.messageRowLeft}>
        <div className={`${styles.timestamp} ${styles.hidden}`}>
          {convertDateShort(timestamp)}
        </div>
      </div>
      <div className={styles.messageRowRight}>
        <div className={styles.nameTimeRow}></div>
        <div className={styles.messageBody}>{text}</div>
        <div className={styles.error}>{isError ? DEFAULT_ERROR_MSG : null}</div>
      </div>
    </div>
  );
}

const DEFAULT_ERROR_MSG: string =
  'An error occurred. This message was not sent.';

export default ChatMessageRow;
