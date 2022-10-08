import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import Edit from './components/Edit';

function App() {
  
  return (
    <Routes>
    <Route path='/' element={<AddUser></AddUser>}></Route>
  <Route path='/create' element={<Home></Home>}></Route>
 <Route path='/edit' element={<Edit></Edit>}></Route>
  </Routes>
  );
  
}
export default App;
