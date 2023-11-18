import React from 'react'
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function ChangeState() {
  const [Like, setLike] = useState(0);

  const IncreaseLikeCount = () =>{
    setLike(Like + 1);
  };
  
  const [Dislike, setDislike] = useState(0);
  const DecreaseLikeCount = () =>{
    setDislike(Dislike - 1);
  };

  return (
    <div className='mq-container'>
      <h2>Simply useState</h2>
			<p>This is Simple like count example where I am using <strong>UseState Hook</strong> for Like Increase and Decrease.</p>
      <div className='count-widget'>
        <button  className='tag' onClick={IncreaseLikeCount}><ThumbUpIcon /> Like</button> <span>{Like}</span>
        <button  className='tag' onClick={DecreaseLikeCount}><ThumbDownIcon /> Dislike</button> <span>{Dislike}</span>
      </div>
    </div>
  )
}

export default ChangeState