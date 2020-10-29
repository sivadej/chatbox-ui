import React from 'react';
import ChannelBar from './ChannelBar';
import ChatInputBox from './ChatInputBox';
import ChatMessages from './ChatMessages';

import sampleData from './sampleData.json';

function Channel(): JSX.Element {
  const handleSend = () => {
    console.log('sending message...');
  };

  const tempCurrUser = { id: 1 };

  const { data } = sampleData;
  return (
    <div>
      <div>channel component</div>
      <ChannelBar info={data.channelInfo} userCount={data.users.length} />
      <ChatMessages messages={data.messages} />
      <ChatInputBox currentUser={tempCurrUser} handleSend={handleSend} />
    </div>
  );
}

export default Channel;
