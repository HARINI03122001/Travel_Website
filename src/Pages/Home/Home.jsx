import React from 'react';
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouriteSection from '../../Components/FavouriteSection/FavouriteSection';
import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
import NeedInspirationSection from '../../Components/NeedInspirationSection/NeedInspirationSection';

function Home() {
    return (
        <div className='home-page'>
            <HeroSection />
            <SearchForm/>
            <LastHolidaysSection/>
            <div className='my-4 my-sm-5'>
                <RecommendedSection itemRecommendedTitle='Recommended for you'/>
            </div>
            <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday'/>
            <FavouriteSection/>
            <RecentHolidays/>
            <NeedInspirationSection/>
        </div>
    )
}

export default Home;