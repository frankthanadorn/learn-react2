import React from 'react';

function YourAge(props){
    const age =props.age;
    return (
        <div>
            You are {age > 18 ? 'Old' : 'Young'}
        </div>
            
    )
}

export default YourAge;