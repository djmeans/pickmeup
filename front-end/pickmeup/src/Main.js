import React from 'react'
// import {Link} from 'react-router-dom'
import {PickUpLine} from './PickUpLine'
import './main.css'

export class Main extends React.Component {
  render() {
    return (
      <div className='app-main'>
        <div className='sub-header'>
          <h2 className='slogan'>"You're going to be drowning in trim, we guarentee it"</h2>
          <div className='filter-buttons'>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className='content'>
          {this.props.pickUpLines.map(pickUpLine => {
            return <PickUpLine pickUpLine={pickUpLine}/>
          })}
        </div>
      </div>
    )
  }
}
