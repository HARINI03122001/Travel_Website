import React from 'react';
import Copyright from '../../Assets/Icons/c-circle.svg'

function Footer() {
  return (
    <div className='py-3'>
        <p className='mb-0'>
            Copyright
            <img src={Copyright} classname='mx-1' alt='copyright' width="15px" height="15px"/>
            Ionut Cora 2024
        </p>
    </div>
  )
}

export default Footer;