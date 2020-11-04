// tools to mess with ChatBox UI component.
import React, { useState } from 'react';
import './App.css';
import ChatBoxUI, { IMessage, IChatUser } from './components/ChatBoxUI';
import fakeData from './sampleData/sampleMessagesOnly.json';
//import fakeData from './sampleData/sampleData.json';
//import fakeData from './sampleData/sampleData2.json';

const bomby: IChatUser = {
  displayName: 'Bomby',
  id: 999,
  fullName: 'Bomby K',
};

const jane: IChatUser = {
  id: 2,
  fullName: 'Jane Smith',
  displayName: 'jane',
  avatarImg: 'https://randomuser.me/api/portraits/women/76.jpg',
};

function App(): JSX.Element {
  const [data, setData] = useState(fakeData.data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [testDivStyle, setTestDivStyle] = useState({});
  const [fixed, setFixed] = useState(true);
  const [responseWillFail, setResponseWillFail] = useState(false);
  const [user, setUser] = useState(bomby);

  const handleSend = (msg: string): void => {
    //update client-side state immediately
    const newMsg: IMessage = {
      timestamp: new Date().toISOString(),
      text: msg,
      displayName: user.displayName,
      userId: user.id,
      avatarImg: user.avatarImg,
    };
    const newDataObject: any = {
      ...data,
      messages: [...data.messages, newMsg],
    };
    setData(newDataObject);

    if (responseWillFail) {
      setTimeout(() => {
        console.log('SERVER: response error');
        newMsg.status = 'ERROR';
        const newDataObject: any = {
          ...data,
          messages: [...data.messages, newMsg],
        };
        setData(newDataObject);
      }, 2000);
    } else {
      setTimeout(() => {
        console.log('SERVER: response ok');
        newMsg.status = 'SENT';
        const newDataObject: any = {
          ...data,
          messages: [...data.messages, newMsg],
        };
        setData(newDataObject);
      }, 1000);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '0.9em',
          paddingBottom: '10px',
          marginBottom: '10px',
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1000,
          opacity: 0.7,
        }}>
        <div>ChatBoxUI Tester</div>
        <button onClick={() => setLoading(!loading)}>
          {loading ? 'loading' : 'loaded'}
        </button>
        <button onClick={() => setError(!error)}>
          {error ? 'load error' : 'no error'}
        </button>
        <div>
          <button
            onClick={() =>
              setTestDivStyle({
                width: '400px',
                height: '400px',
                border: '1px solid black',
              })
            }>
            fixed 400
          </button>
          <button onClick={() => setTestDivStyle({})}>full flex</button>
          <button onClick={() => setFixed((curr) => !curr)}>
            {fixed ? 'fixed style' : 'flex style'}
          </button>
        </div>
        <div>
          <button onClick={() => setResponseWillFail((curr) => !curr)}>
            {responseWillFail ? 'resp fail' : 'resp ok'}
          </button>
          <button onClick={() => setUser(bomby)}>user: bomby</button>
          <button onClick={() => setUser(jane)}>user: jane</button>
        </div>
        <div>current user: {user.displayName}</div>
        <div>messages: {data.messages.length}</div>
      </div>

      <div style={testDivStyle}>
        <ChatBoxUI
          isLoading={loading}
          isError={error}
          onSend={handleSend}
          isFixedSize={fixed}
          hideStatusBar>
          {data}
        </ChatBoxUI>
      </div>
    </div>
  );
}

export default App;
