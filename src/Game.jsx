import React from "react";
import ReactDOM from "react";
import Board from './Board';

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        )
    }
}

export default Game;