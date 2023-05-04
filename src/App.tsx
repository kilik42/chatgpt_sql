import React from 'react';
import CodeDisplay from './components/CodeDisplay';
// import MessageDisplay from './components/MessageDisplay';
import MessagesDisplay from './components/MessagesDisplay';

const App = () =>  {
  return (
    <div className="App">
        <MessagesDisplay />
        <input type="text" />
      
        <br />
        
        <CodeDisplay />

        <div className="button-container">
          <button id="get-query">get query!</button>
          <button id="clear-chat">clear chat</button>
        </div>
    </div>
  );
}

export default App;
