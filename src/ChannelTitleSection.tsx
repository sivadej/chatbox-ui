import React from 'react';

function ChannelTitleSection({
  channelName,
  channelType,
}: ChannelTitleSectionProps): JSX.Element {
  return <div>{`#${channelName} (${channelType})`}</div>;
}

// TODO: limit channelType in type def (ex: 'public', 'private', 'direct')

interface ChannelTitleSectionProps {
  channelName: string;
  channelType: string;
}

export default ChannelTitleSection;
