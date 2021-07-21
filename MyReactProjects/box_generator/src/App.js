import React, {useState} from 'react';
import Form from "./components/form";
import './App.css';

function App() {
  const [boxes, setBoxes] = useState ({
    color: "",
    size: ""
  })
  // const [listBox, setListBox] = useState([])
  // const [newSize, setNewSize] = useState ('')
  
  return (
    <div className="App">
      <Form boxes = {boxes} setBoxes ={setBoxes} list={listBox} setList={setListBox}/>
      <Boxes/>
    </div>
  );
}

export default App;
