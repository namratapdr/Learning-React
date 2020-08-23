import React from 'react'

//props styling and conditional styling
export const Joke = (props) => {
    return(
        <div className="jokes">
           <h2 style={{display : !props.questions && "none"}}>Question: {props.questions}</h2>
    <h3 style={{color: !props.questions? "blue": "red"}}>Answer: {props.punchLine}</h3>
    <hr/>
        </div>
    )
}
//map(),filter(),reduce()