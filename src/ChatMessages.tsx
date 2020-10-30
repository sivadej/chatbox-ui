import React from 'react';
import ChatMessageRow from './ChatMessageRow';
import ChatMessageRowSubsequent from './ChatMessageRowSubsequent';
import styles from './ChatMessages.module.css';

// render messages from array of objects.
// use SubsequentMessageRow if previous message is same user.

// TODO: render LineBreakRow component between days.

function ChatMessages({ messages }) {
  return (
    <div className={styles.container}>
      {messages &&
        messages.map((msg, idx) => {
          if (idx !== 0 && messages[idx - 1].authorId === msg.authorId)
            return <ChatMessageRowSubsequent message={msg} />;
          else return <ChatMessageRow message={msg} />;
        })}
    </div>
  );
}

export default ChatMessages;
