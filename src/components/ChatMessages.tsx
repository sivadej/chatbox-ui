import React, { useRef, useEffect } from 'react';
import ChatMessageRow from './ChatMessageRow';
import styles from './ChatMessages.module.css';
import LineBreakWithDate from './LineBreakWithDate';
import { isSameDate } from './../helpers/dateConversionHelpers';
import { ChatBoxMessage } from './ChatBoxUI';

// render messages from array of objects.
// render SubsequentMessageRow component only if previous message is same user.
// render LineBreakRow to separate messages by day.
// first message of each new day should never be a subsequent message.

interface ChatMessagesProps {
  messages: ChatBoxMessage[];
}

function ChatMessages(props: ChatMessagesProps): JSX.Element {
  const { messages } = props;

  // scroll to bottom of messages list on each render
  const endOfListRef: any = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endOfListRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div>
      <div className={styles.container}>
        {messages.map((msg: ChatBoxMessage, idx: number) => {
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
            messages[idx - 1].userId === msg.userId
          )
            isSubsequentMsg = true;

          // TODO: key={idx} is not recommended. maybe modify props to require a unique msg id
          return (
            <div key={idx}>
              {isLineBreakNeeded ? (
                <LineBreakWithDate timestamp={msg.timestamp} />
              ) : null}
              <ChatMessageRow message={msg} isSubsequentMsg={isSubsequentMsg} />
            </div>
          );
        })}

        {!messages.length ? (
          <div className={styles.emptyChat}>
            No messages in this chat yet. Say hello!
          </div>
        ) : null}

        <div id='messages-list-end' ref={endOfListRef}></div>
      </div>
    </div>
  );
}

export default ChatMessages;
