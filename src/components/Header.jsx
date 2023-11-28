import React from 'react'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Header() {
  return (
    <>
        <header>
            <div className="mq-container mh--flex">
                <Link to="/Home" className='logo'><img src="/assets/images/logo.svg" alt="" /></Link>
                <div className='navi'>
                    <Link to="/">Showcase</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/Blog">Blog</Link>
                </div>
                <Link to="#contact" className='cta mh--button'>Let’s collaborate <ArrowForwardIcon/></Link>
            </div>
        </header>
    </>
  )
}

export default Header