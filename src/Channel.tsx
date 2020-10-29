import React from 'react';
import ChannelBar from './ChannelBar';
import ChatInputBox from './ChatInputBox';
import ChatMessages from './ChatMessages';

import sampleData from './sampleData.json';

function Channel(): JSX.Element {
  const { data } = sampleData;
  const tempCurrUser = { id: 1 };

  const handleSend = (msg) => {
    console.log('Channel handleSend():', msg);
  };

  return (
    <div>
      <div>channel component</div>
      <ChannelBar info={data.channelInfo} userCount={data.users.length} />
      <ChatMessages messages={data.messages} />
      <ChatInputBox handleSend={handleSend} />
    </div>
  );
}

export default Channel;
