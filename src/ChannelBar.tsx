import React from 'react';
import ChannelTitleSection from './ChannelTitleSection';
import ChannelActionIcons from './ChannelActionIcons';

function ChannelBar({ info, userCount }: ChannelBarProps): JSX.Element {
  return (
    <div>
      <div>ChannelBar component -</div>
      <ChannelTitleSection channelName={info.name} channelType={info.type} />
      <ChannelActionIcons count={userCount} />
    </div>
  );
}

interface ChannelBarProps {
  info: { name: string; type: string };
  userCount: number;
}

export default ChannelBar;
