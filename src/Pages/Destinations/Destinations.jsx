import React from 'react';
import './Destinations.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import EuropeDestinationsSection from '../../Components/DestinationsSection/EuropeDestinationsSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import AsiaDestinationSection from '../../Components/DestinationsSection/AsiaDestinationSection';
import NeedInspirationSection from '../../Components/NeedInspirationSection/NeedInspirationSection';

function Destinations() {
  return (
    <div className='destinations-page'>
      <SecondHeroSection secondHeroTitle='Beautiful destinations'/>
      <EuropeDestinationsSection/>
      <HolidayPlanSection itemHolidayPlanTitle='Find Your Perfect Summer Holiday'/>
      <AsiaDestinationSection/>
      <NeedInspirationSection/>
    </div>
  )
}

export default Destinations;