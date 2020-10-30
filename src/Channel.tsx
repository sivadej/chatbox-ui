import React from 'react';
import ChannelBar from './ChannelBar';
import ChatInputBox from './ChatInputBox';
import ChatMessages from './ChatMessages';
import sampleData from './sampleData.json';

function Channel(): JSX.Element {
  const { data }: any = sampleData;
  const tempCurrUser = { id: 1 };

  const handleSend = (msg: any) => {
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

interface ChannelData {
  data: {
    channelInfo: { name: string; type: string };
    users: {
      id: number;
      fullName: string;
      displayName: string;
      avatarImg?: string;
    }[];
    messages: {
      timestamp: string;
      text: string;
      authorId: number;
      displayName: string;
      avatarImg?: string;
    }[];
  };
}

export default Channel;
