import React from 'react';

export const Bylines = () => {
    return (
      <footer>
      <h3 className='section-header'>Brought to you by:</h3>
      <div className='bylines-div'>
        <img src='/portrait1cropped.png' alt='liz' />
        <div className='bylines-text-div'>
            <p><strong>Liz Anderson</strong></p>
            <p>Indie Developer</p>
            <p>Website</p>
        </div>
      </div>
      <div className='bylines-div'>
        <div className='bylines-text-div'>
            <p><a href="https://github.com/ryuphi/astrology-api">Astrology API Code</a> by <a href="https://github.com/ryuphi">Marcos Corona</a></p>
            <br></br>
            <p><a href="https://github.com/ryuphi/astrology-api">Give feedback here.</a></p>
        </div>
      </div>
      </footer>
    )
  }

  export default Bylines