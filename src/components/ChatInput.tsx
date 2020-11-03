import React, { useState } from 'react';
import styles from './ChatInput.module.css';

interface ChatInputProps {
  onSend: (msg: string) => void;
}

function ChatInput(props: ChatInputProps): JSX.Element {
  const { onSend } = props;
  const [text, setText] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!isBtnDisabled) {
      onSend(text.trim());
      setText('');
      setIsBtnDisabled(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsBtnDisabled(e.target.value.trim().length === 0);
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
            disabled={isBtnDisabled}
            className={styles.btnSend}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
