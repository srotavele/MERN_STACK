import './App.css';
import Todo from "./components/todos";
import Form from "./components/form";
import React, {useState} from 'react';


function App() {
    const [tasks, setTasks] = useState ([])

    const [idx, setIdx] = useState('')
    
  return (
    <div className="App">
     <Form tasks={tasks} setTasks={setTasks} idx = {idx} setIdx ={setIdx}/>
     <Todo tasks={tasks} setTasks={setTasks} idx={idx} setIdx={setIdx}/>
    </div>
  );
}
export default App;
