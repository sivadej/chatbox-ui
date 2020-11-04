import React from 'react';
import ChannelTitleSection from './ChannelTitleSection';
import ChannelActionIcons from './ChannelActionIcons';
import { IChannelInfo } from './ChatBoxUI';
import styles from './ChannelBar.module.css';

interface ChannelBarProps {
  info: IChannelInfo;
  userCount: number;
}

function ChannelBar(props: ChannelBarProps): JSX.Element {
  const { info, userCount } = props;
  return (
    <div className={styles.bar}>
      <ChannelTitleSection channelName={info.name} channelType={info.type} />
      <ChannelActionIcons count={userCount} />
    </div>
  );
}

export default ChannelBar;
