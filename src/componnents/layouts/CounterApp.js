import React , {Component}  from 'react'
//Simple Counter using React



//Anytime a function is used with setState in it , it needs to be binded with the class
//the binding makes sure that the method with setState in it is bounded to the 'this' reference in the class
//learn more about binding
export class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickSub = this.handleClickSub.bind(this)
        this.handleClickReset = this.handleClickReset.bind(this)
    }
        handleClickAdd(){
            this.setState((prevState) => {
                return{
                    count: prevState.count + 1
                }
            })
        }
        handleClickSub(){
            this.setState((prevState) => {
                return{
                    count: prevState.count - 1
                }
            })
        }
        handleClickReset(){
            this.setState((prevState)=>{
                return { count: 0 }
            })
        }
        render(){
            return(
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.handleClickAdd}>Increase</button>
                    <button onClick={this.handleClickReset}>Reset</button>
                    <button onClick={this.handleClickSub}>Decrease</button>
                </div>
            )
        }
}