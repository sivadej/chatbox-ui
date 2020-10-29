import React from 'react';

function ChatMessageRow({ message }) {
  const { text, timestamp, displayName, avatarImg } = message;
  return (
    <div>
      {timestamp} {displayName} {text} {avatarImg}
    </div>
  );
}

export default ChatMessageRow;
