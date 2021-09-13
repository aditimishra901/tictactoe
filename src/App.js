import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";





import { calculationWinner } from "./helper";

import "./styles/root.css";
const NEWGAME = [
  {board:Array(9).fill(null), isXNext: true},
];

function App() {


  const [history,setHistory] = useState(NEWGAME);
  
  const [currentMove, setCurrentMove]= useState(0);

  const current = history[currentMove];

 
  
   const {winner, winningSquares} = calculationWinner(current.board);
   
   
  
  const handleSquareClick = position => {

       if(current.board[position] || winner){
         return;
       }

      setHistory(prev =>{
        const last = prev[prev.length-1];

        const newBoard= last.board.map((square,pos) =>{
             if(pos === position){
               return last.isXNext ? 'X' : 'O';
             }
             
   
             return square;
            
        });   

        return prev.concat({board:newBoard, isXNext: !last.isXNext});

      });
     
      setCurrentMove(prev => prev +1);

   };
   const moveTo = (move) => {
     setCurrentMove(move);
   }

    const onNewGame =() =>{
      setHistory(NEWGAME);
      setCurrentMove(0);
    }
  return (
   <div className="app">
     <h1>TIC <span className="text-green">TAC</span> TOE</h1>
     <StatusMessage winner={winner} current={current}/>
     <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
   <button type="button" onClick={onNewGame} 
   className="btn-reset">
   Start New Game
   </button>
   <h2 style={{fontWeight:'normal'}}>Current Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
    <div className="bg-balls"></div>
   </div>
   
  );
}

export default App;
