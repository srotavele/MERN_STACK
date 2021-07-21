import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';


function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  return (
    <>
      <MessageForm />
      <MessageDisplay message={currentMsg} />
    </>
  );
}

export default App;



