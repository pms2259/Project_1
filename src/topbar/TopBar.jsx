import React from 'react'
import './TopBar.css';

export default function TopBar() {
  return (
      <div className='top'>
          <div className='topLeft'>
            <i class="fab fa-facebook-square"></i>
          </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topList'>HOME</li>
          <li className='topList'>ABOUT</li>
          <li className='topList'>CONTACT</li>
          <li className='topList'>WRITE</li>
          <li className='topList'>LOGOUT</li>
        </ul>
      </div>
          <div className='topRight'>r</div>
      </div>
  )
}