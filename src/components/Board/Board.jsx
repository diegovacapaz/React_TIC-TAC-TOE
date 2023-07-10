import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cell from "./Cell/Cell";
import "./Board.css";

const Board = () => {
    const [board,setBoard] = useState(Array(9).fill(undefined));

    const navigate = useNavigate();
    
    return (
        <>
            <section className="game">
                <article className="container">
                    <div className="board">                    
                        {board.map((cell,index)=>{
                            return <Cell key={index}></Cell>
                        })}
                    </div>
                </article>
            </section>
            <section className="center">
                <button className="btn btn-white" type="button" onClick={()=> navigate("/")}>Volver</button>
            </section>
        </>
    )
}

export default Board