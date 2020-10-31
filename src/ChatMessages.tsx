import React from 'react';
import ChatMessageRow from './ChatMessageRow';
import ChatMessageRowSubsequent from './ChatMessageRowSubsequent';
import styles from './ChatMessages.module.css';
import LineBreakWithDate from './LineBreakWithDate';
import { isSameDate } from './dateConversionHelpers';
import { IMessage } from './Channel';

// render messages from array of objects.
// render SubsequentMessageRow component only if previous message is same user.
// render LineBreakRow to separate messages by day.
// first message of each new day should never be a subsequent message.
function ChatMessages({ messages }: ChatMessagesProps): JSX.Element {
  return (
    <div className={styles.container}>
      {messages &&
        messages.map((msg: IMessage, idx: number) => {
          // determine if a line break needs to render above this message.
          let isLineBreakNeeded: boolean = true;
          if (
            idx !== 0 &&
            isSameDate(messages[idx].timestamp, messages[idx - 1].timestamp)
          ) {
            isLineBreakNeeded = false;
          }

          // determine if this is a subsequent message.
          let isSubsequentMsg: boolean = false;
          if (
            idx !== 0 &&
            !isLineBreakNeeded &&
            messages[idx - 1].authorId === msg.authorId
          ) {
            isSubsequentMsg = true;
          }

          //if (isSubsequentMsg)
          return (
            <>
              {isLineBreakNeeded ? (
                <LineBreakWithDate timestamp={msg.timestamp} />
              ) : null}
              {isSubsequentMsg ? (
                <ChatMessageRowSubsequent message={msg} />
              ) : (
                <ChatMessageRow message={msg} />
              )}
            </>
          );
        })}
    </div>
  );
}

interface ChatMessagesProps {
  messages: IMessage[];
}

export default ChatMessages;
