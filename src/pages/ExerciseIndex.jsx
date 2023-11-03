import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function ExerciseIndex() {
  const [openBackBtn, setOpenBackBtn] = useState(true)

  const toogleBackBtn = () => {
    setOpenBackBtn(!openBackBtn)
  }

  return (
    <section>
      <Link className='backtoHome' onClick={ () => { toogleBackBtn (openBackBtn)}} id={openBackBtn ? "hide" : "show"} to ="/">
        <ArrowCircleLeftIcon />
        {/* <span>Back to Home</span> */}
      </Link>
      <div className="mq-container" id={openBackBtn ? "show" : "hide"}>
        <h1>React Exercise Indexing</h1>
        <p>Click links to naviate diffrent exersice pages</p>
          <ul onClick={toogleBackBtn}>
              <li><Link to="/Props"> Props </Link></li>
              <li><Link to="/TernaryOperators"> Ternary Operators, List </Link></li>
              <li><Link to="/UseState"> UseState Hook, States </Link></li>
          </ul>
      </div>
    </section>
  )
}

export default ExerciseIndex