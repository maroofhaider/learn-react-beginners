import React from 'react'

export const CardDetails = (props) => {
	return (
		<div className="card-layout-style1">
			<img src={props.imgPath} alt="" />
			<div className="card-info">
				<h3 className="project-title">{props.title}</h3>
				<p className="project-type">{props.type}</p>
			</div>
		</div>
	)
} 





