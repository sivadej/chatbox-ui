import React from 'react';
import { ChatBoxInfo, ChatBoxUser } from './ChatBoxUI';
import styles from './StatusBar.module.css';

interface StatusBarProps {
  info: ChatBoxInfo;
  users: ChatBoxUser[];
}

// fixed status bar displayed at top of ChatBox.
// TODO: find a nice way to show users in chat

function StatusBar(props: StatusBarProps): JSX.Element {
  const { info, users } = props;
  return (
    <div className={styles.bar}>
      <div>{users.length} users in this chat</div>
      <div>{`${info.name} (${info.type})`}</div>
    </div>
  );
}

export default StatusBar;
