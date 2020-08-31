import React from 'react'


//onChange : another event useful for to-do app
export const EventHandler = () => {
    function clickMe() {
        console.log("i was clicked")
    }
    function hoverMe(){
       console.log("Hovered")
    }
    return (
        <div>
            <img height="300px" width="400px"src="https://namratapdrjs.netlify.app/scrolling-animations/assets/dark.png" onMouseOver={hoverMe} alt="flowers"></img>
            <button onClick={clickMe}>Click</button>
            
        </div>
    )
}

//For more events
/**
 * Some Mouse events
 * 
 * onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
 * 

    UI Events
    Event names:

    onScroll


    mage Events
Event names:

onLoad onError
Animation Events
Event names:

onAnimationStart onAnimationEnd onAnimationIteration
Properties:

string animationName
string pseudoElement
float elapsedTime

 */