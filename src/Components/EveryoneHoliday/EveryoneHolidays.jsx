import React from 'react';
import './EveryoneHolidays.css';
import Container from 'react-bootstrap/Container';
import EveryoneHolidaysCard from './EveryoneHolidaysCard';
import EveryoneHolidaysItems from '../../Assets/EveryoneHolidaysItems';

function EveryoneHolidays() {
  return (
    <div className='everyone-holidays-section my-4 my-sm-5'>
      <Container>
        <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'>Holiday For Everyone</h2>
        <div className='row g-4'>
          {
            EveryoneHolidaysItems.map((item) =><EveryoneHolidaysCard key={item.id} itemTitle={item.itemTitle} itemSubTitle={item.itemSubTitle} itemPrice={item.itemPrice}/>)
          }
        </div>
      </Container>
    </div>
  )
}

export default EveryoneHolidays;