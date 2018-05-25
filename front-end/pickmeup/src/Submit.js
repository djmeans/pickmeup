import React from 'react'


export class Submit extends React.Component {
  render(){
    return(
      <div className='submit-container'>
        <form className='submit-form'>
          <label htmlFor='name'>Submitted by: </label>
          <textarea name="name" type=""></textarea>
          <label htmlFor='line'>Submitted by: </label>
          <textarea name="line"></textarea>
          <label htmlFor='success-rate'>Submitted by: </label>
          <input name='success-rate'></input>
        </form>
      </div>
    )
  }
}
