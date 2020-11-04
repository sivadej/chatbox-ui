// tools to mess with ChatBox UI component.
import React, { useState } from 'react';
import './App.css';
import ChatBoxUI, { IMessage, IChatUser } from './components/ChatBoxUI';
import fakeData from './sampleData/sampleData.json';

const currentUser: IChatUser = {
  displayName: 'Bomby',
  id: 999,
  fullName: 'Bomby K',
};

function App(): JSX.Element {
  const [data, setData] = useState(fakeData.data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [testDivStyle, setTestDivStyle] = useState({});
  const [fixed, setFixed] = useState(true);
  const [responseWillFail, setResponseWillFail] = useState(false);

  const handleSend = (msg: string): void => {
    //update state client side immediately
    const newMsg: IMessage = {
      timestamp: new Date().toISOString(),
      text: msg,
      displayName: currentUser.displayName,
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
        //update local message state with status and id?
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
        <button onClick={() => setLoading(!loading)}>toggle loading</button>
        <button onClick={() => setError(!error)}>toggle error</button>
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
            toggle isFixed
          </button>
        </div>
        <div>
          <button onClick={() => setResponseWillFail((curr) => !curr)}>
            {responseWillFail ? 'resp fail' : 'resp ok'}
          </button>
        </div>
        <div>states:</div>
        <div>messages: {data.messages.length}</div>
        <div>{loading ? 'loading' : 'loaded'}</div>
        <div>{error ? 'has error' : 'no error'}</div>
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
