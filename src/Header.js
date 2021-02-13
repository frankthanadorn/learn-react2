import React,{useState} from 'react';

function Header(props){
    const [count, setCount]=useState(0);
    return(
      <div>
      <h1>Header</h1>
      <p>{props.message}</p>
      <p>You Click {count} time</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      );
    }
  export default Header;