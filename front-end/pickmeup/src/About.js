import React from 'react';
import './about.css';

export class About extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <div className='title-card'>
        <img className='img' src="../images/brevon.png"/>
          <div className='info-div'>
            <h2 className='name'>Brevon Good</h2>
            <p>Brevon is smoother than ice when it comes to slinging pick up lines. His pick up lines are so smooth you'll end up sliding right into his arms. His average success rate is 72%.</p>
          </div>
        </div>
        <div className='title-card'>
          <img className='img' src="../images/dillon.png"/>
          <div className='info-div'>
            <h2 className='name'>Dillon Means</h2>
            <p>Dillon is the originator of raunchy pick up lines. His sauve looks will leave you breathless regardless the raunchiness of the line. His average success rate is around 83%</p>
          </div>
        </div>
        <div className='title-card'>
          <img className='img' src="../images/keith.png"/>
          <div className='info-div'>
            <h2 className='name'>Keith Decker</h2>
            <p>When you don't know what to say, Keith has your back. He's been crafting pick up lines since he left the crib. His average success rate is 92%</p>
          </div>
        </div>
        <div className='title-card'>
          <img className='img' src="../images/chris.png"/>
          <div className='info-div'>
            <h2 className='name'>Christopher Nemeth</h2>
            <p>Not sure how to break the ice? Ask Chris. He just opened up the school for cool, so you can be on your way to a romantic time. His average success rate is 82%</p>
          </div>
        </div>
      </div>

    )
  }

}
