import React from 'react';
import ChatMessageRow from './ChatMessageRow';
import ChatMessageRowSubsequent from './ChatMessageRowSubsequent';
import styles from './ChatMessages.module.css';
import LineBreakWithDate from './LineBreakWithDate';
import { isSameDate } from './dateConversionHelpers';

// render messages from array of objects.
// use SubsequentMessageRow if previous message is same user.
// render LineBreakRow to separate messages by day.
//

function ChatMessages({ messages }: ChatMessagesProps): JSX.Element {
  return (
    <div className={styles.container}>
      {messages &&
        messages.map((msg: any, idx: number) => {
          //determine if line break needs to render
          let lineBreakNeeded = true;
          if (
            idx !== 0 &&
            isSameDate(messages[idx].timestamp, messages[idx - 1].timestamp)
          ) {
            lineBreakNeeded = false;
          }

          if (idx !== 0 && messages[idx - 1].authorId === msg.authorId)
            return (
              <>
                {lineBreakNeeded ? (
                  <LineBreakWithDate timestamp={msg.timestamp} />
                ) : null}
                <ChatMessageRowSubsequent message={msg} />
              </>
            );
          else
            return (
              <>
                {lineBreakNeeded ? (
                  <LineBreakWithDate timestamp={msg.timestamp} />
                ) : null}
                <ChatMessageRow message={msg} />
              </>
            );
        })}
    </div>
  );
}

interface ChatMessagesProps {
  messages: Message[];
}

interface Message {
  timestamp: string;
  text: string;
  authorId: number;
  displayName: string;
  avatarImg?: string;
}

export default ChatMessages;
