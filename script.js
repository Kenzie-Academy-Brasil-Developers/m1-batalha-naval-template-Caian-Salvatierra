// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips (shipPositions,initialBoard){
  for( let i = 0; i < shipPositions.length; i++){
    const row = shipPositions[i][0];
    const colum = shipPositions[i][1];

    initialBoard [row][colum] = "S"
   
  }
  return  initialBoard 


}


function checkGuesses(guesses, mountedBoard){
  for(let i = 0; i < guesses.length ; i++){
    const row = guesses[i][0];
    const colum = guesses[i][1];
    
    if (mountedBoard[row][colum] === "S"){
      mountedBoard [row][colum] = "X"
     }

  }
   return mountedBoard
}



function checkWinCondition(guessedBoard){
  
  for(let i = 0; i < guessedBoard.length; i++){
    for(let j = 0; j < guessedBoard[i].length; j++){
    
      if(guessedBoard[i][j] === "S"){
        return false;
      }
      
    }
  }
    return true
}




