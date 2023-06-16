import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import Header from './components/Header';
import Forms from './components/Header/Forms';
import { BrowserRouter, Routes, Route } from "react-router-dom";




// import PageContent from './components/page-Content';
// import AppFooter from './components/Footer';
// import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
  
  <Header/>
   <Forms/>

   
   
    </div>
  );
}

export default App;
 