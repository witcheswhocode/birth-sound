import React from 'react';

export const Bylines = () => {
    return (
      <footer>
      <div className='bylines-div'>
        <img src='/portrait1cropped.png' alt='liz' />
        <div className='bylines-text-div'>
            <p><strong>Liz Anderson</strong></p>
            <p>Indie Developer</p>
            <p>Website</p>
        </div>
      </div>
      <div className='bylines-div'>
        <img src='/khrystoph.jpg' alt='liz' />
        <div className='bylines-text-div'>
            <p><strong>Khrystoph</strong></p>
            <p>Musician</p>
            <p>email@address.com</p>
        </div>
      </div>
      </footer>
    )
  }

  export default Bylines