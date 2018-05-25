import React from 'react'
import './pick-up-line.css'

export class PickUpLine extends React.Component {
  render() {
    return (
      <div className='pick-up-line'>
        <span>Category: {this.props.pickUpLine.category}</span>
        <h3>{this.props.pickUpLine.p_u_line}</h3>
        <p>{this.props.pickUpLine.success_rate}%</p>
      </div>
    )
  }
}
