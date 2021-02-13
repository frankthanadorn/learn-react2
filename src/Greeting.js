import React from 'react';
//สร้าง component 
// function UserGreeting(props){
//     return <h1>Welcome Frank!</h1>;

// }

// function GuestGreeting(props){
//     return <h1>Please Sign Up</h1>;
// }
// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;

//     if (isLoggedIn){
//         return <UserGreeting />
//     }
//     return  <GuestGreeting />
// }

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    let message;

    if (isLoggedIn){
        return message = <h1>Welcome Frank!</h1>;
    } else{
        return  message = <h1>Please Sign Up</h1>;
}

}

export default Greeting;