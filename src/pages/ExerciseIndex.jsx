import React from 'react'
import { Link } from "react-router-dom"

function ExerciseIndex() {
  return (
    <section>
        <h1>React Exercise Indexing</h1>
        <p>Click links to naviate diffrent exersice pages</p>
        <div className="mq-container">
            <ul>
                <li><Link to="/Props"> Props </Link></li>
                <li><Link to="/TernaryOperators"> Ternary Operators, List </Link></li>
                <li><Link to="/UseState"> UseState Hook, States </Link></li>
            </ul>
        </div>
    </section>
  )
}

export default ExerciseIndex