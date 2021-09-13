import React from 'react'

const History = ({history,moveTo, currentMove}) => {
  return (
    <div className="history-wrapper">
     <ul className="history">
   { history.map((_, move) => {
     return (
       <li key={move}>
      <button 
      
     style={{
        fontWeight:move === currentMove ? 'bold' : 'normal', 
        color: move===currentMove ? '#12e177' : '#fff'
      }}
      
      type="button" 
      onClick={()=>{
        moveTo(move)
      }}>
      { move === 0 ? 'Go to game start' : `Go to move #${move}` }
      </button>
      </li>
      )
    })}
    {/* style={{
        fontWeight:move === currentMove ? 'bold' : 'normal'
      }} */}
      
    </ul>

    </div>
   
  )
}

export default History
