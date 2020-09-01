import React from 'react'

export function StarWarsCharacters(props){
    return(
        <div className="character">
             <h1>{props.name}</h1>
                    <ul>
                        <li>
                            {props.height}cm
                        </li>
                        <li>
                            {props.gender}
                        </li>
                    </ul>
        </div>
    )

}