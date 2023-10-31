import React from 'react'
import { CardSort } from '../components/ternary-operators-lists/CardSort'

function TernaryOperators() {
  return (
      <ol>
        
        {CardSort.map(
          (CardSort, key) => !CardSort.isWebDesign && <li><h2>{CardSort.name}</h2></li>
        )}
      
      </ol>

  )
}

export default TernaryOperators
