import React from 'react';
import StatusBar from './StatusBar';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import Spinner from './Spinner';
import ChatBoxError from './ChatBoxError';
import styles from './ChatBoxUI.module.css';

interface ChatBoxUIProps {
  children: ChatBox;
  isLoading: boolean;
  isError: boolean;
  hideStatusBar?: boolean;
  isFixedSize?: boolean;
  onSend: (text: string) => void;
}

function ChatBoxUI(props: ChatBoxUIProps): JSX.Element {
  const {
    isLoading,
    isError,
    onSend,
    children = DEFAULT_CHATBOX_DATA,
    hideStatusBar = false,
    isFixedSize = false,
  } = props;
  const data: ChatBox = children;

  if (isError) return <ChatBoxError />;
  if (isLoading) return <Spinner />;

  return (
    <div
      className={
        isFixedSize ? styles.outerContainerFixed : styles.outerContainerFlex
      }>
      <div className={styles.mainContainer}>
        {!hideStatusBar && data.info && data.users ? (
          <div className={styles.fixedContainerTop}>
            <StatusBar info={data.info} users={data.users} />
          </div>
        ) : null}
        <div className={styles.contentWrapper}>
          <div className={styles.overflowContainer}>
            <ChatMessages messages={data.messages} />
          </div>
        </div>
        <div className={styles.fixedContainerBottom}>
          <ChatInput onSend={onSend} />
        </div>
      </div>
    </div>
  );
}

export interface ChatBox {
  info?: ChatBoxInfo;
  users?: ChatBoxUser[];
  messages: ChatBoxMessage[];
}

export interface ChatBoxMessage {
  timestamp: string;
  text: string;
  userId?: number;
  displayName: string;
  avatarImg?: string;
  id?: number;
  status?: string;
}

export interface ChatBoxUser {
  id: number;
  fullName: string;
  displayName: string;
  avatarImg?: string;
}

export interface ChatBoxInfo {
  name: string;
  type: string;
}

const DEFAULT_CHATBOX_DATA: ChatBox = { messages: [] };

export default ChatBoxUI;
