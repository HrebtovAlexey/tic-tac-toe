class TicTacToe {
    constructor() {

        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.currentSymbold = 'x';

        this.move = 0;
    }

    // should return x or o
    getCurrentPlayerSymbol() {
        return this.currentSymbold;
    }

    // should properly update class state (change current player, update marks storage etc.)
    nextTurn(rowIndex, columnIndex) {

        if (typeof this.grid[rowIndex][columnIndex] == 'string') {
            this.currentSymbold = this.currentSymbold == 'o' ? 'o' : 'x';
            return this.grid;
        } else {
            this.grid[rowIndex][columnIndex] = this.currentSymbold;
        }

        this.currentSymbold = this.currentSymbold == 'o' ? 'x' : 'o';

        this.move++;

        return this;
    }

    // should return true if game is finished (e.g. there is a winner or it is a draw)
    isFinished() {
        if (this.getWinner() !== null || this.isDraw()) {
            return true;
        }
        
        return false;
    }

    // should return winner symbol (x or o) or null if there is no winner yet
    getWinner() {

        var winner = false, counter = 0, i, j;

        for (i = 0; i <= 2; i++) {
            for (j = 0; j <= 2; j++, counter++) {
                if (counter == 0) {
                    winner = this.grid[i][j];
                }
                if (this.grid[i][j] != winner) {
                    winner = false;
                }
                if (counter == 2 && typeof winner == "string") {
                    return winner;
                }
            }
            counter = 0;
            winner = false;
        }

        for (i = 0; i <= 2; i++) {
            for (j = 0; j <= 2; j++, counter++) {
                if (counter == 0) {
                    winner = this.grid[j][i];
                }
                if (this.grid[j][i] != winner) {
                    winner = false;
                }
                if (counter == 2 && typeof winner == "string") {
                    return winner;
                }
            }
            counter = 0;
            winner = false;
        }

        if(this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2]) {
            return this.grid[1][1];
        }
        if(this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0]) {
            return this.grid[1][1];
        }

        return null;
    }

    // should return true if there is no more fields to place a x or o
    noMoreTurns() {
        return this.move >= 9;
    }

    // should return true if there is no more turns and no winner
    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        }

        return false;
    }

    // should return matrix[row][col] value (if any) or null
    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
