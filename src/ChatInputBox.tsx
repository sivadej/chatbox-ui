import React, { useState } from 'react';

function ChatInputBox({ handleSend }) {
  const [text, setText] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    console.log('ChatInputBox handleClick():', text);
    handleSend(text);
  };

  return (
    <div>
      chat input box component
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}></input>
      <button onClick={(e) => handleClick(e)}>send</button>
    </div>
  );
}

export default ChatInputBox;
