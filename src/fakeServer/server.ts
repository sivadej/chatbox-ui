// fake server to mess with the chatbox
import fakeData from './../sampleData.json';
import {IChannel, IMessage} from './../Channel';

const data: IChannel = { ...fakeData.data };

export function loadInitialData() {
  setTimeout(()=>{
    console.log('getting initial data');
  },1000);
  return {loading: false, error: false, data: data};
}

export function submitMessage(msg: IMessage, channel: IChannel): IChannel {
  // console.log('submitMessage called');
  // console.log('msg obj received', msg)

  setTimeout(()=>{
    console.log('SERVER: message successfully sent')
  },1000);

  // TODO: mock network error 

  // add this message to Messages array
  const updatedMessages = [...channel.messages, msg]
  const updatedData = {...channel, messages: updatedMessages}

  // return data with updated message array
  return updatedData;
}