import React from "react";
import ReactDOM from "react";
import Square from './Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const winner = this.calculateWinner();

        let status;
        if (winner)
            status = 'Winner is: ' + winner;
        else
            status = this.state.xIsNext ? 'Next player: X' : 'Next player:O';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    handleClick(i) {
        if (this.state.squares[i] || this.calculateWinner())
            return;
        const sq = this.state.squares.slice();
        if (this.state.xIsNext) {
            sq[i] = 'X';
            this.setState({ squares: sq, xIsNext: false })
        }
        else {
            sq[i] = 'O';
            this.setState({ squares: sq, xIsNext: true })
        }
    }

    calculateWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.state.squares[a] != null && this.state.squares[a] === this.state.squares[b] && this.state.squares[b] === this.state.squares[c]) {
                return this.state.squares[a];
            }
        }
        return null;
    }
}

export default Board;