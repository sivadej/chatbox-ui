import React from 'react';
import ChatMessageRow from './ChatMessageRow';
import ChatMessageRowSubsequent from './ChatMessageRowSubsequent';
import styles from './ChatMessages.module.css';
import LineBreakWithDate from './LineBreakWithDate';

// render messages from array of objects.
// use SubsequentMessageRow if previous message is same user.

// TODO: render LineBreakRow component between days.

function ChatMessages({ messages }: ChatMessagesProps): JSX.Element {
  console.log('test heree');
  return (
    <div className={styles.container}>
      {messages &&
        messages.map((msg: any, idx: number) => {
          if (idx !== 0 && messages[idx - 1].authorId === msg.authorId)
            return (
              <>
                <LineBreakWithDate timestamp={msg.timestamp} />
                <ChatMessageRowSubsequent message={msg} />
              </>
            );
          else
            return (
              <>
                <LineBreakWithDate timestamp={msg.timestamp} />
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
