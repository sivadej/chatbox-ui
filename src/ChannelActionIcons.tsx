import React from 'react';

function ChannelActionIcons({ count }: ChannelActionIconsProps): JSX.Element {
  return <div>{count} users in this channel</div>;
}

interface ChannelActionIconsProps {
  count: number;
}

export default ChannelActionIcons;
