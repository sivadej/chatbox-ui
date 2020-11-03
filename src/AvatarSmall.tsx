import React from 'react';
import styles from './Avatar.module.css';

const DEFAULT_AVATAR_URL: string =
  'https://i0.wp.com/davismarketingcompany.com/wp-content/uploads/2016/01/avatar_placeholder_small.png?w=300&ssl=1';

function AvatarSmall({
  imgUrl = DEFAULT_AVATAR_URL,
  altTag = 'avatar',
}: AvatarSmallProps): JSX.Element {
  return <img src={imgUrl} alt={altTag} className={styles.avatarSmall} />;
}

interface AvatarSmallProps {
  imgUrl?: string;
  altTag?: string;
}

export default AvatarSmall;
