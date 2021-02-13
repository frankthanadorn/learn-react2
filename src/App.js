import React from 'react';
//import Clock from './clock';
import './App.css';
//import Header from './Header';
//import Content from './Content';
//import Hello from './Hello';
//import Click from './click';
//import EventBind from './EventBind'
//import Greeting from './Greeting';
import NameList from './NameList'
function App() {

 // function handleClick(e){
  //  e.preventDefault();
   // console.log('The link was clicked');
  //}
  const messages = ['M1','M2','M3'];
  return (
    <div>
      {/* <Greeting isLoggedIn={false}/> */}
      {/* <YourAge age ={20}/> */}
      <NameList/>
    </div>
  );
}


export default App;
