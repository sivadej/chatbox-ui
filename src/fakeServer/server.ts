// fake server to mess with the chatbox

import fakeData from './../sampleData.json';
import {IChannel} from './../Channel';

const data: IChannel = { ...fakeData.data };

export function loadInitialData() {
  console.log('initial load',data)
  return data;
}

export function submitMessage() {
  console.log('submitMessage called');
}