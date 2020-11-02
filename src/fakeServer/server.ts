// fake server to mess with the chatbox

import fakeData from './../sampleData.json';
import {IChannel, IMessage} from './../Channel';

const data: IChannel = { ...fakeData.data };

export function loadInitialData() {
  console.log('initial load',data)
  return data;
}

export function submitMessage() {
  console.log('submitMessage called');
  const testMsg: IMessage = {
    timestamp: ((new Date()).toUTCString()),
    text: 'from testmessage',
    displayName: 'test'
  }

  console.log(testMsg)
}