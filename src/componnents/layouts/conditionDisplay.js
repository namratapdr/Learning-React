import React , {Component} from 'react'
import {Conditional} from './conditionalRendering'

export class Condition extends Component {
    constructor(){
        super()
        this.state = {
            isLoading:true
        }
    }

    componentDidMount(){
        setTimeout(
            ()=> {
                this.setState({
                    isLoading:false
                })
            }, 1500
        )
    }
    //the loading screen shoukd be rendered in App.js 
    render(){
        return (
            <div>
                {this.state.isLoading ? <h1>Loading....</h1>:
                 <Conditional isLoading={this.state.isLoading}/>}
               
            </div>
        )
    }
}