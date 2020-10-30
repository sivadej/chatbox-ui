import React from 'react';
import styles from './Avatar.module.css';

const DEFAULT_AVATAR_URL: string = './defaultAvatar.png';

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
