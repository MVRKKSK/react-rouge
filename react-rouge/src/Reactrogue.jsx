import React, { useRef, useEffect, useState } from 'react'
import Inputmanager from './InputManager';

const Reactrogue = ({ width, height, tilesize }) => {
    let inputManager = new Inputmanager();
    const canvasRef = useRef();
    const [player, setPlayer] = useState({ x: 64, y: 128 })
    const handleInput = (action, data) => {
        console.log(`handle input : ${action}: ${JSON.stringify(data)}`)
        let newPlayer = { ...player };
        newPlayer.x += data.x * tilesize;
        newPlayer.y += data.y * tilesize;
        setPlayer(newPlayer);
    }
    useEffect(() => {
        console.log("bind keys")
        inputManager.bindKeys();
        inputManager.subscribe(handleInput);
        return () => {
            inputManager.unbindKeys();
            inputManager.unsubscribe(handleInput);
        }
    })
    useEffect(() => {
        console.log("hello iam using a game")
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, width * tilesize, height * tilesize);
        ctx.fillRect(player.x, player.y, 16, 16)


    });
    return (
        <canvas ref={canvasRef} width={width * tilesize} height={height * tilesize} style={{ border: "1px solid black" }}>

        </canvas>
    )
}

export default Reactrogue
