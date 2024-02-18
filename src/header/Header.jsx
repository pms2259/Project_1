import React from 'react'

export default function Header() {
  return (
        <div className='header'>
          <div className="headerTitles">
            <span className="headerTitlesSm">React & node</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
      <img
        className='headerImg'
        src="https://images.pexels.com/photos/20187061/pexels-photo-20187061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
        </div>
  )
}
