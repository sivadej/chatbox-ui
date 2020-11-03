import React from 'react';
import ChannelBar from './ChannelBar';
import ChatInputBox from './ChatInputBox';
import ChatMessages from './ChatMessages';
import Spinner from './Spinner';
import ChannelError from './ChannelError';
import styles from './Channel.module.css';

interface ChannelUIProps {
  children: IChannel;
  isLoading: boolean;
  isError: boolean;
  onSend: (text: string) => void;
}

function Channel(props: ChannelUIProps): JSX.Element {
  const { isLoading, isError, onSend, children } = props;
  const data = children;

  if (isError) return <ChannelError />;
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.channelContainer}>
      <ChannelBar
        info={data.channelInfo}
        userCount={data.users.length}
        hideStatusBar
      />
      <ChatMessages messages={data.messages} />
      <ChatInputBox onSend={onSend} />
    </div>
  );
}

export interface IChannel {
  channelInfo: IChannelInfo;
  users: IChatUser[];
  messages: IMessage[];
}

export interface IMessage {
  timestamp: string;
  text: string;
  authorId?: number;
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

export default Channel;
