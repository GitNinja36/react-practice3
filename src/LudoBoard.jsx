import { useState } from "react"

export default function LudoBoard(){
    let[moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});

    function handelBlueMoves(){
        
        setMoves((prevValue) => {
            return {...prevValue, blue : prevValue.blue + 1};
        });
    }
    function handelYellowMoves(){
        setMoves((prevValue) => {
            return {...prevValue, yellow : prevValue.yellow + 1};
        });
    }
    function handelRedMoves(){
        setMoves((prevValue) =>{ 
            return{...prevValue, red : prevValue.red + 1};
        });
    }
    function handelGreenMoves(){
        setMoves((prevValue)=>{
            return {...prevValue, green : prevValue.green + 1};
        });
    }

    return(
        <div>
            <h1>Ludo Board Game </h1>
            <div className="board">
                <p>Blue Move = {moves.blue} </p>
                <button style={{backgroundColor: "blue"}} onClick={handelBlueMoves}>+1</button>
                <p>yellow Move = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={handelYellowMoves}>+1</button>
                <p>Red Move = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={handelRedMoves}>+1</button>
                <p>Green Move = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={handelGreenMoves}>+1</button>
            </div>
        </div>
    );
}