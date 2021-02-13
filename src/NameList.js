import React from 'react';
import Person from './Person';
function NameList(){

const persons= [
 {
        id:1,
    name:'A',
    age: 20,
    skill: 'HTML'
},
{
    id:2,
name:'B',
age: 2,
skill: 'PHP'
},
{
    id:3,
name:'C',
age: 30,
skill: 'Java'
}
];



const personList = persons.map(person => <Person key = {person.id} person={person}/>);
    
    return (
        <div>
        {personList}
        </div>
    )
}

export default NameList;