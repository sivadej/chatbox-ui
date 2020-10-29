import React from 'react';
import ChatMessageRow from './ChatMessageRow';
import ChatMessageRowSubsequent from './ChatMessageRowSubsequent';

// render messages from array of objects.
// render LineBreakRow between days.
// use SubsequentMessageRow if previous message is same user.

//prev author {messages[idx - 1] && messages[idx - 1].displayName}
function ChatMessages({ messages }) {
  return (
    <div>
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
