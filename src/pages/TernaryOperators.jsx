import React from 'react'
import { CardSort } from '../components/ternary-operators-lists/CardSort'

function TernaryOperators() {
	return (
		<div className="mq-container">
			<h2>Ternary Operators List</h2>
			<p>This is tag layout example where I use <strong>Ternary Operators</strong> for fetching information</p>
			<div className='tag-wrap'>
				{CardSort.map(
					(CardSort, key) => CardSort.isWebDesign && <button className='tag'  key={key}>{CardSort.name}</button>
				)}
			</div>
		</div>
	)
}

export default TernaryOperators
