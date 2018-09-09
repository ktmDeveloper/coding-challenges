// N Queens using backtracking
// https://youtu.be/jJPtLzq1E-Y
/*  
  Q Q Q Q
 ___ ___ ___ ___
|___|___|___|___|
|___|___|___|___|
|___|___|___|___|
|___|___|___|___|

*/
/*
 ___ ___ ___ ___
|___|___|_Q_|___|
|_Q_|___|___|___|
|___|___|___|_Q_|
|___|_Q_|___|___|
*/
function nQueens(n) {
    let queens = [];

    function placeQueen(col) {
        if (col >= n) {
            return true;
        }

        let row = 0;

        while (row < n) {
            queens.push([row, col])
            if (isSafe(row, col) && placeQueen(col + 1)) {
                return true
            }

            queens.pop();
            row++
        }
        return false
    }

    function isSafe(row, col) {
        for (let i = 0; i < queens.length - 1; i++) { // dont check the last item as it is the one we are checking, so queens.length - 1
            let ro = queens[i][0];
            let co = queens[i][1];

            if (row === ro) {
                return false
            }

            if (Math.abs(row - ro) === Math.abs(col - co)) {
                return false
            }
        }
        return true
    }

    if (placeQueen(0)) {
        return queens
    }

    return null
}

console.log(nQueens(4))