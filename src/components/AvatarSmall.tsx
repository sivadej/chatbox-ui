import React from 'react';
import styles from './Avatar.module.css';

const DEFAULT_AVATAR_URL: string =
  'https://i0.wp.com/davismarketingcompany.com/wp-content/uploads/2016/01/avatar_placeholder_small.png?w=300&ssl=1';

interface AvatarSmallProps {
  imgUrl?: string;
  altTag?: string;
}

function AvatarSmall(props: AvatarSmallProps): JSX.Element {
  const { imgUrl = DEFAULT_AVATAR_URL, altTag = 'avatar' } = props;
  return <img src={imgUrl} alt={altTag} className={styles.avatarSmall} />;
}

export default AvatarSmall;
