import React, { useRef, useEffect } from 'react';
import ChatMessageRow from './ChatMessageRow';
import styles from './ChatMessages.module.css';
import LineBreakWithDate from './LineBreakWithDate';
import { isSameDate } from './../helpers/dateConversionHelpers';
import { IMessage } from './ChatBoxUI';

// render messages from array of objects.
// render SubsequentMessageRow component only if previous message is same user.
// render LineBreakRow to separate messages by day.
// first message of each new day should never be a subsequent message.

interface ChatMessagesProps {
  messages: IMessage[];
}

function ChatMessages(props: ChatMessagesProps): JSX.Element {
  const { messages } = props;
  const endOfListRef: any = useRef<HTMLDivElement>(null);

  function doTheScrollThing() {
    endOfListRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    doTheScrollThing();
  }, [messages]);

  return (
    <div>
      <button onClick={doTheScrollThing}>scroll</button>
      <div className={styles.container}>
        {messages.map((msg: IMessage, idx: number) => {
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
        <div id='messages-list-end' ref={endOfListRef} />
      </div>
    </div>
  );
}

export default ChatMessages;
