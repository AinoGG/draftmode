import { useState } from "react";
import './board.scss';

const Board = () => {
    return (
        <>
            <div className="board-box">
                <div className="firstPlayer-state"></div>
                <ul className="cards-container">
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                    <li className="cards-item"></li>
                </ul>                
                <div className="secondPlayer-state"></div>
            </div>
        </>
    )
}

export default Board;