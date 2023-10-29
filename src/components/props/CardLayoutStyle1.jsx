import React from 'react'
import { CardDetails } from './Card'

function CardLayoutStyle1() {
	return (
		<section className='cardPreview'>
			<h1>Cards Style</h1>
			<p>This is card layout example where I use <strong>React Props</strong> for card details information</p>
			<div className="mq-container">
				<CardDetails imgPath="./assets/images/card-1.png" title="Texan Steak House Delivery" type="Web Design" />
				<CardDetails imgPath="./assets/images/card-2.png" title="Swells" type="Mobile App Design" />
				<CardDetails imgPath="./assets/images/card-3.png" title="Make a Wish with Dream Whip" type="Facebook App Design" />
				<CardDetails imgPath="./assets/images/card-4.png" title="Lifetime Furniture" type="Web Design" />
			</div>
		</section>
	)	
}

export default CardLayoutStyle1
