import React from 'react';

function ChatInputBox({ currentUser, handleSend }) {
  return (
    <div>
      chat input box component for user id {currentUser.id}
      <button onClick={handleSend}>send</button>
    </div>
  );
}

export default ChatInputBox;
