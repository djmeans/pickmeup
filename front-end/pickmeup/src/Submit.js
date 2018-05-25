import React from 'react'
import './submit.css'

export class Submit extends React.Component {
  state = {
    pickup: '',
    rating: '',
    category: ''
  }

  handleChange = (event) => {
    const name = event.target.name
    this.setState({[name]: event.target.value})
    console.log('state submitted')
  }

  formSubmit = (event) => {
    console.log('submitted')
    event.preventDefault()
    const url = 'https://pick-me-up-db.herokuapp.com/pickups'
    const postData = {
      p_u_line: this.state.pickup,
      category: this.state.category,
      success_rate: this.state.rating,
    }
    console.log(postData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    this.setState({
      pickup: '',
      rating: '',
      category: ''
    })
  }

  render(){
    return(
      <div className='submit-container'>
        <h2 className='submit-header'>Add Your Pick Up Line Below</h2>
        <form className='submit-form' onSubmit={this.formSubmit}>
          <label htmlFor='name'>Submitted By</label>
          <input name="name" type="text" required></input>
          <label htmlFor='pickup'>Add Pick Up Line</label>
          <textarea name="pickup" rows='7'  onChange={this.handleChange}></textarea>
          <label htmlFor='rating'>Success Rate</label>
          <input name='rating' type='number'  onChange={this.handleChange} required></input>
          <label htmlFor='category' type>Category</label>
          <input name='category' type='text'  onChange={this.handleChange} required></input>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}
