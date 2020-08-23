import React , { Component } from 'react'

/**
 * Props can't be changed i.e. they're immuatable
 * that's why we use states , state is a variable the class maintains ,
 * a state of the class can be changed
 * we need to add a constructor method to the class component 
 * constructor method in JS is a function which initialises all the class members
 * super() method calls the parent class and brings components from it.
 * always add super() to a constructor
 * 
 * 
 */
export class Welcome extends Component {
    constructor(){
        super() 
        //we need to use this keyword when using class
        this.state = {
            message: "State: Welcome Visitor"
        }
    }
    change(){
        this.setState ({
            message: "Set State: Thank you for Subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick= { () => this.change()}>State :Subscribe</button>
            </div>
        );
    }
}