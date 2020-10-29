import React from 'react';
import ChatMessageRow from './ChatMessageRow';

function ChatMessages({ messages }) {
  return (
    <div>
      {messages && messages.map((msg) => <ChatMessageRow message={msg} />)}
    </div>
  );
}

export default ChatMessages;
