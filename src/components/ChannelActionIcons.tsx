import React from 'react';

interface ChannelActionIconsProps {
  count: number;
}

function ChannelActionIcons(props: ChannelActionIconsProps): JSX.Element {
  const { count } = props;
  return <div>{count} users in this channel</div>;
}

export default ChannelActionIcons;
