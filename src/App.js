import React from 'react';
import './App.css';
import Login from './components/Auth/Login';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div >
     
        <Route path ="/" component = {Login} />
      
    </div>
  );

}

export default App;
