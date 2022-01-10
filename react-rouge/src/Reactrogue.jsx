import React , {useRef , useEffect} from 'react'

const Reactrogue = ({width , height , tilesize}) => {
    const canvasRef = useRef();
    useEffect(() => {
        console.log("hello iam using a game")
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0 , 0 , width*tilesize , height*tilesize);
        ctx.fillRect(12 , 20 , 16 , 16)

        
    });
    return (
        <canvas ref={canvasRef} width={width * tilesize} height = {height*tilesize} style={{border: "1px solid black"}}>
          
        </canvas>
    )
}

export default Reactrogue
