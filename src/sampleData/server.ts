// fake server to mess with the chatbox
import fakeData from './sampleData.json';
import {IChannel, IMessage} from '../components/ChatBoxUI';

const data: IChannel = { ...fakeData.data };

export function loadInitialData() {
  // setTimeout(()=>{
  //   console.log('getting initial data');
  // },1000);
  return {loading: false, error: false, data: data};
}

export function submitMessage(msg: IMessage, channel: IChannel): IChannel {
  // setTimeout(()=>{
  //   console.log('SERVER: message successfully sent')
  // },1000);
  const updatedData = {...channel, messages: [...channel.messages, msg]}
  console.log(updatedData)
  return updatedData;
}

export function submitMessageWithError(msg: IMessage, channel: IChannel): IChannel {
  // setTimeout(()=>{
  // },1000);
  const badMsg = {...msg, status: 'ERROR', text:'hey'};
  const updatedData = {...channel, messages: [...channel.messages, badMsg]}
  console.log('SERVER: error. message was not sent.');
  return submitMessage(badMsg, channel);
}