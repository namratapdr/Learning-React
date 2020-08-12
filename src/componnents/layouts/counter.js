import React, { Component } from 'react'
//Set State in details in a Class
// for functions you need to use hooks
export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    //setState has two two parameters as default
    
    increment(){
        // USE THIS!!
        //to use the previous state of the setState method
        //here the second parameter is props
    /*this.setState((prevState) => ({
        count: prevState.count + 1
         
    }))
            console.log('Callback value',this.state.count)
            }
    */
        this.setState(
            {
               count: this.state.count + 1 
            }
            , () => {
                console.log('Callback value',this.state.count)
            }
        )
    }
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={ () => this.increment()}>Increment</button>
            </div>
        )
    }
}

