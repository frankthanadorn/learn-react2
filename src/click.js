import React from 'react';


class Click extends React.Component{
    clickHandler(){
        console.log('Clicked the button');
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Mee</button>
            </div>
        
            
        );
    }
}
export default Click;