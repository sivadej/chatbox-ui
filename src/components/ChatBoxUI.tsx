import React from 'react';
import ChannelBar from './ChannelBar';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import Spinner from './Spinner';
import ChannelError from './ChannelError';
import styles from './ChatBoxUI.module.css';

interface ChatBoxUIProps {
  children: IChannel;
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
    children,
    hideStatusBar = false,
    isFixedSize = false,
  } = props;
  const data: IChannel = children;

  if (isError) return <ChannelError />;
  if (isLoading) return <Spinner />;

  return (
    <div
      className={
        isFixedSize ? styles.outerContainerFixed : styles.outerContainerFlex
      }>
      <div className={styles.mainContainer}>
        {!hideStatusBar && data.channelInfo && data.users ? (
          <div className={styles.fixedContainerTop}>
            <ChannelBar info={data.channelInfo} userCount={data.users.length} />
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

export interface IChannel {
  channelInfo?: IChannelInfo;
  users?: IChatUser[];
  messages: IMessage[];
}

export interface IMessage {
  timestamp: string;
  text: string;
  userId?: number;
  displayName: string;
  avatarImg?: string;
  id?: number;
  status?: string;
}

export interface IChatUser {
  id: number;
  fullName: string;
  displayName: string;
  avatarImg?: string;
}

export interface IChannelInfo {
  name: string;
  type: string | 'PUBLIC' | 'PRIVATE' | 'DIRECT'; //temporarily allowing string until i find out why this isn't jiving with compiler
}

export default ChatBoxUI;
