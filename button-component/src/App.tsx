import React from 'react';
import './App.css';


//import Nav from './components/Sidebar';
import Button from './components/Button';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      
       <BrowserRouter>
          <Nav/>
       </BrowserRouter>
       
      {/* <div>
      <Nav/>
      </div>
      <h5>Buttons</h5>
      <div className='flex-content'>
        <div className='button-content'>
      <Button />
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>

        </div>
        <div className='button-content-center'>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/> 
      <Button/>
      <Button/>
      <Button/>
        </div>
      <div className='button-content-end'>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      </div>
      </div> */}
    </div>
  );
}

export default App;
