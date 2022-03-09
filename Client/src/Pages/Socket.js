import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import '../Style/Socket.css';

// const socket = io.connect('http://localhost:4000');

const Socket = () => {
  // const [state, setState] = useState({message: '', name: ''});
  // const [chat, setChat] = useState([]);
  //
  // useEffect(() => {
  //   socket.on('message', ({name, message}) => {
  //     setChat([...chat, {name, message}]);
  //   });
  // });
  //
  // const onTextChange = (e) => {
  //   setState({...state, [e.target.name]: e.target.value});
  // };
  //
  // const onMessageSubmit = (e) => {
  //   e.preventDefault();
  //   const {name, message} = state;
  //   socket.emit('message', {name, message});
  //   setState({message: '', name});
  // };
  //
  // const renderChat = () => {
  //   return chat.map(({name, message}, index) => (
  //     <div key={index}>
  //       <h3>
  //         {name}:<span>{message}</span>
  //       </h3>
  //     </div>
  //   ));
  // };

  return (
    <>
      {/*<ul className="messages">{renderChat()}</ul>*/}
      {/*<form className="form" action="">*/}
      {/*  <input name="name" value={state.name} className="input" autoComplete="off" onChange={(e) => onTextChange(e)} />*/}
      {/*  <input*/}
      {/*    name="message"*/}
      {/*    value={state.message}*/}
      {/*    className="input"*/}
      {/*    autoComplete="off"*/}
      {/*    onChange={(e) => onTextChange(e)}*/}
      {/*  />*/}
      {/*  <button onClick={onMessageSubmit}>Send</button>*/}
      {/*</form>*/}
    </>
  );
};

export default Socket;
