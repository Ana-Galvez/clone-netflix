import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // a partir de la versión 6 de React ya no se usa Switch, sino Routes
import { Counter } from './features/counter/Counter';
// import './App.css';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';

function App() {// hay que poner element y no aparte sino tira error
  const user = 'a'
  return (
    <div className="App">
      <BrowserRouter>
        {
          !user ? (<Login />) : (
            <Routes> 
              <Route path='/profile' element={<Profile />}/> 
              <Route path='/checkout' element={<Paypal />}/>
              <Route path='/' element={<Home />}/>
            </Routes>
          )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
