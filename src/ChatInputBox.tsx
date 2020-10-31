import React, { useState } from 'react';

// TODO: Maybe switch over to using Formik????

function ChatInputBox({ handleSend }: ChatInputBoxProps): JSX.Element {
  const [text, setText] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('ChatInputBox handleClick():', text);
    handleSend(text);
  };

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}></input>
      <button onClick={(e) => handleClick(e)}>send</button>
    </div>
  );
}

interface ChatInputBoxProps {
  handleSend: (msg: string) => void;
}

export default ChatInputBox;
