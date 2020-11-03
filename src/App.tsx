// mock functionality for Channel UI component.

import React, { useState } from 'react';
import './App.css';
import Channel from './Channel';

import { loadInitialData, submitMessage } from './fakeServer/server';
const req = loadInitialData();

const testUser: any = {
  displayName: 'Bomby',
};

function App(): JSX.Element {
  const [data, setData] = useState(req.data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleSend = (msg: string): void => {
    const res = submitMessage(
      {
        messageId: 9999,
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
          paddingBottom: '10px',
          marginBottom: '10px',
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1000,
        }}>
        <button onClick={() => setLoading(!loading)}>toggle loading</button>
        <button onClick={() => setError(!error)}>toggle error</button>
        <div>test app. dev stuff. states:</div>
        <div>{loading ? 'loading' : 'loaded'}</div>
        <div>{error ? 'has error' : 'no error'}</div>
      </div>

      <Channel
        isLoading={loading}
        hasError={error}
        data={data}
        onSend={handleSend}
      />
    </div>
  );
}

export default App;
