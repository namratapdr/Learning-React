import React , {Component} from 'react'

//Checks the user is logged in or logged out
//This method uses conditional rendering


/**
 * Mistakes i made making this:
 * Forgot to bind my handleChange function
 */
export class Log extends Component{
    constructor(){
        super()
        this.state ={
            logged : false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        this.setState((prevState) =>{
            return {
                logged : !prevState.logged
            }
        })
    }
    render(){

        return (
            <div>
                {this.state.logged?<h1>logged in</h1>:<h1>You're logged out 
                    .Want to log in?</h1>}
                <button onClick={this.handleChange}>{this.state.logged?<h3>log out</h3>:<h3>log in</h3>}</button>
            </div>
        )
    }
}