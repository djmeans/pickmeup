import React from 'react'
import './pick-up-line.css'

export class PickUpLine extends React.Component {
  render() {
    return (
      <div className='pick-up-line'>
        <span className='category'>Category: {this.props.pickUpLine.category}</span>
        <h3 className='line'>{this.props.pickUpLine.p_u_line}</h3>
        <p className='success'>Success Rate: {this.props.pickUpLine.success_rate}%</p>
      </div>
    )
  }
}
