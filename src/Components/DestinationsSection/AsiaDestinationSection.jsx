import React from 'react';
import '../CityBreaksSection/CityBreaksSection.css';
import Container from 'react-bootstrap/Container';
import CityBreakCard from '../CityBreaksSection/CityBreakCard';
import AsiaDestinationsItems from '../../Assets/AsiaDestinationsItems';

function AsiaDestinationSection() {
  return (
    <div className='city-breaks-section my-4 my-sm-5'>
      <Container>
        <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>Asia</h3>
        <div className='row g-4'>
            {
                AsiaDestinationsItems.map((item) => <CityBreakCard key={item.id} itemTitle={item.itemTitle} itemSubTitle={item.itemSubTitle} itemNights={item.itemNights} itemPrice={item.itemPrice} itemImage={item.itemImage}/>)
            }
        </div>
      </Container>

    </div>
  )
}

export default AsiaDestinationSection;