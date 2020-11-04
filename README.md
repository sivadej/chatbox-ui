## ChatBoxUI

**Reusable component for chatroom-style messaging. UI inspired by Slack messaging channels.**

**Core Functionality**

- Displays timestamped messages with user's name and avatar.
- Optional: Can display as a "chat room" with users

**Expected Behavior**

- Should scale to the full height and width of its parent.
- ChatBox containing no messages should display a general greeting, informing user that the chatbox is loaded.
- Messages list should be contained in a scrollable area.
- On load and on send, the messages list should scroll to the bottom of the scrollable area.
- The messages list should contain line breaks for each day with each line showing the date. More recent messages should be designated using line breaks showing "Today" and "Yesterday" instead of their respective dates.
- Message send should ignore leading and trailing whitespaces
- The 'Send' button should only be clickable while the input field contains text
- The onSend callback should be invoked by clicking the 'Send' button or pressing Enter while the input text field is in focus.
- It should be able to handle an optimistic UI pattern for message send.
- A status bar should be displayed if users and chat room info are provided, otherwise the status bar will be hidden. There should be an option to force the status bar not to render.

**Props**

| Name                          | Type             | Description                                                                                                                       |
| ----------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `children`                    | `ChatBox`        | Message and (optional) User and ChatRoom data                                                                                     |
| `isLoading`                   | `boolean`        | Hides main component and displays loading animation. Default: true                                                                |
| `isError`                     | `boolean`        | Hides main component and displays general error. Not related to per-message errors. Default: false                                |
| `onSend`                      | `(string)=>void` | Callback with message text                                                                                                        |
| `hideStatusBar`<br>(optional) | `boolean`        | Hide status bar that normally renders when ChatBoxUser and ChatBoxInfo are provided                                               |
| `isFixedSize` <br>(optional)  | `boolean`        | Must be enabled this if component is being rendered inside an element with a fixed height, otherwise it will not render properly. |

**Interfaces**

```
ChatBox {
  info?: ChatBoxInfo;
  users?: ChatBoxUser[];
  messages: ChatBoxMessage[];
}
```

```
ChatBoxMessage {
  timestamp: string;
  text: string;
  userId?: number;
  displayName: string;
  avatarImg?: string;
  id?: number;
  status?: string;
}
```

```
ChatBoxInfo {
  name: string;
  type: string;
}
```

```
ChatBoxUser {
  id: number;
  fullName: string;
  displayName: string;
  avatarImg?: string;
}
```

Note: Every ChatBoxMessage object contains denormalized user data independent of ChatBoxUser data.

**Example**

```
// State and functions handled within this parent component:
// loading, error, handleSend, fixed, data
...
        <ChatBoxUI
          isLoading={loading}
          isError={error}
          onSend={handleSend}
          isFixedSize={fixed}
          hideStatusBar>
          {data}
        </ChatBoxUI>
```
