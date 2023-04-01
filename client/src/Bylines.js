import React from 'react';

export const Bylines = () => {
    return (
      <footer>
      <h3 className='section-header'>Brought to you by:</h3>
      <div className='bylines-div'>
        <div className='bylines-text-div'>
            <p>Design & code by <a href="https://github.com/witcheswhocode">Liz Anderson</a></p>
            <br></br>
            <p><a href="https://github.com/ryuphi/astrology-api">Astrology API Code</a> by <a href="https://github.com/ryuphi">Marcos Corona</a></p>
            <br></br>
            <p><a href="">Give feedback here.</a></p>
        </div>
      </div>
      </footer>
    )
  }

  export default Bylines