import React from 'react'

const Reactrogue = ({width , height , tilesize}) => {
    return (
        <canvas width={width * tilesize} height = {height*tilesize} style={{border: "1px solid black"}}>
          
        </canvas>
    )
}

export default Reactrogue
