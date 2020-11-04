// tools to mess with ChatBox UI component.

import React, { useState } from 'react';
import './App.css';
import ChatBoxUI from './components/ChatBoxUI';

import {
  loadInitialData,
  submitMessage,
  submitMessageWithError,
} from './fakeServer/server';
const req = loadInitialData();

const testUser: any = {
  displayName: 'Bomby',
};

function App(): JSX.Element {
  const [data, setData] = useState(req.data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [testDivStyle, setTestDivStyle] = useState({});

  const handleSend = (msg: string): void => {
    const res = submitMessage(
      {
        timestamp: new Date().toISOString(),
        text: msg,
        displayName: testUser.displayName,
      },
      data
    );
    setData(res);
  };

  const sendExpectingError = (msg: string): void => {
    const res = submitMessageWithError(
      {
        timestamp: new Date().toISOString(),
        text: msg,
        displayName: testUser.displayName,
      },
      data
    );
    setData(res);
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
            400x400
          </button>
          <button onClick={() => setTestDivStyle({})}>full window</button>
        </div>
        {/* <div>
          <button onClick={() => sendExpectingError('this should not work')}>
            attempt send w/ failure
          </button>
        </div> */}
        <div>states:</div>
        <div>messages: {data.messages.length}</div>
        <div>{loading ? 'loading' : 'loaded'}</div>
        <div>{error ? 'has error' : 'no error'}</div>
      </div>

      <div style={testDivStyle}>
        <ChatBoxUI isLoading={loading} isError={error} onSend={handleSend}>
          {data}
        </ChatBoxUI>
      </div>
    </div>
  );
}

export default App;
