import React from 'react'


export class Submit extends React.Component {
  render(){
    return(
      <div className='submit-container'>
        <form className='submit-form'>
          <label htmlFor='name'>Submitted by: </label>
          <input name="name" type="text"></input>
          <label htmlFor='line'>Add Pick Up Line:</label>
          <textarea name="line"></textarea>
          <label htmlFor='success-rate'>Success Rate:</label>
          <input name='success-rate' type='number'></input>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    )
  }
}
