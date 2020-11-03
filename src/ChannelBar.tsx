import React from 'react';
import ChannelTitleSection from './ChannelTitleSection';
import ChannelActionIcons from './ChannelActionIcons';
import { IChannelInfo } from './Channel';

interface ChannelBarProps {
  info: IChannelInfo;
  userCount: number;
  hideStatusBar: boolean;
}

function ChannelBar(props: ChannelBarProps): JSX.Element {
  const { info, userCount, hideStatusBar } = props;
  return (
    <div>
      {!hideStatusBar ? (
        <>
          <ChannelTitleSection
            channelName={info.name}
            channelType={info.type}
          />
          <ChannelActionIcons count={userCount} />
        </>
      ) : null}
    </div>
  );
}

export default ChannelBar;
