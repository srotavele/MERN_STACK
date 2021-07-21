import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
        <Header  />
        <Navigation />
        <Main>
          <div className="sub">
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
            <Advertisement />
        </Main>
    </div>
  );
}

export default App;
