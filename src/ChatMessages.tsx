import React from 'react';
import ChatMessageRow from './ChatMessageRow';
import ChatMessageRowSubsequent from './ChatMessageRowSubsequent';
import styles from './ChatMessages.module.css';

// render messages from array of objects.
// use SubsequentMessageRow if previous message is same user.

// TODO: render LineBreakRow component between days.

function ChatMessages({ messages }: any): JSX.Element {
  return (
    <div className={styles.container}>
      {messages &&
        messages.map((msg: any, idx: number) => {
          if (idx !== 0 && messages[idx - 1].authorId === msg.authorId)
            return <ChatMessageRowSubsequent message={msg} />;
          else return <ChatMessageRow message={msg} />;
        })}
    </div>
  );
}

interface ChatMessagesProps {
  messages: {
    timestamp: string;
    text: string;
    authorId: number;
    displayName: string;
    avatarImg?: string;
  };
}

export default ChatMessages;
