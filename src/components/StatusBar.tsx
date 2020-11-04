import React from 'react';
import { ChatBoxInfo, ChatBoxUser } from './ChatBoxUI';
import styles from './StatusBar.module.css';

interface StatusBarProps {
  info: ChatBoxInfo;
  users: ChatBoxUser[];
}

function StatusBar(props: StatusBarProps): JSX.Element {
  const { info, users } = props;
  return (
    <div className={styles.bar}>
      <div>{users.length} users in this channel</div>
      <div>{`#${info.name} (${info.type})`}</div>
    </div>
  );
}

export default StatusBar;
