import React from "react";

const Square = ({value, onClick,isWinningSquare}) => {
 


  return (
    <button 
    type ="button" 
    className ="square"
     onClick ={onClick}
     style={{fontWeight: isWinningSquare ? 'bold' : 'normal',
                color: value=== 'X'? '#12e177' :'#ffc72a'
                }}
    >
    {value}
    </button>
  ) ;
}

export default Square;