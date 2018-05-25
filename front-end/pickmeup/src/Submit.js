import React from 'react'
import './submit.css'

export class Submit extends React.Component {
  render(){
    return(
      <div className='submit-container'>
        <h2 className='submit-header'>Add Your Pick Up Line Below</h2>
        <form className='submit-form'>
          <label htmlFor='name'>Submitted By</label>
          <input name="name" type="text" required></input>
          <label htmlFor='line'>Add Pick Up Line</label>
          <textarea name="line" rows='7' required></textarea>
          <label htmlFor='success-rate'>Success Rate</label>
          <input name='success-rate' type='number' required></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}
