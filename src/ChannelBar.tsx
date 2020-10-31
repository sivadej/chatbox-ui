import React from 'react';
import ChannelTitleSection from './ChannelTitleSection';
import ChannelActionIcons from './ChannelActionIcons';
import { IChannelInfo } from './Channel';

function ChannelBar({ info, userCount }: ChannelBarProps): JSX.Element {
  return (
    <div>
      <ChannelTitleSection channelName={info.name} channelType={info.type} />
      <ChannelActionIcons count={userCount} />
    </div>
  );
}

interface ChannelBarProps {
  info: IChannelInfo;
  userCount: number;
}

export default ChannelBar;
