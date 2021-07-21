import './App.css';
import {useState} from 'react'
import Tabs from './components/tabs'



function App() {
  const tabs = [
  {
    title: 'Tab 1',
    content: 'Tab One'
  },
  {
    title: 'Tab 2',
    content: 'Tab Two'
  },
  {
    title: 'Tab 3',
    content: 'Tab Three'
  },
  {
    title: 'Tab 4',
    content: 'Tab Four'
  }
]
const [idx, setIdx] = useState('test')



  return (
    <div className="App">
     <Tabs tabs={tabs} idx={idx} setIdx={setIdx}/>
    </div>
  );
}

export default App;
