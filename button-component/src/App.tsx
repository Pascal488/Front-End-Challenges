import React from 'react';
import './App.css';


import Nav from './components/Sidebar';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div>
      <Nav/>
      </div>
      <div className='button-content'>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>

      </div>
    </div>
  );
}

export default App;
