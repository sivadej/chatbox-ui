import React from 'react';

interface ChannelTitleSectionProps {
  channelName: string;
  channelType: string;
}

function ChannelTitleSection(props: ChannelTitleSectionProps): JSX.Element {
  const { channelName, channelType } = props;
  return <div>{`#${channelName} (${channelType})`}</div>;
}

export default ChannelTitleSection;
