import React, {Component} from 'react'
import {StarWarsCharacters} from './starwars'
//For this we will be using the free Star wars free Api

/**
 * Things to check out if you don't know already
 *  1. fetch()
 *  2. promises in Js
 */

export class StarWars extends Component{
    constructor(){
        super()
        this.state = {
            error:null,
            isLoading:true,
            character : []
        }
   
    }
    componentDidMount(){
        fetch("https://swapi.dev/api/people/")
        .then(result => result.json())
        .then(
            (data) => {
                console.log(data)
                this.setState({
                    isLoading:false,
                    character: data.results
                })
            } 
       ,
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
             }
        )
    }

    render(){
        const {error,isLoading,character } = this.state
        if (error) {
            return (
                <div>
                    Error fetching data from API
                </div>
            )
        }
        else if (isLoading){
            return (
                <div>
                    Loading....
                </div>
            )
        }
        else {
           
         const charactersArray = this.state.character.map(items => <StarWarsCharacters key={items.name} name={items.name} height={items.height} gender={items.gender}/>)
            return(
                <div>
                    {charactersArray}
                </div>
                
            )
        }
    }

}