import React, { useState } from 'react';

import styles from './ChatInputBox.module.css';

function ChatInputBox({ handleSend }: ChatInputBoxProps): JSX.Element {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log('ChatInputBox handleClick():', text);
    handleSend(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ChatInputBox handleChange() called');
    setIsDisabled(e.target.value.trim().length === 0);
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.messageRow}>
        <input
          className={styles.inputBox}
          type='text'
          value={text}
          placeholder='Message'
          onChange={(e) => handleChange(e)}></input>
      </div>
      <div className={styles.iconRow}>
        <button
          onClick={(e) => handleClick(e)}
          disabled={isDisabled}
          className={styles.icon}>
          send
        </button>
      </div>
    </div>
  );
}

interface ChatInputBoxProps {
  handleSend: (msg: string) => void;
}

export default ChatInputBox;
