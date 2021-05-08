import React, { useState, useEffect } from 'react';
import { FormControl, Input, IconButton } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from  '@material-ui/icons/Send';

function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([{}]);
  const [username,setUserName] = useState('');


  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})));
    });
  },[]);

  useEffect(() => {
    setUserName(prompt('Please enter your name'));
  },[]);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add(
      {
        message: input, 
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    setInput('');
  };


  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="Facebook messenger logo"/>
      <p className="app_title">Messenger App</p>
      <p className="app_sub_title">Welcome {username}</p>
      <form className="app_form">
        <FormControl className="app_formcontrol">
          <Input className="app_input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app_button" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon/></IconButton>
        </FormControl>
      </form>
      <FlipMove>
        { 
          messages.map(({id,message}) => !!username && !!message  && (
            <Message key={id} username={username} message={message}/>
          ))  
        }
      </FlipMove>
    </div>
  );
}

export default App;
