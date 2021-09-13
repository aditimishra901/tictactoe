import React from 'react'

const StatusMessage = ({winner, current}) => {

 const noMovesLeft = current.board.every((el)=> el !== null);



  return (

   
    <div className= "status-message">
    {  winner &&  <>
      Winner is <span>  </span><span style={{ 
        fontWeight:winner === 'X' ? 'bold' : 'normal',
        color: winner === 'X' ? '#12e177' : '#ffc72a' }}>
            { winner}
        </span> 
    </> }
    {!winner && !noMovesLeft && 
    <>
  Next player is <span>  </span> 
  <span  style={{
    fontWeight:current.isXNext ? 'bold' : 'normal',
    color:current.isXNext  ? '#12e177' : '#ffc72a'}}>
    {current.isXNext ?  'X' :'O' }
    </span> 
    </>
    }
    {!winner && noMovesLeft && 
    <>
    <span style={{color:"#12e177"}}>X</span> and <span style={{color:"#ffc72a"}}>O</span> tied
    </>
    }
    </div>
  )
}

export default StatusMessage
