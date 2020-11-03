import React, { useState } from 'react';

import styles from './ChatInputBox.module.css';

function ChatInputBox({ onSend }: ChatInputBoxProps): JSX.Element {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!isDisabled) {
      onSend(text.trim());
      setText('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisabled(e.target.value.trim().length === 0);
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form>
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
            onClick={(e) => handleSend(e)}
            disabled={isDisabled}
            className={styles.btnSend}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

interface ChatInputBoxProps {
  onSend: (msg: string) => void;
}

export default ChatInputBox;
