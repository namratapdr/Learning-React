import React , { Component } from 'react';

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