import React from 'react'
import { CardDetails } from './Card'

function CardLayoutStyle1() {
	return (
		<section className='cardPreview'>
			<div className="mq-container">
				<h2>Cards Style</h2>
				<CardDetails imgPath="./assets/images/card-1.png" title="Texan Steak House Delivery" type="Web Design" />
				<CardDetails imgPath="./assets/images/card-2.png" title="Make a Wish with Dream Whip" type="Facebook App Design" />
				<CardDetails imgPath="./assets/images/card-1.png" title="Texan Steak House Delivery" type="Web Design" />
				<CardDetails imgPath="./assets/images/card-2.png" title="Make a Wish with Dream Whip" type="Facebook App Design" />
			</div>
		</section>
	)	
}

export default CardLayoutStyle1
