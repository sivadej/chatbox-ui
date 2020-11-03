import React from 'react';
import ChannelBar from './ChannelBar';
import ChatInputBox from './ChatInputBox';
import ChatMessages from './ChatMessages';
import Spinner from './Spinner';
import ChannelError from './ChannelError';
import styles from './Channel.module.css';

function Channel({ isLoading, hasError, data, onSend }: any): JSX.Element {
  if (hasError) return <ChannelError />;
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.channelContainer}>
      <ChannelBar info={data.channelInfo} userCount={data.users.length} />
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
  messageId: number;
  timestamp: string;
  text: string;
  authorId?: number;
  displayName: string;
  avatarImg?: string;
}

export interface IChatUser {
  id: number;
  fullName: string;
  displayName: string;
  avatarImg?: string;
}

export interface IChannelInfo {
  name: string;
  type: string | 'private' | 'public' | 'direct'; //temporarily allowing string until i find out why this isn't jiving with compiler
}

export default Channel;
