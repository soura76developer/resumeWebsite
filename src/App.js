import './css/global.css';
import IndexPage from './component/IndexPage.js';
import react,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
     <IndexPage/>
    </>
  );
}

export default App;
