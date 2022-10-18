import React from 'react';
import Whyus  from './components/Whyus';
import Furnitures from './components/Furnitures';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import { Materials } from './components/Materials';
import Footer from './components/Footer';
import Testmonio from './components/Testmonio';


function App() {
  return (
    <div className='' >
        <Navbar/>
        <Whyus />
        <Furnitures/>
        <Aboutus/>
        <Materials/>
        <Testmonio/>
        <Footer/>      
    </div>
  );
}

export default App;
