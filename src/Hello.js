import React from 'react';

class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            counter:0 /*เซตค่าให้เป็น 0*/
        }
    }
/*เปลี่ยนค่า*/
    handleClick(){
        this.setState(function(prevState){
            return{
            counter: prevState.counter +1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Hello React Class Component</h1>
                <p>{this.props.hello}</p>
                
                <button onClick = {this.handleClick.bind(this)}>Click Me to count</button>
                <p>counter: {this.state.counter}</p>
            
            </div>
        )
    }
    
}
export default Hello;