import React from 'react';
import ChannelBar from './ChannelBar';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import Spinner from './Spinner';
import ChannelError from './ChannelError';
import styles from './ChatBoxUI.module.css';

interface ChatBoxUIProps {
  children: IChannel;
  isLoading: boolean;
  isError: boolean;
  hideStatusBar?: boolean;
  onSend: (text: string) => void;
}

function ChatBoxUI(props: ChatBoxUIProps): JSX.Element {
  const { isLoading, isError, onSend, children, hideStatusBar = false } = props;
  const data = children;

  function handleScrollToRef(messageRef: any) {
    messageRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const ChatInputWithRef = React.forwardRef<HTMLDivElement>((props, ref) => {
    return <ChatInput onSend={onSend} ref={ref} />;
  });

  if (isError) return <ChannelError />;
  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className={styles.mainContainer}>
        {!hideStatusBar ? (
          <div className={styles.fixedContainerTop}>
            <ChannelBar info={data.channelInfo} userCount={data.users.length} />
          </div>
        ) : null}
        <div className={styles.contentWrapper}>
          <div className={styles.overflowContainer}>
            <ChatMessages
              messages={data.messages}
              onScrollToRef={handleScrollToRef}
            />
          </div>
        </div>
        <div className={styles.fixedContainerBottom}>
          {/* <ChatInput onSend={onSend} /> */}
          <ChatInputWithRef />
        </div>
      </div>
    </div>
  );
}

export interface IChannel {
  channelInfo: IChannelInfo;
  users: IChatUser[];
  messages: IMessage[];
}

export interface IMessage {
  timestamp: string;
  text: string;
  authorId?: number;
  displayName: string;
  avatarImg?: string;
  id?: number;
  status?: string;
}

export interface IChatUser {
  id: number;
  fullName: string;
  displayName: string;
  avatarImg?: string;
}

export interface IChannelInfo {
  name: string;
  type: string | 'PUBLIC' | 'PRIVATE' | 'DIRECT'; //temporarily allowing string until i find out why this isn't jiving with compiler
}

export default ChatBoxUI;
