import React from 'react';
import './Holidays.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import EveryoneHolidays from '../../Components/EveryoneHoliday/EveryoneHolidays';
import NeedInspirationSection from '../../Components/NeedInspirationSection/NeedInspirationSection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';

function Holidays() {
    return (
        <div className='holiday-page'>
            <SecondHeroSection secondHeroTitle="Your Perfect Holiday"/>
            <EveryoneHolidays/>
            <NeedInspirationSection/>
            <NextHoliday/>
            <HolidayPlanSection itemHolidayPlanTitle="Plan Your Summer Holiday"/>
            <div className='mt-4 mt-sm-5'>
                <RecommendedSection itemRecommendedTitle='Recommended for you'/>
            </div>
        </div>
    );
}

export default Holidays;