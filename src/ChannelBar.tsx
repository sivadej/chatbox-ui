import React from 'react';
import ChannelTitleSection from './ChannelTitleSection';
import ChannelActionIcons from './ChannelActionIcons';
import { IChannelInfo } from './Channel';

interface ChannelBarProps {
  info: IChannelInfo;
  userCount: number;
}

function ChannelBar(props: ChannelBarProps): JSX.Element {
  const { info, userCount } = props;
  return (
    <div>
      <ChannelTitleSection channelName={info.name} channelType={info.type} />
      <ChannelActionIcons count={userCount} />
    </div>
  );
}

export default ChannelBar;
