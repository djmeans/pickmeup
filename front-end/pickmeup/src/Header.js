import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'


export class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <h1 className="app-title"><Link to='/app/home'>Pick Me Up</Link></h1>
        <nav className='nav-right'>
          <ul>
            <li><Link to='/app/home'>Home</Link></li>
            <li><Link to='/app/submit'>Submit</Link></li>
            <li><Link to='/app/endorsements'>Endorsements</Link></li>
            <li><Link to='/app/about-us'>About</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}
