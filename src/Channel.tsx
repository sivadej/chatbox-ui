import React, { useState, useEffect } from 'react';
import ChannelBar from './ChannelBar';
import ChatInputBox from './ChatInputBox';
import ChatMessages from './ChatMessages';
import { loadInitialData, submitMessage } from './fakeServer/server';

function Channel(): JSX.Element {
  //const data: IChannel = { ...sampleData.data };
  const [data, setData] = useState(loadInitialData());

  useEffect(() => {
    console.log('useEffect called');
  }, []);

  const handleSend = (msg: string) => {
    console.log('Channel handleSend():', msg);
  };

  return (
    <div>
      <ChannelBar info={data.channelInfo} userCount={data.users.length} />
      <ChatMessages messages={data.messages} />
      <ChatInputBox handleSend={handleSend} />
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
