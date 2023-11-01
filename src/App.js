
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {  useEffect } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useStateValue } from './StateProvider';
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    const auth=firebase.auth()
    auth.onAuthStateChanged(authUser=>{
      console.log('The user is->>>',authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
       <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
        <Route path="/" element={[<Header />, <Home />]}/>
      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
