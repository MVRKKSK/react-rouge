import React, { useRef, useEffect, useState } from 'react'
import Inputmanager from './InputManager';
import Player from './Player';
import World from './World';

const Reactrogue = ({ width, height, tilesize }) => {
    let inputManager = new Inputmanager();
    const canvasRef = useRef();
    const [player, setPlayer] = useState(new Player(1 , 2 , tilesize))
    const [world, setWorld] = useState(new World(width , height , tilesize))
    const handleInput = (action, data) => {
        console.log(`handle input : ${action}: ${JSON.stringify(data)}`)
        let newPlayer = new Player();
        Object.assign(newPlayer , player);
        newPlayer.move(data.x , data.y);
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
        world.draw(ctx);
        player.draw(ctx);


    });
    return (
        <canvas ref={canvasRef} width={width * tilesize} height={height * tilesize} style={{ border: "1px solid black" }}>

        </canvas>
    )
}

export default Reactrogue;
